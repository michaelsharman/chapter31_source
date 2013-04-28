---
comments: true
date: 2008-11-25 01:30:06
layout: post
slug: security-reminder-are-you-using-scriptprotect
title: Security reminder - Are you using scriptprotect?
wordpress_id: 542
categories:
- ColdFusion
---

One of our applications had an entry in the ColdFusion exception logs today:



> ScriptProtect error replacing insecure tag in scope CGI;



Essentially someone (via an automated process) was trying to find a weakness in our application by trying URL's like:

``` javascript
http://www.mysite.com/?mode=>'><script>alert(40891)</script>
```

Luckily we use scriptprotect (among many other defensive techniques) to prevent this type of thing from causing any damage. But I just thought I'd throw out a quick reminder to EVERYONE using CF7+ (or Railo) to make sure and use the [scriptprotect](http://www.chapter31.com/2006/12/21/scriptprotect-in-cfmx7/) attribute of either the cfapplication tag or Application.cfc

It is simple to do (set once and forget) and helps protect you against XSS attacks and as it's easier to implement than cfqueryparam there really isn't any excuse to get caught with your pants down by not using it!
