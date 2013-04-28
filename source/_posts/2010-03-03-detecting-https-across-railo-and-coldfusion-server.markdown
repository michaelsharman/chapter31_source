---
comments: true
date: 2010-03-03 03:14:56
layout: post
slug: detecting-https-across-railo-and-coldfusion-server
title: Detecting https across Railo and ColdFusion Server
wordpress_id: 789
categories:
- ColdFusion
- Railo
---

Previously I had a way of [detecting whether page requests were being made via ssl](http://www.chapter31.com/2007/07/21/detecting-and-redirecting-http-to-https/) but today I came across a scenario where this doesn't work. Let me explain...

Right now we're looking at developing across different ColdFusion engines, "ColdFusion" of course but also ["Railo"](http://www.getrailo.com/). One of the applications we had detected whether a request was being made securely (https) and if it wasn't we turned off session management for security reasons. The basic code looked like the following snippet:

``` javascript
oRequest = getPageContext().getRequest();			
if (oRequest.isSecure())
{
	this.sessionManagement = true;
	this.sessionTimeout = createTimeSpan(0,0,20,0);
	this.setClientCookies = true;
}
else
{
	this.sessionManagement = false;
	this.setClientCookies = false;
}
```

This was working all fine and dandy for ColdFusion Server, but was failing when we went to Railo (at least in the way we configure Railo). The reason was that we proxy page requests on Railo through Apache to Tomcat. This proxy is done over http regardless of the actual client request to the server. I guess the reason for this is that Apache to Tomcat is considered part of your secure (server) network. What was happening was that isSecure() was coming back false, because of this proxy request.

[Mark](http://www.lynchconsulting.com.au) came up with a cool solution for this. We simply add a custom header in the Apache conf file.

``` javascript
RequestHeader set https on
```

All this does is set a value into the header which we can pickup via the CGI scope, i.e. CGI.https

Now this key (https) already exists on ColdFusion server and will be blank for http requests and "on" for https requests. This is the reason we set the custom header value to "on" in the Railo vhost, so our application code is easily compatible across the two ColdFusion engines.

So now we just have a simple function to detect ssl requests:

``` javascript
<cffunction name="isRequestSecure" access="public" output="false" returnType="boolean">
	
	<cfset var secure = false>
		
	<cfif cgi.https EQ "on">
		<cfset secure = true>
	</cfif>
		
	<cfreturn secure>
</cffunction>
```

Now we can easily call isRequestSecure() which will be either true or false. Nice :)

Don't forget that the CGI scope is kind of "magic", in that we won't ever need to param a key in that struct (like CGI.https).
