---
comments: true
date: 2006-09-25 00:44:04
layout: post
slug: cfhtmlhead
title: cfhtmlhead
wordpress_id: 46
categories:
- ColdFusion
---

Sometimes during development you may want to programmatically add text/content to the &lt;head&gt; area of the currently processing page. Most often I do this when I want to add Javascript code or link tags dynamically.

&lt;cfhtmlhead&gt; is a great tool to use for this as you don’t need to try and spaghetti code your header include/module.

For example:

	<cfhtmlhead text="<script type="text/javascript" src="/js/myScript.js"></script>">

**TEXT**

The text you want to add to the &lt;head&gt; area of an HTML page. Everything inside the quotation marks is placed in the &lt;head&gt; section.

Note that if you use this tag after the cfflush tag on a page, an error is thrown.