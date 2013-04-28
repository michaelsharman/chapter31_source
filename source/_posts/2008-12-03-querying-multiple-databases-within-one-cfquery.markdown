---
comments: true
date: 2008-12-03 23:25:00
layout: post
slug: querying-multiple-databases-within-one-cfquery
title: Querying multiple databases within one cfquery
wordpress_id: 515
categories:
- ColdFusion
- Databases
---

In discussing a possible caching solution [at work](http://www.lynchconsulting.com.au/) a suggestion was made to use a secondary database (on the same server) to store some key application data. It's not really important to describe why we wanted to do this, suffice to say that my concern was if and when the application would need to perform a SQL "JOIN" between the primary and secondary (caching) database as I wasn't sure if it was technically possible within our environment (ColdFusion 8, MySQL).

I quickly mocked up a proof of concept and was pleased to see that this works fine with ColdFusion and MySQL. It looks as though <cfquery> simply wraps up your SQL and sends it to the database server for execution (as you'd probably expect), so this is really the ability of the database server rather than any specific ColdFusion engine. 

The only thing you need to do is make sure that you **explicitly qualify** the references to your column and table names with the actual database name and _very importantly_ make sure the database user (as defined in your cfquery datasource attribute) has access to both databases! Remember that you're using a single ColdFusion datasource to talk to 2 different databases.

Here's a code sample qualifying just the database and column names:

``` javascript
<cfquery name="qGetSomething" datasource="myDatasource">
SELECT	mydb1.Column1, mydb1.Column2, mydb2.Column3
FROM	mydb1.Table1 t1 INNER JOIN mydb2.Table2 t2
		ON t1.id = t2.id
</cfquery>
```

Here's a code sample qualifying the database, table and column names:

``` javascript
<cfquery name="qGetSomething" datasource="myDatasource">
SELECT	mydb1.Table1.Column1, mydb1.Table1.Column2, mydb2.Table2.Column3
FROM	mydb1.Table1 t1 INNER JOIN mydb2.Table2 t2
		ON t1.id = t2.id
</cfquery>
```

If you get an error like the following back, you know you have a database user permission error :(

``` javascript
SELECT command denied to user 'mydbuser'@'localhost' for table 'Table2'
```
