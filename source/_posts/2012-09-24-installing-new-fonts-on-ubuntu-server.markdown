---
comments: true
date: 2012-09-24 03:41:55
layout: post
slug: installing-new-fonts-on-ubuntu-server
title: Installing new fonts on Ubuntu server
wordpress_id: 1192
categories:
- Misc
- Ubuntu
---

I had some new fonts to install on our test server that runs Ubuntu server. Pretty simple really, just noting it down here for next time:



	
  * Upload/ssh the font(s) to your home folder on the server	
  * Copy font to the system fonts folder, this way it can be used by all users on the system
		sudo cp -R ~/trade-gothic /usr/share/fonts/truetype/	
  * Check permissions
		sudo chmod 755 /usr/share/fonts/truetype/trade-gothic/
  * Install the fonts so applications can use them
		sudo fc-cache -f -v
