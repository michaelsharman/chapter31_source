---
comments: true
date: 2006-04-11 05:56:51
layout: post
slug: cfdump-goodies
title: cfdump goodies
wordpress_id: 22
categories:
- ColdFusion
---

[&lt;cfdump&gt;](http://livedocs.macromedia.com/coldfusion/6.1/htmldocs/tags-p21.htm) is a fantastic debugging tool which can be used to display the values/results of simple and complex variables. But there are a couple of little known attributes you can take advantage of to make your life just peachy, namely:

  * expand
  * top

Expand is great when you're working with large data structures which might take a long time to load etc. This attribute can take 2 values, either yes or no (the default being yes). 'Yes' expands all structure(s) both top level and nested, and 'No' collapses them which can be handy if you only want to view top level elements only or if you want to drill down to a certain key only.

**For example:**  

``` javascript
<cfdump var="#myVar#" expand="no"></cfdump>
```

Top is used to display the top 'x' nested levels of the structure. So if you are dumping a complex variable which holds many nested complex types (queries, structures etc) you can choose which level to load up to.

**For example:**  
    
``` javascript
<cfdump var="#myVar#" top="2"></cfdump>
```
