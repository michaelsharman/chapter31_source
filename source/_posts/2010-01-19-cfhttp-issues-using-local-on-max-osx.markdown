---
comments: true
date: 2010-01-19 23:28:00
layout: post
slug: cfhttp-issues-using-local-on-max-osx
title: cfhttp issues using ".local" on Max OSX
wordpress_id: 783
categories:
- ColdFusion
---

Ran into an interesting problem today doing something quite simple. Basically all I was doing was posting xml data to a URL, but I kept getting a 408 request timeout and I didn't know why.

We happen to use the ".local" domain name structure for local development. I was posting data from one local site to another e.g.

http://mysite1.local   ->   http://mysite2.local

When I dumped cfhttp on the posting page I got the following error:

[![cfhttp](/images/uploads/2010/01/cfhttp.png)](/images/uploads/2010/01/cfhttp.png)

Now I hadn't come across this error before with cfhttp and nothing I did fixed the issue, I even got that message using a "GET" method. It wasn't till I tried "GET" from a public domain (http://www.google.com, which worked) that I thought to try a local domain which didn't use ".local".

Success!

[Mark](http://www.lynchconsulting.com.au/go/blog) mentioned that it could be a problem with Bonjour (as I'm on a Mac) which uses .local.

This is kinda timely as we're moving away from the ".local" convention in favour of ".cf7", ".cf9", ".railo" etc as we're using multiple cfmx engines for different projects and that provides a way to easily test codebases against different engines easily.
