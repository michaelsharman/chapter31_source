---
comments: true
date: 2010-09-08 22:47:46
layout: post
slug: tip-when-adding-allowmultiqueriestrue-to-your-mysql-dsn-in-coldfusion
title: Tip when adding "allowMultiQueries=true" to your MySQL DSN in ColdFusion
wordpress_id: 842
categories:
- ColdFusion
- Databases
---

Scenario...I'm using ColdFusion 9 and MySQL 5. I already had my DSN setup but had a requirement to get the last inserted id from a MySQL INSERT statement (I'm using auto-incrementing integer's).

As most people know, the best way to do this (in MySQL) is using the [last_insert_id()](http://dev.mysql.com/doc/refman/5.0/en/information-functions.html#function_last-insert-id) function. I wanted to attach this to the end of my INSERT statement for performance reasons, as I'd only be sending one query to the server instead of separate ones. Plus I'm not even sure if  I'd get the correct id back in a production environment if I sent it through as a separate query.

Anyway...for this to happen you need to add "allowMultiQueries=true" to your DSN connection string in ColdFusion Administrator (advanced settings) which I did. However I got an error when I tried to run the code, CF didn't like me running 2 queries at once. Hmm...restarted CF which should have reloaded the drivers. No luck. Ok...how about restarting MySQL? Nope...

Finally took a comment from [Will Tomlinson over on Ben Nadel's blog](http://www.bennadel.com/blog/1209-Turning-On-Multiple-Statements-In-ColdFusion-8-MySQL-4-5-Datasource.htm) to help me out. Delete and recreate the DSN, happy days!

![](/images/uploads/2010/09/cfadmin.png)

Who want's some sample code?

``` javascript
<cffunction name="addStuff" access="public" output="false" returnType="numeric">
	<cfargument name="ref" type="string" required="true">
	<cfargument name="stage" type="string" required="true">

	<cfset var q = "">

	<cfquery name="q" datasource="#variables.instance.config.dsn#">
		INSERT INTO mytable
			(
				ref
				, stage
			)
		VALUES
			(
				<cfqueryparam cfsqltype="cf_sql_varchar" value="#arguments.ref#">
				, <cfqueryparam cfsqltype="cf_sql_varchar" value="#arguments.stage#">
			);SELECT LAST_INSERT_ID() AS newId
	</cfquery>

	<cfreturn q.newId>
</cffunction>
```
