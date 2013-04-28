---
comments: true
date: 2008-04-24 01:59:11
layout: post
slug: insert-or-update-in-one-statement-with-mysql-performance-test
title: INSERT or UPDATE in one statement with MySQL - performance test
wordpress_id: 228
categories:
- Databases
---

[Yesterday I posted](http://www.chapter31.com/2008/04/23/insert-or-update-in-one-statement-with-mysql/) on a handy MySQL feature where you can combine an INSERT and UPDATE on a record in the one statement.

Someone asked about the performance of this so I ran a little test to get some basic numbers.

One thing to note is that even when MySQL is actually UPDATING your record (ON DUPLICATE KEY UPDATE), the statement is being executed on the database as an INSERT and not an UPDATE statement. MySQL Administrator [provides a good view](http://www.chapter31.com/2008/02/21/using-mysql-administrator-to-view-real-time-stats/) of these types of database actions. Not sure if this means anything, but it might be something to watch out for.

I ran a (not so clinical) test by looping over 1000 INSERTs with ON DUPLICATE KEY UPDATE, and then simply using an UPDATE (again 1000 times). I used getTickCount() to provide measurements, restarting MySQL after each type of test.

This ran on CF8, MySQL5 and Ubuntu.

### INSERT ON DUPLICATE KEY UPDATE

448  
426  
356  
320  
404  
387  
427  
355  
433  
350  
Avg: 391

### UPDATE

353  
328  
356  
299  
363  
342  
434  
302  
342  
416  
Avg: 354

So although my test wasn't done under the most optimal conditions, we can see that at first using a simple UPDATE is the quicker of the two. 

But...

We still need to know whether we'll be performing an INSERT or UPDATE. There are of course different ways to tackle this solution, let's assume that we're first running a SELECT statement against the database to see if the record exists. The SELECT retrieves 1 column, the primary key value, and of course the WHERE clause uses the primary key as a condition which is a clustered index so should perform quite quickly.

If no record is returned then we'll be INSERTING, if we get a record then we'll be UPDATING. Bear in mind that I really dislike this approach, but a lot of people use it so I thought it would be interesting to see the performance of running 2 queries against the database. 1 SELECT, then either an UPDATE or INSERT.

### Initial SELECT, then UPDATE

535  
487  
605  
510  
534  
559  
480  
515  
560  
502  
Avg: 529

So the cost of running 2 queries makes everything a lot slower than either of the first 2 options.

I'd say using INSERT with ON DUPLICATE KEY UPDATE is a good solution for most situations. But if you really want to get the most out of your application then use an UPDATE but have a separate way to tell if your record exists or not (an empty primary key property in a bean etc).
