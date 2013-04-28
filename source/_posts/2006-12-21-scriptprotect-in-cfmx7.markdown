---
comments: true
date: 2006-12-21 04:43:11
layout: post
slug: scriptprotect-in-cfmx7
title: scriptprotect in CFMX7
wordpress_id: 94
categories:
- ColdFusion
---

I only recently found out about [scriptprotect](http://www.chapter31.com/createTimeSpan(1,0,0,0)) which is a cool new feature of ColdFusion MX7. Scriptprotect basically specifies whether to protect variables from cross-site scripting attacks, and can be enabled 2 ways.

The first is a server setting in ColdFusion Administrator. Go to 'Settings' and check the "Enable global script protection" checkbox. This will obviously effect all sites running on that ColdFusion instance but can be overridden in each sites Application.cfm/Application.cfc file.

If you are using Application.cfc you'll want to add scriptProtect at the top of the file in the constructor/initialisation code area.

``` javascript
<cfscript>
	this.name = "myApplication"; 
	this.applicationTimeout = createTimeSpan(1,0,0,0); 
	this.sessionmanagement = "true";
	this.sessiontimeout = createTimeSpan(0,0,20,0); 
	this.scriptProtect = "all"; 
</cfscript>
```

If you are using Application.cfm you can just add scriptProtect as an attribute to the cfapplication tag.

	<cfapplication name="myApplication" scriptProtect="all">

Note that you have the following options for scriptProtect:

  * none: do not protect variables
  * all: protect Form, URL, CGI, and Cookie variables
  * comma-delimited list of ColdFusion scopes: Protect variables in the specified scopes.

But what does it actually do? With scriptProtect ColdFusion can protect variables in URL, Cookie, CGI, and Form scopes by replacing object, embed, script, applet, and meta tags with the text "InvalidTag". 

So if I have scriptProtect enabled and a not so nice person enters something like:
    
    <script>alert('hi');</script>

or something much worse than that in a comments field of a blog for example (where all users can see the output), the end output to the screen will be:
    
    alert('hi');

The actual source of the page will be:
    
    <InvalidTag>alert('hi');</script>

Although this might not be ideal for a lot of people because we don't want to display that content to users (i.e. alert=('hi');), it's better than the potentially malicious script actually running whenever a user loads the page!

See [this article](http://livedocs.macromedia.com/coldfusion/7/htmldocs/wwhelp/wwhimpl/common/html/wwhelp.htm?context=ColdFusion_Documentation&file=00001176.htm) for more information on cross-site scripting and the protection ColdFusion offers.

Pete Freitag also has a couple of great articles on this topic, [see here](http://www.petefreitag.com/item/362.cfm) and [here.](http://www.petefreitag.com/item/363.cfm)

One thing I did note which may seem obvious, but scriptProtect doesn't work when you "Enable global script protection" in ColdFusion Administrator and you don't have an Application.cfm or Application.cfc in your project directory or anywhere in the parent directory path. Not that this is likely to happen :)
