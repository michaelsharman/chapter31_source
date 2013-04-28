---
comments: true
date: 2007-10-31 22:19:48
layout: post
slug: coldfusion-8-can-now-use-cacheaftercachewithin-when-using-cfqueryparams
title: ColdFusion 8 can now use cacheAfter/cacheWithin when using cfqueryparam's
wordpress_id: 156
categories:
- ColdFusion
---

I just noticed this in the [Adobe docs](http://livedocs.adobe.com/coldfusion/8/htmldocs/help.html?content=Tags_p-q_18.html) for cfqueryparam in ColdFusion 8:



> Revised 8/21/2007: Removed limitation on using the cfquery cachedAfter or cachedWithin attributes with cfqueryparam.This limit no longer applies.



This is great news because before (MX7 and below):



> You cannot use the cfquery cachedAfter or cachedWithin attributes with cfqueryparam.



I know many people didn't like this limitation as it meant you needed to go to extra lengths to perform query caching (such as Application scope etc).

This is another reason why CF8 is so good :)
