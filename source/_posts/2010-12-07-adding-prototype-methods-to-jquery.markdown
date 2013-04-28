---
comments: true
date: 2010-12-07 22:41:50
layout: post
slug: adding-prototype-methods-to-jquery
title: Adding Prototype methods to jQuery
wordpress_id: 874
categories:
- Javascript
---

We recently upgraded a project which was using the Prototype JavaScript framework to use jQuery and ran into a few methods which didn't exist in jQuery at all.

A quick search gave us an easy solution; by adding a prototype property (not related to the Prototype framework) to String.prototype we can give every `string` in our codebase access to these methods as if they were part of the JavaScript spec (or the jQuery library).

E.g. we wanted to add the endsWith() and startsWith() functions on any String object which basically checks a string for a suffix or prefix:

``` javascript
// Allows jQuery to use '.startsWith' and '.endsWith' which are in the Prototype framework
function utilityInit()
{
	String.prototype.endsWith = function (suffix) {
	  return (this.substr(this.length - suffix.length) === suffix);
	}
	
	String.prototype.startsWith = function(prefix) {
	  return (this.substr(0, prefix.length) === prefix);
	}
}
```

Note that I wrapped these additions in a function called utilityInit() which I run on document ready...so I can access them anytime I need.
