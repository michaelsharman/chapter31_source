---
comments: true
date: 2007-04-23 13:21:53
layout: post
slug: farcry-40-filename-standards
title: Farcry 4.0 filename standards
wordpress_id: 99
categories:
- ColdFusion
- Farcry
---

Here at Daemon we are looking at standardising the [FarCry](http://www.farcrycms.org/) core codebase in an effort to reduce any case-sensitivity issues that may be found when running FarCry on different platforms.

These problems usually arise when dealing with filenames of any type (.cfc, .cfm etc), indeed I ran into an issue today with an external developer who had created their own templates which weren't showing up in the FarCry webtop. Filename case-sensitivity was the culprit :)

The standard (which isn't really all that new to [Daemon](http://www.daemon.com.au/) developers) is simple and is one which many people use (although I've seen it referenced with different terms), all filenames which reside in the FarCry core directory should be named in a "Lower Camel Case" format.

For example:
	displayPageStandard.cfm  
	displayTeaserStandard.cfm  
	dmNews.cfc  
	myCustom.cfc

I know this goes against the often used standard of naming components in upper camel case (e.g. MyCustom.cfc), however this way not only is there just one standard for all files but it also helps as this happens to be the current naming style of most 'core' components.
