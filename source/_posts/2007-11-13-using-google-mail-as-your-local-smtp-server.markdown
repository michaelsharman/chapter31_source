---
comments: true
date: 2007-11-13 04:27:59
layout: post
slug: using-google-mail-as-your-local-smtp-server
title: Using Google Mail as your local SMTP server
wordpress_id: 164
categories:
- ColdFusion
---

As a server-side developer you are often sending emails from your web application, whether those emails be for debugging/exception handling or actual application functionality (such as a contact form etc).

Although some developers decide to turn off mail debugging locally (and instead view the errors inline), you pretty much always have the need to send emails from your development environment.

In the past I have either connected to a staging mail server or used a free SMTP server (installed locally on my workstation) like [MailEnable](http://www.mailenable.com/). Well today [Marko Tomic](http://www.lynchconsulting.com.au/blog/) let me in on something which is probably already well known! You can setup [GMail](http://www.gmail.com/) as an SMTP server in ColdFusion Administrator :)

What this means is you now don't have to bother installing your own SMTP server or getting mail details from your systems administrator...you can just use your very own gmail account! Nice.

Note that I did also google this a bit and found a couple of posts including [this one](http://groups.google.com/group/mach-ii-for-coldfusion/browse_thread/thread/608cdead2943930d) suggesting you use TLS (via the Administrator or cfmail attributes), but I needed to use SSL instead. I had no success with TLS.

Also reading [the docs](http://livedocs.adobe.com/coldfusion/8/htmldocs/help.html?content=Tags_m-o_01.html) I'm not sure if this will work pre-CF8, as SSL and TLS were added as attributes in CF8.

Below are some examples of setting this up either in Administrator or in code, note the port number is **not 25** as is the default, instead you must use port 465:

![ColdFusion Administrator - mail](http://www.chapter31.com/wp-content/uploads/2007/11/mail.png)

And in CFML:

``` javascript
<cfmail to="me@wherever.com" subject="Read me" from="you@wherever.com" server="smtp.gmail.com" useSSL="true" username="gmailUsername" password="gmailPassword" port="465">
	This is a test email!
</cfmail>
```

The nice thing about doing this in ColdFusion administrator (apart from not having to specify a cfmail server and username/password etc in your code) is that you can verify your connection to the SMTP server.
