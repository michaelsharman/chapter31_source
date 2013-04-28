---
comments: true
date: 2006-10-05 23:09:47
layout: post
slug: double-checked-locking-2
title: double-checked locking
wordpress_id: 51
categories:
- ColdFusion
---

Mark Kruger details a concept (with a little help from [Sean Corfield](http://www.corfield.org/)) known as "double-checked locking", in the example as it pertains to application scoped variables.

The basic premise is that normally you would put &lt;cfif NOT structKeyExists(application, “myVar”)&gt; logic around you setting of application variables. If the application variable(s) didn’t exist you would have a &lt;cflock&gt; within the &lt;cfif&gt; to perform locking while you write your application variables.

However what would happen when 2 threads (2 users) hit that logic/lock at the same time? Well one would wait while the other would enter the lock and write the variables. But…when the first thread was finished, the 2nd would enter and write the variables again.

If you were only writing generic (or atomis) values like DSN, mail server etc then this would be ok, albeit unnecessary. But if you were setting somewhat dynamic values then this would be an issue.

Example from Mark's post:

``` javascript
<!--- check condition --->
<cfif NOT isDefined('Application.curIps') OR IsDefined('url.forceAp')>
   <!--- Use a named lock --->
   <cflock name="ipInitialize" timeout="1" type="exclusive">
      <!--- check to make sure condition is still true --->
      <cfif NOT IsDefined('Application.curIps') OR IsDefined('url.forceAp')>
         <cfscript>
            curIps = queryNew("IP");
            queryAddRow(curIps);
            querySetCell(curIps,"IP",cgi.remote_addr);
            Application.curIps = curIps;
         </cfscript>
      </cfif>
   </cflock>
</cfif>
```

Anyways, [read the article](http://www.coldfusionmuse.com/index.cfm/2005/8/22/thread.safe)
