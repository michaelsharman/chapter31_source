---
comments: true
date: 2006-04-01 05:27:37
layout: post
slug: how-do-i-trim-the-contents-of-a-form
title: How do I trim the contents of a form?
wordpress_id: 13
categories:
- ColdFusion
---

From [ColdFusion Cookbook](http://www.coldfusioncookbook.com/):

Trimming is an essential part of dealing with an data coming from form textfields or textareas etc. You can of couse trim as and when you need (before validation or database inserts etc) but if you can trim all fields quickly and easily!

``` javascript
<cfloop collection="#form#" item="formfield">
    <cfset form[formfield] = trim(form[formfield]) />
</cfloop>
```

This basically loops over a form structure and trims each element. You can use this loop in a function before handing it to your validation or database methods.

[Read the full article](http://www.coldfusioncookbook.com/entry/28/How-do-I-trim-the-contents-of-a-form?)