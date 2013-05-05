---
comments: true
date: 2008-10-27 23:21
layout: post
slug: fun-with-reserved-words-in-mysql-5
title: "Fun with reserved words in MySQL 5"
wordpress_id: 476
categories:
- Databases
---

Most tools or languages you work with have words which are "reserved", meaning you cannot use them in a variable declaration or schema definition etc as they have special treatment in the underlying system. If you try to do this you'll usually get an immediate error.

Today I needed to change an existing SQL query from a "SELECT *" to explicitly defining each column because I wanted to add some date formating at the SQL level.

The query (after modifications) was as follows:

``` javascript
SELECT
	id
	, date_format(dt_start, "%d/%m/%Y") as dt_start
	, date_format(dt_end, "%d/%m/%Y") as dt_end
	, repeat
FROM
	smsschedule
```

Now remember that the code _used_ to be SELECT * and was working fine. But when I changed it as above it failed and threw an error:



> You have an error in your SQL syntax; check the manual that corresponds to your MySQL server version for the right syntax to use near...



The reason is that "repeat" is a [MySQL reserved word](http://dev.mysql.com/doc/mysqld-version-reference/en/mysqld-version-reference-reservedwords-5-0.html). The interesting part (and real reason for this post) is that it didn't fail when the query was sent as "*", only when I explicitly set the invalid column in the SELECT list.

This was sent from ColdFusion but I also checked directly against the database (MySQL query browser) and had the same result.

Might be best to [check the reserved list](http://dev.mysql.com/doc/mysqld-version-reference/en/mysqld-version-reference-reservedwords-5-0.html), most are obvious but a few could catch you out if you're not aware of them.

Also interesting to note is that the table in question contained 2 column names which I thought would have failed. Those being "hour" and "minute".

Not only did they not fail, but they aren't in the reserved words list for MySQL. It would appear that function names (at least some of them) are ok to be used as column names. Still...I wouldn't really recommend using these column names in your tables :)

