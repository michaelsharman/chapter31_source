---
comments: true
date: 2008-04-08 02:32:08
layout: post
slug: workaround-for-cfscript-bug-in-varscoper
title: Workaround for cfscript bug in varscoper
wordpress_id: 224
categories:
- ColdFusion
---

Those that use the sensational [varscoper tool](http://www.schierberl.com/varScoper/) from Mike Schierberl know that cfscript is still a little experimental with the current release.

One of the things it can do is return variables that _are_ actually "var" scoped as _not var_ scoped when using cfscript. This seems to happen most often when you have a comment directly above the variable in question.

``` javascript
<cfscript>

	var column = 2;		//which column the pod is in
	var row = 3;		//which row the pod is on
	var newRow = 0;

</cfscript>
```

In the above example Varscoper tells me that "newRow" is not var scoped when clearly it is.

[![](/images/uploads/2008/04/varscoper-300x38.jpg)](/images/uploads/2008/04/varscoper.jpg)

This is usually fine, but if you start to get a lot of these false positives there is a quick little workaround. Place a semi-colon at the end of the last comment which effectively tells varscoper where the statement finishes and fixes the problem.

``` javascript
<cfscript>

	var column = 2;		//which column the pod is in
	var row = 3;		//which row the pod is on;
	var newRow = 0;

</cfscript>
```

Note the semi-colon after the 2nd comment. Now my reports are nice and clean :)
