---
comments: true
date: 2008-11-12 00:40:34
layout: post
slug: var-scoping-how-and-where-do-you-set-your-function-variables
title: var scoping - how and where do you set your function variables?
wordpress_id: 418
categories:
- ColdFusion
---

As everybody knows you should var scope ALL local function variables inside ColdFusion components, and these variables must be declared at the top of your function before any other code. If you place other code above a "var" scoped variable in your method signature an exception will be thrown.

Depending on how you define you methods this will probably be fine, but I got to thinking recently on how this works with exception handling within your function, specifically for try/catch blocks. 

As you can't add code above your var scoped variables there is no way to wrap your var scope block in a try/catch block. With this being the case you *may* have problems if an exception is thrown when you var scope a local variable.

An example of what I'm talking about:

``` javascript
<cffunction name="getWorkSchedule" access="public" returntype="query">	
	<cfset var oUser = getUserService().getUser() />

	<cftry>
		...
		<cfcatch>
		</cfcatch>
	</cftry>
</cffunction>
```

In the fictional example shown above we have a method which returns a users work schedule, the first thing done is retrieving an instance of _User_ from the _UserService_. As this has been set at the same time we var scope our variable (oUser), what happens if the call to _getUserService().getUser()_ throws an exception? The exception would bubble up to the calling template (the template that called getWorkSchedule()) which might be fine but might also be unexpected.

This is just food for thought, it may be that instead you want to define your method like:

``` javascript
<cffunction name="getWorkSchedule" access="public" returntype="query">	
	<cfset var oUser = "" />

	<cftry>
		<cfset oUser = getUserService().getUser() />
		...
		<cfcatch>
		</cfcatch>
	</cftry>
</cffunction>
```

Here we take the approach of always declaring our local variables as empty strings or integers etc (simple values) **before** setting explicit values into them. This means all your variables are cleanly defined and you can catch any possible exceptions if you need to inside the try/catch.

The only is that is feels like a bit of double handling because I need to <cfset> my variables twice...

How do other people handle this? Lend me your thoughts :)
