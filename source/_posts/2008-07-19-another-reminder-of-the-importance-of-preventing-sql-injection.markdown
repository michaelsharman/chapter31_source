---
comments: true
date: 2008-07-19 01:59:35
layout: post
slug: another-reminder-of-the-importance-of-preventing-sql-injection
title: Another reminder of the importance of preventing SQL injection
wordpress_id: 271
categories:
- ColdFusion
---

[Mark Kruger](http://www.coldfusionmuse.com/) has another [interesting and timely read](http://www.coldfusionmuse.com/index.cfm/2008/7/18/Injection-Using-CAST-And-ASCII) about an ambitious SQL injection attack one of his clients recently experienced.

One things for sure, it's certainly an *interesting* time to be a developer. Hackers and spammers make sure of that :(

SQL injection has been around for so long, it is truly a crime if developers (ColdFusion developers at least) aren't using [cfqueryparam](http://livedocs.adobe.com/coldfusion/8/Tags_p-q_18.html) for **every WHERE clause in their queries**. ColdFusion 8 allows you to use cachedwithin whilst using queryparam, so there is really no excuse.

And as Mark says...client side validation is a nice user experience but doesn't cut it at all. If you or someone on your team uses client side (JavaScript) validation only and/or doesn't sanitise user/URL parameters then they need to be educated or get out of the game.



### Update 25th July 2008



[Pete Freitag](http://www.petefreitag.com/) has a [nice article](http://www.petefreitag.com/item/677.cfm) about the times where you can't use cfqueryparam, and some nice solutions you can try instead. Well worth a read.
