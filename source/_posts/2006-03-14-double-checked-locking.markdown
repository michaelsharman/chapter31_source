---
comments: true
date: 2006-03-14 23:19:47
layout: post
slug: double-checked-locking
title: Double-checked locking
wordpress_id: 6
categories:
- ColdFusion
---

Mark Kruger has a nice article (with mention from [Sean Corfield](http://corfield.org)) on APPLICATION variable locking.

Sean basically added that in the initial example (BAD code) if 2 users hit the <cfif> condition at the same time, only one will have a lock on the code while the other will wait. 
The problem lies in the fact that the 2nd user is waiting for the lock to expire, then they will perform a write operation NOT checking the <cfif> condition again!

The article is [here](http://mkruger.cfwebtools.com/index.cfm?mode=entry&entry=DEAF10EF-C648-7C00-3F815AEB5E49E4E5).

BAD code snippet:

``` javascript
<cfif NOT isDefined('Application.curIps')OR IsDefined('url.forceAp')>  
  <cflock scope="APPLICATION" timeout="1">  
    <cfscript>  
      curIps = queryNew("IP");  
      queryAddRow(curIps);  
      querySetCell(curIps,"IP",cgi.remote_addr);  
      Application.curIps = curIps;  
    </cfscript>
  </cflock>  
```

GOOD code snippet:

``` javascript
<!--- check condition --->
<cfif NOT isDefined('Application.curIps') OR IsDefined('url.forceAp')>  
>!--- Use a named lock --->  
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

Another useful mention is that this seems redundant when using CFMX7 due to applicationOnStart in application.cfc unless you want to restart the application manually
