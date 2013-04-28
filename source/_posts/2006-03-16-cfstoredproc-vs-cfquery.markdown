---
comments: true
date: 2006-03-16 00:30:18
layout: post
slug: cfstoredproc-vs-cfquery
title: cfstoredproc vs cfquery
wordpress_id: 8
categories:
- ColdFusion
---

There are of course pros and cons to using each method to perform CRUD operations on a database.

**cfstoredproc Pros:**

  * With stored procedures you can control security in the database as well as the web pages.
  * Transactions are handled at the database level, stored procedures are ideal here.
  * Stored procedures provide greater performance, because the execution plan for the sql doesn't have to be recreated and if a page has multiple calls to the database, you can combine them all in one stored procedure, meaning only one trip to and back from the db.
  * Putting all of your sql in stored procedures provides centralization of your database code, so if your table structure or business rules change, all of your sql is located in your database stored procedures instead of distributed throughout your application code.

**cfstoredproc Cons**

  * <del>You can have ColdFusion cache the query - which it doesn't do with stored procedures.</del> **Update Nov 2006**: you can actually cache stored procedures! [See here for more info](http://www.chapter31.com/2006/11/08/caching-stored-procedures/)
  * It often seems a waste to create a stored proc for a simple select statement.
  * cfquery gives you maximum flexibility in terms of creating the sql for the query. there are many ways to make stored procedures "dynamic", such as providing parameters for a where clause, the fields used in an order by clause, etc., but many of these sql solutions are clunky (involving multiple CASE statements) or impossible (dynamically assigning the table to do the query on).
