---
comments: true
date: 2011-06-30 00:39:14
layout: post
slug: farcry-tip-remove-install-directory
title: FarCry Tip - remove install directory
wordpress_id: 969
categories:
- ColdFusion
- Farcry
---

After you install FarCry you must make sure to delete the "install" folder(s) that FarCry leaves behind. Otherwise it's possible for anyone to access the installer wizard again from your production website, and as it's the installer they don't even need to be logged in to cause real havoc. Not good.

By default, as of FarCry 6.1.x, there are 2 install folders to delete:
	
* farcry.core.webtop.install
* farcry.plugins.farcrycms.install
