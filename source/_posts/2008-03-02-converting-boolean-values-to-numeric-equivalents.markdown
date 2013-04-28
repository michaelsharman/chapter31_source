---
comments: true
date: 2008-03-02 23:32:32
layout: post
slug: converting-boolean-values-to-numeric-equivalents
title: Converting boolean values to numeric equivalents
wordpress_id: 198
categories:
- ColdFusion
---

Today I had a situation where I wanted to convert a boolean value (true or false) to a numeric equivalent (1 or 0) for insertion into a database table field which had a "tinyint" data type.

The value was coming from a form checkbox, so the actual element may or may not exist in the form struct depending on whether the user "checked" the box or not.

I found a few ways to do this, some "better" than others but all using [structKeyExists()](http://livedocs.adobe.com/coldfusion/8/htmldocs/help.html?content=functions_s_27.html) to look for the form element. The result of which will of course return a boolean "true" if the key exists within the form struct (meaning the user has checked the checkbox) or "false" which tells me the checkbox was unchecked (or simply not checked in the first place).

The long way round, arguably less elegant:

``` javascript
<cfif structKeyExists(form, 'minimised')>
	1
<cfelse>
	0
</cfif>
```

Using the ColdFusion [iif()](http://livedocs.adobe.com/coldfusion/8/htmldocs/help.html?content=functions_h-im_05.html) equivalent of a conditional "ternary operator"

``` javascript
#iif((structKeyExists(form, 'minimised')), 1, 0)#
```

Casting the value using [javaCast()](http://livedocs.adobe.com/coldfusion/8/htmldocs/help.html?content=functions_in-k_45.html):

``` javascript
#javaCast('int', structKeyExists(form, 'minimised'))#
```

Doing a [numberFormat()](http://livedocs.adobe.com/coldfusion/8/htmldocs/help.html?content=functions_m-r_08.html):

``` javascript
#numberFormat(structKeyExists(form, 'minimised'))#
```

The last 2 examples seem like the best approach to me as they are more succinct than using an <cfif>/<cfelse> combination, and most people shy away from [iif()](http://livedocs.adobe.com/coldfusion/8/htmldocs/help.html?content=functions_h-im_05.html) because it will [evaluate()](http://livedocs.adobe.com/coldfusion/8/htmldocs/help.html?content=functions_e-g_03.html) either of the string expressions (in this case 1 or 0) which is irrelevant for your needs in many cases including this one.
