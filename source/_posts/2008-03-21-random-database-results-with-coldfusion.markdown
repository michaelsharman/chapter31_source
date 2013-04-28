---
comments: true
date: 2008-03-21 03:58:45
layout: post
slug: random-database-results-with-coldfusion
title: Random database results with ColdFusion
wordpress_id: 213
categories:
- ColdFusion
- Databases
---

Today I was looking at [returning random records purely from MySQL](http://www.chapter31.com/2008/03/21/returning-random-results-with-mysql/) but was limited with large tables in getting all random results (not just a random starting seed).

I tried a ColdFusion solution instead. 

First get all the primary keys from the table in question and create an array of the values (this works for numeric and non-numeric keys):

``` javascript
<cfquery name="qGetPKs" datasource="dsn">
	SELECT 		Id
	FROM 		myTable
</cfquery>

<cfset aIds = listToArray(valueList(qGetPKs.Id)) />
```
	
Next create a list of random primary keys from our array:

``` javascript
<cfset numberOfRows = 20 />
<cfset ids = "" />

<cfloop from="1" to="#numberOfRows#" index="i">
	<cfset ids = listAppend(ids, aIds[randRange(1, arrayLen(aIds))]) />
</cfloop>
```

With smaller tables you may need to do this step a little differently in case the randRange() returns duplicate Ids.

Finally we pass the list of random primary keys to the WHERE clause via cfqueryparam:

``` javascript
<cfquery name="q" datasource="dsn">
	SELECT 		* 
	FROM 		myTable
	WHERE		Id IN(<cfqueryparam cfsqltype="cf_sql_varchar" list="true" value="#ids#">)
</cfquery>
```

Depending on your situation you can cache the array of primary keys (in session or application scope) and refresh the list whenever your database changes. Then generate your random list of Id's to pass to a query.

Without caching the list array (and using a table with 56,000 rows) I got the following times from the entire block of code (including getting the Id list):

![cftimer](http://www.chapter31.com/wp-content/uploads/2008/03/cftimer.jpg)

When I cached the array in application scope, cftimer was giving me 0ms :)

![cftimer2](http://www.chapter31.com/wp-content/uploads/2008/03/cftimer_2.jpg)

This was of course on my local machine. Although these results could be more accurate in a proper environment, they do show another solution in retrieving random query results.
