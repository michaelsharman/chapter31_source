---
comments: true
date: 2006-11-08 01:29:59
layout: post
slug: caching-stored-procedures
title: Caching stored procedures
wordpress_id: 71
categories:
- ColdFusion
---

Stored procedures are great for many reasons but one of the reasons I might not use them is you can't cache them...or can you?




A discussion at work enlightened me to a simple way around the lack of the cachedwithin attribute inside the <cfstoredproc> tag. Simply use the <cfquery> tag instead!




Ok, so normally if I wanted to use a stored procedure I might do something like:


``` javascript
<cfstoredproc procedure="qGetUser" datasource="#application.dsn#">
	<cfprocparam cfsqltype="CF_SQL_INTEGER" null="false" type="in" value="#arguments.userId#" />
</cfstoredproc>
```


But did you know that you can execute your stored procedures from within the <cfquery> tag? Well you can, that way you can also take advantage of the cachedwithin attribute!:


``` javascript
<cfquery name="qGetUser" datasource="#application.dsn#" cachedwithin="#createTimeSpan(0,2,0,0)#">
	exec usp_getUser #arguments.userId#
</cfquery>
```


One thing though is that this will only work when you return a **single record set**, if you need to return multiple record sets (which I often do) then <cfstoredproc> is your only option as you can use the <cfprocresult> tag like:


	<cfprocresult name="myResultOne" resultset="2" />


It always amazes me when you get simple solutions to problems you have using what you already know in a creative way, at least creative or new to you!

Always look to refactor your code, you never know what you'll learn to save you time and effort in the future :)
