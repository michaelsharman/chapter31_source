---
comments: true
date: 2012-03-17 02:56:45
layout: post
slug: find-and-replace-with-line-breaks-in-eclipse
title: Find and Replace with line breaks in Eclipse
wordpress_id: 1045
categories:
- ColdFusion
---

Often with doing a find and replace you want to use line breaks in the find (or replace) criteria. Sometimes I'll have a column of data from a csv that I want to modify...whatever.

You can now check the "regular expressions" checkbox while doing a file search in Eclipse and specify "\R" to find or replace line breaks (platform independent).

Eg replace line breaks with commas:

![](http://www.chapter31.com/wp-content/uploads/2012/03/Screen-shot-2012-03-17-at-1.54.41-PM.png)

Other interesting and useful options are:
	
* \t - tabs	
* \n - newline	
* \R - platform indepedent line delimiter	
* \r - carriage return	
* ^ - line start

This was introduced in Eclipse 3.4.x, [read more here](http://archive.eclipse.org/eclipse/downloads/drops/R-3.4-200806172000/whatsnew3.4/eclipse-news-part1.html).
