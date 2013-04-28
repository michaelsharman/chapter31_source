---
comments: true
date: 2009-07-14 04:42:39
layout: post
slug: hiding-the-farcry-tray-on-the-front-end
title: Hiding the FarCry tray on the front end
wordpress_id: 655
categories:
- ColdFusion
- Farcry
---

Came across [this nice tip](http://groups.google.com/group/farcry-dev/browse_thread/thread/d9f4e16659e38e18?hl=en&pli=1) a little while ago from AJ Mercer on the [farcry-dev group](http://groups.google.com/group/farcry-dev/).

It hides the FarCry "tray" which is visible on the front end of your website to users who are logged in to FarCry. I happen to have a use case for this at the moment so it was good timing.

Simply put this code snippet in any template there you don't want the tray appearing. Personally I put this in _/config/_serverSpecificRequestScope.cfm_ so it's picked up on every page request as I never wanted it to appear.

``` javascript
<cfset request.mode.bAdmin = false>
```

Thanks AJ :)
