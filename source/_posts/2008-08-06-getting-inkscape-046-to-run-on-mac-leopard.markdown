---
comments: true
date: 2008-08-06 01:09:03
layout: post
slug: getting-inkscape-046-to-run-on-mac-leopard
title: Getting Inkscape (0.46) to run on Mac Leopard
wordpress_id: 320
categories:
- Mac
- Tools
---

[Inscape](http://inkscape.org/) is a fantastic open source vector graphics tool which can be a nice alternative to Adobe's Illustrator.

![](http://www.chapter31.com/wp-content/uploads/2008/08/header-logo.png)

Getting it to run on the Mac took a couple of extra steps though.

Firstly the [download page](http://inkscape.org/download/?lang=en) advises that you upgrade X11.app to at least [XQuartz v2.1.4](http://xquartz.macosforge.org/). This is a large-ish download which forces you to quit all applications as it needs to restart your system after installing.

The next problem was that after a restart, Inkscape displays a message saying that the first time it runs it may take a while to load as it needs to caches fonts. The issue is however that it never loads :(

A quick google later found the solution from [Kuneri Bloggy](http://bloggy.kuneri.net/2008/05/14/how-to-run-inkscape-on-mac-leopard/). 

Simply open up a terminal window and create a _.fontconfig_ file in your home directory:

``` javascript
mkdir ~/.fontconfig
```

All good now :)


