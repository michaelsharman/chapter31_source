---
comments: true
date: 2007-11-02 05:27:46
layout: post
slug: making-your-web-applications-platform-independant
title: Making your web applications platform independant
wordpress_id: 160
categories:
- ColdFusion
---

I was looking for some information the other day about line separators across Windows/MAC/Linux etc when I stumbled upon 3 great articles from [Christian Cantrell](http://weblogs.macromedia.com/cantrell/).

Although the articles are quite old they were very informative for me so I thought I'd share them in case others didn't know this already.

[Making Your ColdFusion Applications More Platform Independent (Part I)](http://weblogs.macromedia.com/cantrell/archives/2003/03/making_your_col.cfm)
Basically about case sensitive filenames which is very important on *nix, but also included the following which I've never heard and to be honest would like to test:



> Additionally, make sure you use all lowercase when naming your components. ColdFusion MX will automatically lower-case your component names, which you would never notice on Windows, however on Unix, it will become apparent very quickly when you start getting errors that your components do not exist.



[Making Your ColdFusion Applications More Platform Independent (Part II)](http://weblogs.macromedia.com/cantrell/archives/2003/03/making_your_col_1.cfm)
Shows an automatic way (via Java) to get the current servers file path separator (either a '/' or '\'), OS dependant.

[Making Your ColdFusion Applications More Platform Independent (Part III)](http://weblogs.macromedia.com/cantrell/archives/2005/07/making_your_col_2.cfm)
I've been annoyed many times with the whole chr(10)chr(13) on Windows vs chr(10) on a Mac etc, another automated way to get the server OS 'line separator' via Java.

Here are the line and file separators as functions which I've also added to my [Utils.cfc](http://www.chapter31.com/utilscfc/)

``` javascript
	<cffunction name="getFileSeparator" access="public" output="false" returntype="string" hint="Returns the system file path separator">

		<cfscript>

			return createObject("java", "java.io.File").separator;

		</cfscript>

	</cffunction>

	<cffunction name="getLineSeparator" access="public" output="false" returntype="string" hint="Returns the system line separator">

		<cfscript>

			return createObject("java", "java.lang.System").getProperty("line.separator");

		</cfscript>

	</cffunction>
```
