---
comments: true
date: 2006-11-14 22:15:29
layout: post
slug: wordpress-rss-feed-validation
title: Wordpress RSS feed validation
wordpress_id: 77
categories:
- PHP
- Uncategorised
---

I've been using [Wordpress](http://wordpress.org/) for a while now and I'm really happy with it. Only recently have I tried to validate my RSS feed using [feedvalidator](http://www.feedvalidator.org/).




Unfortunately even though the feed validated I received the following warning:




> wfw:commentRSS should be wfw:commentRss




The explanation given on the site was:




> Due to a clerical error, the element Chris Sells originally spec'ed as wfw:commentRss appeared as wfw:commentRSS (note the difference in case) on Joe Gregorio's site. At least one product (WordPress) has implemented and deployed feeds using the spelling originally present on Joe's site.
> 
> 





And the solution:




> Change wfw:commentRSS to wfw:commentRss
> 
> 

> 
> Wordpress users can find this in the wp-rss2.php file.

> 
> 





Gotta love nice and easy fixes :)



