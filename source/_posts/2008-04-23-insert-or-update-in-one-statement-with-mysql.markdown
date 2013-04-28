---
comments: true
date: 2008-04-23 02:09:18
layout: post
slug: insert-or-update-in-one-statement-with-mysql
title: INSERT or UPDATE in one statement with MySQL
wordpress_id: 227
categories:
- ColdFusion
- Databases
---

A little while ago I mentioned [combining multiple INSERT statements with MySQL](http://www.chapter31.com/2008/04/03/combining-multiple-insert-statements-with-mysql/), here is another helpful approach to a common problem.

In many systems you will give the user a chance to ADD and EDIT a record, a News post for example. As usual there are many ways to handle writing any changes to the database, one common approach would be to have 2 methods in a News.cfc

E.g. create() and update()

create() would have an INSERT statement and update() would have an UPDATE statement.

That works well but means you have to have 2 methods for each _type_ of content you want to save to the database.

How about this instead:

``` javascript
<cfquery name="qSave" datasource="#getDSN()#">
	INSERT INTO	News
		(
			NewsId,
			DateTimeCreated,
			Title,
			Body
		)
	VALUES
		(
			<cfqueryparam cfsqltype="cf_sql_varchar" value="#newsId#" />
			, <cfqueryparam cfsqltype="cf_sql_timestamp" value="#createODBCDateTime(now())#" />
			, <cfqueryparam cfsqltype="cf_sql_varchar" value="#title#" />
			, <cfqueryparam cfsqltype="cf_sql_varchar" value="#body#" />
		)ON DUPLICATE KEY UPDATE DateTimeLastUpdated = <cfqueryparam cfsqltype="cf_sql_timestamp" value="#createODBCDateTime(now())#" />
			, Title = <cfqueryparam cfsqltype="cf_sql_varchar" value="#title#" />
			, Body = <cfqueryparam cfsqltype="cf_sql_varchar" value="#body#" />
</cfquery>
```

From the [docs](http://dev.mysql.com/doc/refman/5.0/en/insert-on-duplicate.html):



> If you specify ON DUPLICATE KEY UPDATE, and a row is inserted that would cause a duplicate value in a UNIQUE index or PRIMARY KEY, an UPDATE of the old row is performed.



Now you can just have this query in one method (e.g. save()) which will handle both use cases.

This feature has been available since MySQL 4.1.0




