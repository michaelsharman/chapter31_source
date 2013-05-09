---
layout: post
title: "iOS 6 caching POST requests"
date: 2013-05-09 14:28
comments: true
categories:
- apple
- apache
---
Apparently I've been living under a rock, never having been bitten (that I know of) by the pretty massive bug Apple rolled out in iOS 6 (with Safari). The bug has been well documented around the interwebs, basically Safari caches HTTP POST requests. If you haven't heard about this...stop and read that last bit again.

Now, replicating this bug is dependent on the payload of the POST not changing between requests, so in many circumstances you may be fine. However let's talk about something like a simple login form.

* User enters credentials in web form and clicks "Login"
* App/site POSTs data to the server for authentication
* Server authenticates request
* 200 OK is returned, and a session is spawned on the server

Pretty standard workflow. Now what happens if the session expires and the user is presented with the login form again?

* User enters credentials in web form and clicks "Login"
* App/site POSTs data to the server for authentication
* The request is cached because the users data (credentials) are the same as before

So in this scenario the request never actually gets sent to the server.  Your app/site is now broken, the user cannot login. This sort of issue can of course have huge consequences for any number of websites/applications.

It's worth noting that the [HTTP/1.1 RFC](http://www.faqs.org/rfcs/rfc2616.html) states (thanks [Diomidis Spinellis](http://stackoverflow.com/a/626083/1448058)):

> Responses to this method are not cacheable, unless the response includes appropriate Cache-Control or Expires header fields.

and:

> Some HTTP methods MUST cause a cache to invalidate an entity. This is either the entity referred to by the Request-URI, or by the Location or Content-Location headers (if present). These methods are:
>
> * PUT
> * DELETE
> * POST

## Solution
People have listed fixes like jQuery's _{cache: false}_ in the ajax params, to adding a random token to your payload. These methods seem a intrusive to me though as you need to change every form on every page in every app. So we went for a different approach, a simple Apache rule in your conf:

```bash
<Limit POST>
	Header set Cache-Control no-cache
</Limit>
```

All that's saying is, if the incoming request is using the HTTP POST method, set a _no-cache_ header. Nice and simple. Note that _mod_headers_ needs to be enabled in Apache for this to work.
