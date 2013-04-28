---
comments: true
date: 2007-10-12 05:26:01
layout: post
slug: coldfusion-round-docs-inaccurate
title: ColdFusion 'Round()' docs inaccurate?
wordpress_id: 151
categories:
- ColdFusion
---

Today I needed a function which would return me a whole number, rounding either up or down depending on whether the value passed to the function was less than or greater than .5

Looking at [round() ColdFusion 8 docs](http://livedocs.adobe.com/coldfusion/8/htmldocs/help.html?content=functions_m-r_40.html) they say:



> Rounds a number to the closest integer that is larger than the input parameter.



Hmm, that doesn't sound right.

In actual fact the round() function does exactly what it should, rounds numbers down OR up.

``` javascript
Round(7.49) = 7
Round(7.5) = 8
Round(7.65) = 8
Round(-7.49) = -7
Round(-7.5) = -7
Round(-7.65) = -8
```

Also funny to note that although the docs site is much better for ColdFusion 8, many of the examples using ColdFusion variables are not parsed. So you get examples like #Round(7.49)#.

Hopefully Adobe will rectify this soon.
