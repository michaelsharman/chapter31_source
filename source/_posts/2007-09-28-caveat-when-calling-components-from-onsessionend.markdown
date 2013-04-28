---
comments: true
date: 2007-09-28 03:19:55
layout: post
slug: caveat-when-calling-components-from-onsessionend
title: Caveat when calling components from onSessionEnd()
wordpress_id: 146
categories:
- ColdFusion
---

As most ColdFusion developers know, you cannot reference 'application' scoped variables directly in Application.cfc's _onSessionEnd()_ method. Instead you need to use the _ApplicationScope_ parameter. [Notes from the docs](http://livedocs.adobe.com/coldfusion/8/htmldocs/help.html?content=AppEvents_11.html):

> You must use the _ApplicationScope_ parameter to access the Application scope. You cannot reference the Application scope directly; for example, use Arguments.ApplicationScope.myVariable, not Application.myVariable. Use a named lock when you reference variables in the Application scope, as shown in the example.

I ran into this today when working on some code a colleague wrote which was firing a method in an application scoped component, the code was as follows:

``` javascript
<cffunction name="onSessionEnd" output="false" returnType="void">
	<cfargument name="SessionScope" required="true" />
	<cfargument name="AppScope" required="true" />
	<cfscript>
		arguments.AppScope.myCFC(arg=arguments.SessionScope.arg);
	</cfscript>
</cffunction>
```

Obviously this method is being executed when the users session has expired. The use of _arguments.AppScope_ means I can access the 'myCFC' component which is stored in application scope.

Now to the actual problem...inside the cfc was a method which was logging information in the database, but the _datasource_ value was coming from application scope.

``` javascript
<cfquery datasource="#application.dsn#" name="qInsert">
```

Obviously arguments should be passed to components instead of being accessed directly, but that's another story :)

I would have thought this would work fine, but no luck. It was a little bit of a pain to debug as you can't see the results of onSessionEnd() being run.

The fix was simply to pass in the required variables as arguments to the method:

``` javascript
<cffunction name="onSessionEnd" output="false" returnType="void">
	<cfargument name="SessionScope" required="true" />
	<cfargument name="AppScope" required="true" />
	<cfscript>
		arguments.AppScope.myCFC(arg=arguments.SessionScope.arg,dsn=arguments.Appscope.dsn);
	</cfscript>
</cffunction>
```

Either way, be careful when doing this particularly if the method is being called from multiple application points and one of those could be _onSessionEnd()_.

