---
comments: true
date: 2006-10-17 23:29
layout: post
slug: making-coldfusion-sleep
title: "Making ColdFusion sleep"
wordpress_id: 59
categories:
- ColdFusion
---

Often times you want the server to pause execution of a page, or go to sleep for a short while. You may be waiting for a file to be written to the file system etc.

You can do achieve this in the following fashion:

``` javascript
<cfset createObject('java', 'java.lang.Thread').sleep(5000) />
```

The example above makes the server call "sleep" for 5 seconds.

Ryan Duckworth states:

> "A java thread (which ColdFusion code is converted to) is doing a NOP (no operation) procedure during a java Sleep command which causes no inefficiency. The multi-processing nature of the CPU handles this functionality for you and will use those CPU cycles with other requests during the sleep."

Note that I usually have this in a Utility component with lots of functions I can call when needed. For example:

``` javascript
<cffunction name="sleep" access="public" output="false" returntype="void" hint="Leverages Java's sleep() function">
   <cfargument name="timeToSleep" type="numeric" required="true" />

   <cfscript>
      createObject("java", "java.lang.Thread").sleep(arguments.timeToSleep);	//sleep time in milliseconds
      return;
   </cfscript>
</cffunction>
```

So then I can call application.utility.sleep(1000);

:)
