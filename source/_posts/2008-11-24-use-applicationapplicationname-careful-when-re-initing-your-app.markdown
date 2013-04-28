---
comments: true
date: 2008-11-24 10:54:14
layout: post
slug: use-applicationapplicationname-careful-when-re-initing-your-app
title: Use application.applicationName? Careful when re-initing your app
wordpress_id: 534
categories:
- ColdFusion
---

I'm sure most ColdFusion developers know that the application scope has a built-in variable called _application.applicationName_ which stores the name of the application that you specify in the cfapplication tag or the _this.name_ value if your using [Application.cfc](http://livedocs.adobe.com/coldfusion/8/htmldocs/help.html?content=AppEvents_01.html). This doesn't appear when you dump the application scope...but it's there.

Today I wanted to use this variable, everything was working fine until I ran into an error when I re-initialised my application via a URL variable. The error I received was:

> Element APPLICATIONNAME is undefined in APPLICATION.

[Marko](http://www.lynchconsulting.com.au/blog/) helped me out with the obvious...as I had cleared my application scope the "applicationName" variable didn't exist for the page request. Let me show you how I was re-initialising the application scope; the following 2 methods are declared in my Application.cfc, checkReInit() is called from onRequestStart():

``` javascript
<cffunction name="checkReInit" access="private" output="false" returntype="void">
	<cfscript>		
		if (structKeyExists(URL, "reinit") AND URL.reinit EQ 101)
		{
			clearAppScope();
		}		
	</cfscript>
</cffunction>

<cffunction name="clearAppScope" access="private" output="false" returnType="void">
	<cfscript>		
		structClear(application);
		onApplicationStart();		
	</cfscript>
</cffunction>
```

As you can see in the sample code above, if a URL parameter called _reinit_ exists with the value of 101 the application scope is cleared then re-inited via onApplicationStart().

_****Note:**_ I _really_ don't recommend this type of code for a production environment, in fact this is a cut down version of what the actual code is...we don't run applications with the ability to re-initialise the application scope via the public URL from a production site.

Anyway...clearAppScope() essentially clears whatever is in the application scope then calls onApplicationStart() to re-initialise the application. This is all good and well except _this.name_ is not defined inside onApplicationStart(), it's defined in the constructor area at the top of the file so any code in your .cfm template referencing _application.applicationName_ will fail because this value won't exist.

I would have thought a simple page refresh would rectify any issues (as this.name would be called the next time a template was executed) but I was still getting errors.

A simple fix is to explicitly set the application name value if and when you clear the app scope. That way it will be available to your application as expected.

``` ruby
<cffunction name="clearAppScope" access="private" output="false" returnType="void">
	<cfscript>		
		structClear(application);
		application.applicationName = this.name;
		onApplicationStart();		
	</cfscript>
</cffunction>
```
