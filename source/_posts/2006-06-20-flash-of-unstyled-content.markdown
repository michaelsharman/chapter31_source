---
comments: true
date: 2006-06-20 08:41:49
layout: post
slug: flash-of-unstyled-content
title: Flash of Unstyled Content
wordpress_id: 34
categories:
- (X)HTML
- CSS
---

The lovely people (person?) over at [Blue Robot](http://www.bluerobot.com/) have coined a term 'FOUC'; or _Flash of Unstyled Content_.

This is that annoying 'bug' in Windows IE where a user can see the entire body of the page their trying to view 'unstyled' (particularly for page layout) for a moment before the stylesheet kicks in. If the CSS is cached then you probably won't see this happen, but for first time users this just looks amature.

Luckily for the rest of us Blue Robot have a tidy little solution :) All you need to do is add _"just one LINK element or SCRIPT element inside a document's HEAD"_. Wow! 

Note that the &lt;script&gt; or &lt;link&gt; tag should go before the CSS tag as follows:

``` javascript
<head>
<link media="print" href="print.css" type="text/css" rel="stylesheet"></link>
<style media="screen" type="text/css">@import "style.css";</style>
</head>
```

[See the full article here](http://www.bluerobot.com/web/css/fouc.asp)
