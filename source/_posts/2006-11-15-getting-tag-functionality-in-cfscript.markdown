---
comments: true
date: 2006-11-15 08:56:49
layout: post
slug: getting-tag-functionality-in-cfscript
title: Getting tag functionality in cfscript
wordpress_id: 78
categories:
- ColdFusion
---

For some developers there is an age old argument between the use of ColdFusion tags and &lt;cfscript&gt;, I'm not going to delve too much into this argument as I believe you can use both for different scenarios.

What I will say is that I do like many things about &lt;cfscript&gt;. It is easy to read and arguably more elegant and concise. Of course the annoying thing is that it doesn't have the full feature set of tags....VERY annoying. So bad in fact that I often ask myself why I bother with it and whether or not Adobe will ever update it?

How many times have you been in the middle of coding something (in &lt;cfscript&gt;) and needed to do cfdump, cflocation, cfabort, cfsavecontent....the list goes on. Because I do like cfscript I did what a lot of other cfscripters do, came up with some methods to add to my Utility.cfc (which I store in application scope) to simulate the functions I cannot natively use when writing cfscript.

Here is an example method for simulating &lt;cfdump&gt;

``` javascript
<cffunction name="dump" access="public" output="true" returntype="void" hint="Simulates cfdump from a cfscript block">
	<cfargument name="var" required="true" type="any" hint="Variable to dump" />
	<cfargument name="expand" required="false" type="boolean" hint="Boolean to expand the dump" />
	<cfargument name="top" required="false" type="numeric" hint="Only show the top n layers" />

	&lt;cfscript&gt;

		var sOptions = "";

		if (structKeyExists(arguments, "expand"))
			sOptions = " expand=" & arguments.expand;

		if (structKeyExists(arguments, "top"))
			sOptions = sOptions & " top=" & arguments.top;

	</cfscript>

	<cfdump var="#arguments.var#"sOptions />

	<cfreturn />

</cffunction>
```

I set this up as a snippet in eclipse and use a snippet variable to enter the dump value. My trigger text in ud (for Utility Dump) and the snippet is as follows:

``` javascript
application.oUtility.dump($${var:});
```

I've attached my full Utility.cfc which contains the following methods:

* abort
* dump
* location
* param
* sleep

[Click here to download Utility.cfc](/images/uploads/2006/11/utility.zip)
