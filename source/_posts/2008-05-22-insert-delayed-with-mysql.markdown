---
comments: true
date: 2008-05-22 23:27
layout: post
slug: insert-delayed-with-mysql
title: "INSERT DELAYED with MySQL"
wordpress_id: 235
categories:
- Databases
---

Yet another tip for MySQL users, [INSERT DELAYED](http://dev.mysql.com/doc/refman/5.0/en/insert-delayed.html).

What does it do? Well when you execute your query MySQL will return an ok immediately to your application, and the request then gets queued to be INSERTED when the table in question is not being used by any other thread. This obviously means your application doesn't have to sit around waiting for the INSERT to be completed which can have a positive impact on performance under load.

Another major benefit of using INSERT DELAYED is that inserts from many clients are bundled together and written in one block. This is much faster than performing many separate inserts.

This sounds pretty cool but there are certainly some points to consider, more from the [docs](http://dev.mysql.com/doc/refman/5.0/en/insert-delayed.html):





  * Note that INSERT DELAYED is slower than a normal INSERT if the table is not otherwise in use. There is also the additional overhead for the server to handle a separate thread for each table for which there are delayed rows. This means that you should use INSERT DELAYED only when you are really sure that you need it.



  * INSERT DELAYED works only with MyISAM, MEMORY, and ARCHIVE tables.



  * Because the INSERT DELAYED statement returns immediately, before the rows are inserted, you cannot use LAST_INSERT_ID() to get the AUTO_INCREMENT value that the statement might generate.



  * DELAYED rows are not visible to SELECT statements until they actually have been inserted.



There are a few other things you should read up on from the docs, but for tables which handle things like logging these restrictions really don't come into effect therefore this can be a great solution on mid to high traffic operations.

We're currently using this on one of our logging tables which gets hit a lot, I'm yet to do any significant load testing for exact numbers. But so far so good.

Syntax is simple:

``` javascript
<cfquery name="qLogDetails" datasource="#getDSN()#">
	INSERT DELAYED INTO audit
		(
			Status
			, DateTimeCreated
			, IPAddress
		)
	VALUES
		(
			<cfqueryparam cfsqltype="cf_sql_varchar" value="#arguments.status#" />
			, now()
			, <cfqueryparam cfsqltype="cf_sql_varchar" value="#getUserIP()#" />
		)
</cfquery>
```

Thanks to Cameron Simpson, browsing his code is where I found this!
