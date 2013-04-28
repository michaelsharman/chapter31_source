---
comments: true
date: 2006-11-09 06:22:59
layout: post
slug: reserved-characters-in-html-id-attribute
title: Reserved characters in HTML 'id' attribute
wordpress_id: 75
categories:
- (X)HTML
---

Currently I'm building an app which will accept metadata from different sources, translate that into an API to dynamically build an HTML form from. Everything is going just dandy until my page stopped validating (I use tidy to validate my markup) when I got the following warning:

![id_warning.gif](/images/uploads/2006/11/id_warning.gif)

After some digging I discovered that the value of the 'id' attribute in not simply a string which you can put anything into. I found this on w3c:

> ID and NAME tokens must begin with a letter ([A-Za-z]) and may be followed by any number of letters, digits ([0-9]), hyphens ("-"), underscores ("_"), colons (":"), and periods (".").

A simple replace got me around the solution:

```
sMyString.replaceAll("/", "_");
```

Luckily this was a quick fix and a lesson learned! [Click here to view the w3c resource](http://www.w3.org/TR/html4/types.html).
