---
comments: true
date: 2009-10-28 00:40:51
layout: post
slug: extracting-url-variables-using-javascript
title: Extracting URL variables using JavaScript
wordpress_id: 762
categories:
- Javascript
---

Server side languages are cool in that they give you a nice associative array to access URL variables. ColdFusion has the URL scope, PHP has $_GET[] etc, but how do you get these values easily with JavaScript?

I [came across a post](http://techfeed.net/blog/index.cfm/2007/2/6/JavaScript-URL-variables) over at [Jake Munson's blog](http://techfeed.net/blog/) which had just what I needed. Actually although Jakes solution was perfectly valid, I preferred a slight modification from one of the commenters which wrapped the entire URL string into an associative array so you can access the entire URL scope, as well as extracting a specific value via a key. Thanks Chad (and Jake).

So if you had a URL like http://www.mysite.com/?s=the first param&email;=someone@me.com you could get the following:

![jsdump](http://www.chapter31.com/wp-content/uploads/2009/10/jsdump.gif)

Here is the javascript function (note that we wrap all functions into objects to avoid any naming collisions, hence the "Learnosity." convention):

``` javascript
Learnosity.getURL = function()
{
	document.getVars = [];
	var urlHalves = String(document.location).split('?');
	if(urlHalves[1])
	{
		var urlVars = urlHalves[1].split('&');
		for(var i=0; i<=(urlVars.length); i++)
		{
			if(urlVars[i])
			{
				var urlVarPair = urlVars[i].split('=');
				document.getVars[urlVarPair[0]] = urlVarPair[1];
			}
		}
	}
	return document.getVars;
}
```

To access the "email" key in the URL, simply call 

``` javascript
Learnosity.getURL().email;
```

Another modification which I added was to unescape any strings, so removing things like %20 (a space character) that might be in the URL value. The following will automatically unescape all values, if this isn't what you want you can pass "false" to the function (i.e. Learnosity.getURL(false);)

``` javascript
Learnosity.getURL = function(unesc)
{
	clean = (unesc === undefined)?true:unesc;
	document.getVars = [];
	var urlHalves = String(document.location).split('?');
	if(urlHalves[1])
	{
		var urlVars = urlHalves[1].split('&');
		for(var i=0; i<=(urlVars.length); i++)
		{
			if(urlVars[i])
			{
				var urlVarPair = urlVars[i].split('=');
				document.getVars[urlVarPair[0]] = (clean)?unescape(urlVarPair[1]):urlVarPair[1];
			}
		}
	}
	return document.getVars;
}
```
