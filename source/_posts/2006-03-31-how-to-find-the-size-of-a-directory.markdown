---
comments: true
date: 2006-03-31 01:36:43
layout: post
slug: how-to-find-the-size-of-a-directory
title: How to find the size of a directory?
wordpress_id: 9
categories:
- ColdFusion
---

Here is an [article](http://www.coldfusioncookbook.com/entry/79/How-do-I-find-the-size-of-a-directory?) from [coldfusion cookbook](http://www.coldfusioncookbook.com/).

``` javascript
<cfdirectory  
  directory="c:\cfusionmx"  
  action="list"  
  recurse="true"  
  name="cfDir">
    
<cfquery dbtype="query" name="dirSize">
   select sum(size) as size from cfDir
</cfquery>

<cfset sizemb="dirSize.size/1000000">

<cfoutput>#numberFormat(sizeMB,",.99")#</cfoutput>
```

Note the 'recurse' option, this will get the size of the current and all sub-directories. If you only need the size of the current directory, change recurse to false.

