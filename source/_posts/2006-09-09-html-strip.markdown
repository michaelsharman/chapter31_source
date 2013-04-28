---
comments: true
date: 2006-09-09 03:19:54
layout: post
slug: html-strip
title: HTML strip
wordpress_id: 35
categories:
- ColdFusion
---

Let's say you have a form or mechanism in a web application which allows users to enter content which may be displayed on a web page, a comment area for example.

In these scenarios you need to be carefull of what my be entered by a malicious user, think cross site scripting. There are various reg exp’s available to assist you in cleaning the data but good folks a Adobe have given us a nice little function in [htmlEditFormat()](http://livedocs.macromedia.com/coldfusion/6.1/htmldocs/funct116.htm).

This function basically converts any discovered HTML characters into HTML entities, thus rendering them safe from cross site scripting attacks. The following characters are transformed to HTML character entities:

``` javascript
<        &lt;
>        &gt;
&        &
"        "
```

So if a user enters something like:

``` javascript
<script type="javascript">...</script>
```

All that will be returned from htmlEditFormat() will be

``` javascript
&lt;script type="javascript"&gt;...&lt;/script&gt;
```

There is also [htmlCodeFormat()](http://livedocs.macromedia.com/coldfusion/6.1/htmldocs/funct115.htm#wp1105634) which works the same as htmlEditFormat() but wraps the text in &lt;pre&gt; tags.

You may of course want to strip HTML entirely, instead of simply escaping the relevant characters with entities. In this case you may want try something like:

``` javascript
<cfset noHTML = REReplace(noHTML, "<[^>]*>","","All") />
```

Also note that line feed characters are preserved and there is no function to reverse the replacement of HTML characters into entities.

Update 14th November 2006

An easy way to clean your forms is to use the reg exp as a function and loop over your form fields. If our function was called [stripHTML](http://www.cflib.org/udf.cfm?ID=12) (from Ray Camden at cflib) then you could do:

``` javascript
<cfscript>
   for(key in form)
   {
      form[key] = stripHTML(form[key]);
   }
</cfscript>
```
