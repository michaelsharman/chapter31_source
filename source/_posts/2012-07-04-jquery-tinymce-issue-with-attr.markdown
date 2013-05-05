---
comments: true
date: 2012-07-04 23:05
layout: post
slug: jquery-tinymce-issue-with-attr
title: "jQuery tinyMCE issue with $.attr();"
wordpress_id: 1120
categories:
- Javascript
- Misc
---

I had some strange behaviour with the jQuery verion of tinyMCE (3.4.6). Basically I was [integrating the chosen library](http://harvesthq.github.com/chosen/) (which is build as a jQuery plugin), but it seems the $.attr('id') from within chosen.js was returning a JavaScript element reference instead of the value of the "id" field.

[![](/images/uploads/2012/07/tiny_error.png)](/images/uploads/2012/07/tiny_error.png)

Some basic tracing showed the strange error:

[![](/images/uploads/2012/07/tiny_trace.png)](/images/uploads/2012/07/tiny_trace.png)

The solution for me was moving to tinyMCE 3.5.4.1 (and jQuery 1.7.2, previously I was on 1.6.4). All good now, just thought I'd throw up a quick post if anyone was being caught by this.
