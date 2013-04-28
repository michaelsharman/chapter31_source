---
comments: true
date: 2006-05-06 07:33:47
layout: post
slug: determining-machine-name-using-java
title: Determining machine name using java
wordpress_id: 23
categories:
- ColdFusion
---

Often when you are developing in a team environment you will be using the same code base checked in and out of a source control repository (SVN, CVS etc). Sometimes you may have problems with developers having a different machine configuration than you do when these settings are stored as variables in a project config file.

One way we do things at [Daemon](http://www.daemon.com.au/) is:

``` javascript
<cfset machineName=createObject("java", "java.net.InetAddress").localhost.getHostName() />
<cfswitch expression="#machinename#">
    <cfcase value="sharmo">
        <cfset myVar = "test" />
    </cfcase>
</cfswitch>
```

This way each developer can script his or her own machine specific configuration in a case statement and not have a problem when checking into source control because everyone’s config is in the same file. Of course you may have problems if developers are in remote locations and have the same machine name 

At Daemon the &lt;defaultcase&gt; is reserved for production settings only for safety.