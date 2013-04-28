---
comments: true
date: 2006-12-13 02:53:22
layout: post
slug: no-error-handler-for-mxna
title: No error handler for MXNA
wordpress_id: 90
categories:
- ColdFusion
---

Funny, but I've had this screen many many times when accessing [MXNA](http://weblogs.macromedia.com/mxna/).

I wonder how many sites (let alone high profile sites) don't have a default error handler in place.

![mxna error](/images/uploads/2006/12/mxna_error.gif)

Exception handling (be it with cftry/cfcatch or cferror etc) is often the last thing on a developers mind. It's easy to assume that things won't go wrong or the user will enter the correct data in a form.

One of the things I strive to do as a developer is to think of the worst case scenario, or to think like a hacker/malicious user. What would they do to break my site?

Would they turn off javascript? In that case I need to make sure I have server side validation to backup my client side validation.

Am I referencing scoped variables? Maybe I should &lt;cfparam&gt; them.

In the event of certain exceptions I may need to alert the site administrator of the error via email, a handy feature when using &lt;cferror&gt;

Either way a user seeing an error message is bad whichever way you look at it. It looks amateur and could potentially give away vital information for would be malicious users.

As such, exception handling it should be a mandatory part of any coders development methodology. Whether you use a granular approach like &lt;cftry&gt; or not, you should implement &lt;cferror&gt; to catch any exceptions that slip through the net.
