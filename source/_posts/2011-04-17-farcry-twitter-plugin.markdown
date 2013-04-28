---
comments: true
date: 2011-04-17 12:04:49
layout: post
slug: farcry-twitter-plugin
title: FarCry twitter plugin
wordpress_id: 901
categories:
- ColdFusion
- Farcry
---

I spent a couple of hours on a FarCry plugin for twitter yesterday based off their official API.

## What?
This plugin basically wraps up the options that the offical twitter API gives you including:

* Twitter username
* Showing avatars, timestamps, hashtags etc
* Theme appearance (colours for background and text etc
* Dimensions of widget

For more, visit the [project page,](https://github.com/michaelsharman/farcrytwitter) download it and have a play.

## Why?
Although the twitter API is super simple to implement, it's always handy to have things wrapped up as a plugin so we can easily create as many widgets as we need and handle caching etc. Caching is important as the API is rate limited to 150 requests per hour, using FarCry's object broker will get around this.

Plus it makes it simple for non techy people to get going with the goodness of twitter.

## Where?
The project is currently hosted at GitHub...where else?
[farcrytwitter project page](https://github.com/michaelsharman/farcrytwitter)

## Requirements?
FarCry 6+ (although I think it'll work on 5+ I haven't tested)
Railo 3.x / ColdFusion 8+
MySQL / MSSQL (or whatever database your version of FarCry supports)

![](/images/uploads/2011/04/publishingrule.png)
![](/images/uploads/2011/04/widgetsample-150x150.png)
