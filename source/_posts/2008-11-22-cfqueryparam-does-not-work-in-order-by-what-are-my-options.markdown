---
comments: true
date: 2008-11-22 02:15:50
layout: post
slug: cfqueryparam-does-not-work-in-order-by-what-are-my-options
title: cfqueryparam does not work in ORDER BY, what are my options?
wordpress_id: 447
categories:
- ColdFusion
- Databases
---

For those that don't know, ColdFusion's [cfqueryparam](http://livedocs.adobe.com/coldfusion/8/htmldocs/help.html?content=Tags_p-q_18.html) won't work on a SQL ORDER BY clause, so the following **will not work**:

``` javascript
<cfquery name="qGetUsers" datasource="mydsn">
	SELECT	FirstName, LastName
	FROM		Users
	ORDER BY <cfqueryparam cfsqltype="cf_sql_varchar" value="#arguments.order#" />
</cfquery>
```

This is really nothing new, people have been talking about this for years but with the spate of recent SQL injection attacks (_note that I meant to publish this around sept 08 but got sidetracked!_) it's worth mentioning again because there certainly are times where you want dynamic ordering based on a URL or form value.

So what does this mean to you? How are you to manage dynamic ORDER BY values? The most common scenario I've come across is to use a list of allowed _order by_ column values as defined by the developer. Something like:

``` javascript
<cfset lValidOrderBy = "firstName, lastName, dateTimeCreated" />
<cfif listFindNoCase(lValidOrderBy, arguments.order)>
	<cfset orderBy = arguments.order />
<cfelse>
	<!--- Default order by column --->
	<cfset orderBy = "lastName" />
</cfif>

<cfquery name="qGetUsers" dsn="mydsn">
	SELECT	FirstName, LastName
	FROM	Users
	ORDER BY #orderBy#
</cfquery>
```

Another approach might be to use a switch with either a **literal **value or a **keyword **which might map to a list of options like:

``` javascript
SELECT	FirstName, LastName
FROM	 Users
ORDER BY
<cfswitch expression="#arguments.order#">
	<!--- A literal value --->
	<cfcase value="lastName">
		lastName
	</cfcase>
	<!--- A keyword defined by the application --->	
	<cfcase value="user-reverse">
		lastName DESC, firstName ASC
	</cfcase>
	<cfdefaultcase>
		lastName
	</cfdefaultcase>
</cfswitch>
```

I like this approach as the "mapped" keyword allows you to use _order by_ values which aren't so simple as a basic literal. 

This means when you want to order by multiple columns, use ASC/DESC or a combination of both (which are of course perfectly valid and real-world options) you can define these keywords in your application and still benefit from the safety of possible SQL injection by utilising the [cfswitch](http://www.cfquickdocs.com/#cfswitch) statement.

Don't forget to always sanitise ANY USER INPUT!!!

