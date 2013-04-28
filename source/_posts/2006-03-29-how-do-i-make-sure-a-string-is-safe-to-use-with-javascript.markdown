---
comments: true
date: 2006-03-29 01:45:09
layout: post
slug: how-do-i-make-sure-a-string-is-safe-to-use-with-javascript
title: How do I make sure a string is safe to use with JavaScript?
wordpress_id: 10
categories:
- ColdFusion
---

An [article](http://www.coldfusioncookbook.com/entry/78/How-do-I-make-sure-a-string-is-safe-to-use-with-JavaScript?) from [coldfusion cookbook](http://www.coldfusioncookbook.com/) using [jSStringFormat()](http://livedocs.macromedia.com/coldfusion/7/htmldocs/00000543.htm#1106993):




"If you are dynamically populating a JavaScript variable, you may find that your code breaks with "unterminated string constant" or similar error messages. This is probably a case of your JavaScript variables containing characters that are considers to be "special" characters by JavaScript. You will need to "escape" these special characters so that JavaScript can process them."



