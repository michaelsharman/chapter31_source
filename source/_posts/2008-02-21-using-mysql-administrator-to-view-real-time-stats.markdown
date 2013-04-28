---
comments: true
date: 2008-02-21 06:49:15
layout: post
slug: using-mysql-administrator-to-view-real-time-stats
title: Using MySQL Administrator to view real time stats
wordpress_id: 188
categories:
- Databases
---

I was working on piece of code today which was sending an Ajax request to the server. The result of this request could have been 0 - 5 database UPDATE statements.

What I needed was a way to test my code to make sure the correct number of database statements were being executed based on the user event which fired the request.

There are of course a number of ways I could have done this including:

  * Returning a 'count' or equivalent from the server to my Ajax callback
  * Manually checking the relevant records in the database via a query
  * Logging the results etc

While all of these are fine, they all involved a bit more effort so I wanted to find another way to simply see how many UPDATES where being run.

Enter [MySQL Administrator](http://www.mysql.com/products/tools/administrator/) :)

There are a BUNCH of useful operations you can perform using this free tool as well as viewing real time performance stats including the current server health (such as memory usage and current traffic) and the number of cached queries vs actual queries which are being accessed.

The one I was interested in resides in the 'Health' area and allows you to view a real time count of all DDL and DML statements which hit the server. Perfect!

[![mysql administrator](/images/uploads/2008/02/mysql_admin.thumbnail.jpg)](/images/uploads/2008/02/mysql_admin.jpg)

All I needed to do was run my page, fire the Ajax event and then 'refresh' the Health view in MySQL Admin.

For those that use MySQL and don't really know this tool, take the time...it's well worth it!

I'm sure MSSQL has similar tools like the Profiler etc, but I'm really not using it these days.
