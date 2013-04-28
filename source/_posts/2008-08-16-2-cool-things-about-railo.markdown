---
comments: true
date: 2008-08-16 09:04:07
layout: post
slug: 2-cool-things-about-railo
title: 2 cool things about Railo
wordpress_id: 346
categories:
- ColdFusion
- Railo
---

### Session management:


If an application/session scope is defined with the tag <CFAPPLICATION ...> or the application.cfc, in Railo it will not automatically exist. Only when the scope is used for the first time it will be created. If the scope is not used, it won't be created either.

This is really good news. [Many](http://www.coldfusionmuse.com/index.cfm/2005/11/28/session.bots) [people](http://www.bennadel.com/blog/1083-coldfusion-session-management-and-spiders-bots.htm) have blogged in the past about issues with "bots" hitting ColdFusion sites and spawning a multitude of sessions which (depending on the application of course) can cause memory and/or performance problems.



### Trusted cache:


In contrast to CFML Standard, with which the Trusted Cache can only be activated on the server, with Railo it is possible to define single Mappings as Trusted. This is especially useful if a function uses a framework  in which the Source-Code doesn't change any more but the function can generate a dynamic code.

Nice :)
