---
comments: true
date: 2007-11-14 00:38:27
layout: post
slug: flex-not-working-on-ubuntu-using-the-gnash-player
title: Flex not working on Ubuntu using the Gnash player
wordpress_id: 171
categories:
- Flex
- Ubuntu
---

[Gnash](http://packages.ubuntu.com/feisty/utils/gnash) is a free Flash movie player for Ubuntu which works as a standalone player or as a plugin for Firefox and Konqueror.

This is the default (I believe) player installed on Ubuntu 7.10 (the Adobe player isn't there by default).

I recently tried to load a Flex app in this player and failed, the reason is that Gnash is in alpha state and supports Flash version 7 (and some AS classes for 8.5) only. 

Of course you need Flash player 9 to run Flex 2+, so you'll have to use Adobe's Flash player for now which thankfully works fine :)

To install the Flash player from the terminal:

``` javascript
sudo apt-get install flashplugin-nonfree
```

Or to try Gnash:

``` javascript
sudo apt-get install mozilla-plugin-gnash
```

This will be another interesting project to keep an eye on.
