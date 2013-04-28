---
comments: true
date: 2008-06-11 04:49:00
layout: post
slug: preservesinglequotes-still-breaks-on-array-style-parameters
title: PreserveSingleQuotes still breaks on array style parameters
wordpress_id: 241
categories:
- ColdFusion
---

As far back as [ColdFusion 6 PreserveSingleQuotes](http://livedocs.adobe.com/coldfusion/6.1/htmldocs/functa53.htm) hasn't worked with array style parameters.

``` javascript
#preserveSingleQuotes(aWhere[i])#
```

This was even submitted as ColdFusion Bug number 53977 on the CF6 docs, a few years later and we still have no joy for ColdFusion 8 :(

Structures will work but only when you access the value by dot notation, not using array style:

``` javascript
#preserveSingleQuotes(stWhere.i)#
```

This was annoying today when I wanted to loop over an array of "WHERE" clause arguments passed into a function. I needed to either change the calling code to pass a structure instead, or set the arguments array element to a local variable inside each loop iteration to use inside the preserveSingleQuotes

Hopefully Adobe will fix this small bug in the next (Centaur) release!
