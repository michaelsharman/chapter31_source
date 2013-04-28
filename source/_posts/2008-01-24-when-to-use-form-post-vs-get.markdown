---
comments: true
date: 2008-01-24 03:01:30
layout: post
slug: when-to-use-form-post-vs-get
title: When to use form POST vs GET?
wordpress_id: 181
categories:
- (X)HTML
---

I read [a post](http://www.coldfusionmuse.com/index.cfm/2008/1/23/web.logs.security) today from [Mark Kruger](http://www.coldfusionmuse.com/) where he was warning against the possible side effects when using GET as a form submit _method_.

I think I (unintentionally) offended Mark with my comment where I asked _why would anyone EVER use GET?_ because I pretty much always use POST so was wondering why you would use GET.

In my search for answers I asked [Mark Lynch](http://www.lynchconsulting.com.au/) who seems to always have the answer to my questions :)

So in summary (from [Michael Schwarz](http://weblogs.asp.net/mschwarz/archive/2006/12/04/post-vs-get.aspx));


>POST
>
> 1. By default no proxy server or web browser is caching this data, you will always get the real data from you web server.
> 2. The length of data you can send to the web server is only restricted by the web server itself, but there is no real restriction.
> 3. Character encoding can be done easily using application/x-www-form-urlencoded.
>
> GET
>
> 1. Running a http request with GET can be cached on your web browser or a configured proxy server.
> 2. To get the live data from you web server you have to modify the url that is used in your XHR invoke, simply by using a counter or new Date().getTime() which will generate a unique url.
> 3. Maximum URL length is 2,083 characters in Internet Explorer (see MaxClientRequestBuffer: Use POST instead of GET to Send Large Amounts of Data in Request)
> 4. In particular, the convention has been established that the GET and HEAD methods SHOULD NOT have the significance of taking an action other than retrieval. [RFC 2616 sec 9]
> 5. Character encoding will reduce the amount of data that can be used because of url encoding entities (i.e. three Japanese characters are converted to this: %26%2312454%3B%26%2312455%3B%26%2312502%3B)

There is also a [great article here](http://www.cs.tut.fi/~jkorpela/forms/methods.html) if you want some further reading on this subject.

For me (at this stage) this really only has an effect when doing Ajax. If I'm purely wanting to retrieve data (just HTML for example) from the server then I'll use GET, but if I want to do something else with server _side effects_ (such as posting data to be saved to a database) then I'll use POST.

Phew...you learn something new everyday!
