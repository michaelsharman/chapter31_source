---
comments: true
date: 2007-07-21 05:43:41
layout: post
slug: detecting-and-redirecting-http-to-https
title: Detecting and redirecting http to https
wordpress_id: 127
categories:
- ColdFusion
---

There was a [recent thread](http://groups.google.com/group/mach-ii-for-coldfusion/browse_thread/thread/c742be0d8ab0395c?hl=en) on the [mach-ii mailing list](http://groups.google.com/group/mach-ii-for-coldfusion/) where a user wanted to detect whether a request was being made via http or https.

This is quite a common step developers take when working on a site with secure (SSL) and non-secure areas. As the list is mach-ii there are a couple of obvious framework specific options to take, those being Filters and Plugins. Although Peter Farrel does have an sslPlugin available, I liked the approach put forward by [Matt Osbun](http://www.pteradactylcry.com/blog/):

``` javascript
<cfif Compare(cgi.SERVER_PORT,443)>
	<cflocation url="https://#cgi.server_name##cgi.path_info#?#cgi.query_string#" addtoken="false"/>
</cfif>
```

Now I know a lot of people don't like using CGI scoped variables, even the more common ones, so I thought I'd try it out with getPageContext().

``` javascript
<!--- set up the getRequest method for easy access --->
<cfset oRequest = getPageContext().getRequest() />

<cfif compare(oRequest.getServerPort(), 443)>
	<cflocation url="https://#oRequest.getServerName()##oRequest.getRequestURI()#?#oRequest.getQueryString()#" addtoken="false" />
</cfif>
```

As you can see it's a little bit longer, but I believe is a safer option than relying on CGI variables.

A slight modification (using getRequest()) is testing the isSecure() which "_Returns true if this protocol is secure_":

``` javascript
<!--- set up the getRequest method for easy access --->
<cfset oRequest = getPageContext().getRequest() />

<cfif NOT oRequest.isSecure()>
	<cflocation url="https://#oRequest.getServerName()##oRequest.getRequestURI()#?#oRequest.getQueryString()#" addtoken="false" />
</cfif>
```

I'm still (slowly) making my way through getPageContext(), it can provide an absolute wealth of knowledge for the ColdFusion programmer. You can view the 1.4 [pagecontext docs here](http://java.sun.com/j2ee/1.4/docs/api/javax/servlet/jsp/PageContext.html) and the [servletrequest docs here](http://java.sun.com/j2ee/1.4/docs/api/javax/servlet/ServletRequest.html).
