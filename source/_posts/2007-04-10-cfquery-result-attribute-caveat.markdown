---
comments: true
date: 2007-04-10 03:40:26
layout: post
slug: cfquery-result-attribute-caveat
title: cfquery 'result' attribute caveat
wordpress_id: 110
categories:
- ColdFusion
---

A great feature of <cfquery> which was introduced in CFMX7 is the addition of the 'result' attribute. When used, a developer can access a Structure of query result variables including the following keys:

  * Cache
  * ColumnList
  * ExecutionTime
  * RecordCount
  * SQL
  * SQLParameters

You can read more about the 'result' attribute in a [previous post](http://www.chapter31.com/2006/03/11/new-attribute-and-object-variable-in-for-cfmx7/) or at [Live docs](http://livedocs.macromedia.com/coldfusion/7/htmldocs/wwhelp/wwhimpl/common/html/wwhelp.htm?context=ColdFusion_Documentation&file=00000316.htm).

One thing I've come across is that the structure returned (by using the result attribute) is created _where_ the query is executed and the value of 'result' references this struct in the local variable scope.

So an inline query followed by a reference to the 'result' struct would run fine:

``` javascript
<cfquery name="qData" dsn="myDSN" result="stResult">
	SELECT	*
	FROM	MyTable
</cfquery>

<cfoutput>
	#stResult.sql#
</cfoutput>
```

But a problem exists when you have a query in a Component that is being returned by a method call. In this case the structure won't exist in the calling templates 'local' scope and an exception will be thrown.

![stResult exception](/images/uploads/2007/04/stresulterrors.jpg)

The simple way around this is to declare the 'result' attribute in the request scope:

``` javascript
<cfquery name="qData" dsn="myDSN" result="request.stResult">
	SELECT	*
	FROM	MyTable
</cfquery>
```

Now you can reference the structure inside the calling template using the request scope:

``` javascript
<cfoutput>
	#request.stResult.sql#
	#request.stResult.cached
	etc
</cfoutput>
```
