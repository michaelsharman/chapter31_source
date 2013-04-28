---
comments: true
date: 2006-03-13 04:45:02
layout: post
slug: session-and-client-variable-handling-in-cfmx
title: Session and client variable handling in CFMX
wordpress_id: 5
categories:
- ColdFusion
---

With CFMX there are a few new features you can take advantage of in relation to session and client variable handling, namely:

  * URLSessionFormat()
  * Using UUID for the CFToken value
  * Using J2EE Session Variables

**URLSessionFormat()**

We all know that using session variables _primarily_ relies on the user have enabled cookies in their browser, otherwise you need to pass CFIDE and CFTOKEN along the URL. This can be painful as you need to ensure you pass this client identity along with every request, whether it be an 

    <a href>

or 

    <cflocation>

etc.

With URLSessionFormat() ColdFusion automatically detects whether templates are passing the required cookie, if it isn't then it will pass the values along the URL for you!

So with the following:  

    <a href="#URLSessionFormat("order.cfm?orderID=123")#">Order Page</a>

You get:  

    <a href="order.cfm?orderID=123&cfid;=xxxx&cftoken;=xxxxxxxx">Order Page</a>

:)

If cookies are being accepted then CFIDE and CFTOKEN won't be passed.

**UUID for CFTOKEN value**

In ColdFusion Administrator on the 'Server settings/Settings' page you can choose to "Use UUID for cftoken". This guarantees a unique identifier for the token, instead of a normal 8 digit number which could be guessed by a malicious user.

![ColdFusion Administrator](http://www.chapter31.com/images/cfadmin.jpg)

**J2EE Session Variables**

Work the same way as CFIDE and CFTOKEN but use a JSessionID instead. One of the coolest things about jsessionid's is that when a user closes his or her browser the session terminates because the cookie set is non-persistant, held only in the browsers memory!
