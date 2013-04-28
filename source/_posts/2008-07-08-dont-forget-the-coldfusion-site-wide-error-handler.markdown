---
comments: true
date: 2008-07-08 02:55:55
layout: post
slug: dont-forget-the-coldfusion-site-wide-error-handler
title: Don't forget the ColdFusion site-wide error handler
wordpress_id: 259
categories:
- ColdFusion
---

Most developers know and use exception handling techniques when building web apps. One of the important reasons to do this is so that the end user isn't presented with an ugly server error message, but instead a nice "skinned" template advising them that something's gone wrong and an administrator has been notified etc. (Of course another reason for this is not to give away sensitive server configuration information to prying eyes!)

[try](http://livedocs.adobe.com/coldfusion/8/htmldocs/help.html?content=Tags_t_12.html)/[catch](http://livedocs.adobe.com/coldfusion/8/htmldocs/help.html?content=Tags_c_04.html) blocks are great for fine grained control to catch and handle exceptions as they occur at runtime.

[onError()](http://livedocs.adobe.com/coldfusion/8/htmldocs/help.html?content=AppEvents_06.html) inside Application.cfc is the next place ColdFusion will look to handle thrown exceptions and is often used as a catch-all. 

This all works great...most of the time.

Most of us don't have every conceivable piece of code wrapped around a try/catch block, so what happens when the actual _server_ throws an exception like a template timeout (cfoutput and cfloop can often timeout depending on server settings and what you're doing) etc and we're not catching the exception in our code? In this case users see a nice phat ColdFusion error message. Not happy Jan.

![Naughty error](http://www.chapter31.com/wp-content/uploads/2008/07/bos-error-300x170.gif)

Enter the "site-wide error handler" which you can set in the "Settings" area of ColdFusion administrator.

![](http://www.chapter31.com/wp-content/uploads/2008/07/error-handlers-300x79.gif)

This is the 3rd and final way to "catch" errors and display a custom template to the end user. Note that this template will look the same across all sites running on that JRun instance.

The cool this is that you get the "error" struct of detailed exception information (think [cferror](http://livedocs.adobe.com/coldfusion/8/htmldocs/help.html?content=Tags_d-e_11.html)) so you can log the error as you see fit.

Bottom line is, you should always have a template in the site-wide error handler so the end user (whether malicious or not) never sees the default ColdFusion error message in the event that you aren't handling _everything_ in your code.

Of course you may not (read almost definitely will not) be able to define your own template if you're running in a shared hosting environment. In which case you would assume (and hope) that the hosting provider had a generic template for such situations.


