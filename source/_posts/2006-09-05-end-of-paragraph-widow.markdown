---
comments: true
date: 2006-09-05 22:59:34
layout: post
published: false
slug: end-of-paragraph-widow
title: End of paragraph 'widow'
wordpress_id: 17
categories:
- ColdFusion
---

[Peter Freitag](http://www.petefreitag.com/) wrote a post today (inspired by [Shaun Innman](http://www.shauninnman.com/)) on widows.

In typesetting a widow is that annoying problem of having a line wrap so that a single word hangs over to the next line. This would especially be a problem for headings as the issue would be very obvious, not cool :(

An excerpt from Peters site:

=====================================================  

For example:

> Man Walks On
> Moon

Moon is the widow in the above example. Shaun fixes this by replacing the last space with an   He provides a function in PHP, but here's a simple regular expression for ColdFusion to do the same:

> ReReplace(headline, " ([^ ]+)$", " 1")

It can get a bit trickier to fix this at the end of paragraphs, here's another regular expression that might work for that (need to test more):

> ReReplace(text, " ([^ ]+r?n)", " 1", "ALL")

=====================================================
