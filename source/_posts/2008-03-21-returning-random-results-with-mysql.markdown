---
comments: true
date: 2008-03-21 03:20:13
layout: post
slug: returning-random-results-with-mysql
title: Returning random results with MySQL
wordpress_id: 207
categories:
- Databases
---

Selecting random query results is something we often need to do, whether it be a single row or a small record set. You may want to display a random list of "tips" or "facts", a random "user" or "related product" etc.

The simplest and most common solution you find uses the MySQL [rand()](http://dev.mysql.com/doc/refman/5.0/en/mathematical-functions.html#function_rand) function (which can be used to create an integer from 0 to 1.0)

### Solution 1

``` javascript
SELECT		[...]
FROM		Users
ORDER BY	rand()
LIMIT		1
```

This will return 1 random record from the 'Users' table. Sometimes however simplest is not the best, this can often one of those times depending on the table size.

The reason you won't want to do this is because once the table grows larger the operation will be very slow as MySQL will have to process ALL the records in the table (performing a full table scan), order them randomly and then return the first row of the ordered result. This is of course quite intensive the larger your table size and really not a recommended practise for anything other than small lookup tables.

Another often used solution (where the primary key is an auto-incrementing integer) is to use 2 queries, the first gets the min() and max() 'ID' values and the second returns a recordset using a random number (between the min(Id) and max(Id)) in the WHERE clause.

### Solution 2

``` javascript
SELECT	min(Id) as minId, max(Id) as maxId
FROM	Users

SELECT 	*
FROM	Users
WHERE 	Id >= #randRange(minId, maxId)#
LIMIT 	0,	1
```

You can increase the LIMIT to return more rows, but why might you not use this one? Well it uses 2 queries for a start (you could actually put this in a sub query but this method won't work if you want more than 1 result returned), but this mightn't be so bad. Another constraint is that it assumes an integer primary key which you [may not be using](http://www.chapter31.com/2007/01/30/coldfusion-uuids-and-mssql-newid/), meaning the randRange() won't work. Also what happens if you don't have sequential 'Ids'? You may have deleted some rows for example which could render this solution invalid.

Yet another way is to use the OFFSET argument to the LIMIT clause to get a random starting point to return your results from. First we query to get a random row number, then we query again using that random number as the OFFSET:

### Solution 3

``` javascript
SELECT	floor(rand() * count(*)) AS theOffset
FROM	Users

//Then use that random 'seed'
SELECT 	*
FROM	Users
LIMIT 	#theOffset#, 1
```

This one (again although it has 2 queries) works great, but if you want more than 1 row returned (by increasing the second argument in the LIMIT clause) only the _starting point_ will be random, you will then get the next _x_ rows returned _in order_ which might not be what you are after.

Another issue with this option is if the starting row returned (the OFFSET) from the initial query is too high than the amount of records you want returned, i.e. if there are 1000 records and the OFFSET value is 998 and you want 10 records...you're not going to get 10 records, only 2!

## Benchmarks

I wanted to see just how these solutions performed using 2 different tables, one with 56,000 rows and one with 150 rows (I'm only testing with solution 1 and 3):

First with 56,000 rows:

Solution 1 - average 4021ms

![mysql_solution1](/images/uploads/2008/03/solution1.jpg)

Solution 3 - average 32.1ms

![mysql_solution3](/images/uploads/2008/03/solution3.jpg)

Second with only 150 rows:

Solution 1 - average 13.25ms

![solution1_150_2](/images/uploads/2008/03/solution1_1501.jpg)

Solution 3 - average 1.55ms

![solution3_150](/images/uploads/2008/03/solution3_150.jpg)

So when you only want 1 random row returned the best bet by far is solution 3. I ran the same test returning 10 rows and got very similar results for all 4 tests, you just need to watch for the case where the OFFSET is too high (check that #recordCount# - #theOffset# > 10 etc) and that only the 'seed' row is random.

Of course if you want 10 random rows from a small table (around 150) then solution 1 will perform fine.

There are many other ways to achieve this [particularly when using a server side language like ColdFusion](http://www.chapter31.com/2008/03/21/random-database-results-with-coldfusion/) but hopefully this sparks some purely MySQL ideas.
