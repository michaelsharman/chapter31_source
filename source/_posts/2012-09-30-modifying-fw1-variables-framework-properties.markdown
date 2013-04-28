---
comments: true
date: 2012-09-30 06:54:59
layout: post
slug: modifying-fw1-variables-framework-properties
title: Modifying FW/1 variables.framework properties
wordpress_id: 1232
categories:
- ColdFusion
tags:
- FW/1
---

[FW/1](https://github.com/seancorfield/fw1/) gives you a nice, clean way to manage framework configuration properties. They're all wrapped up inside Application.cfc in a structure called _variables.framework_, [you can read more about them here](https://github.com/seancorfield/fw1/wiki/Developing-Applications-Manual) under _Configuring FW/1 Applications_.

[Our applications](http://www.learnosity.com) often have a need to use different values for these properties, depending on which environment the application is running in (development, testing, staging, production etc). An example of this might be _reloadApplicationOnEveryRequest_, which we want as _true_ in development, but _false_ elsewhere else.

So our defaults (at the top of Application.cfc) might be to set the reload property as false:

``` javascript
variables.framework = {
  reloadApplicationOnEveryRequest = false,
  disableReloadApplication = true;
  ...
}
```



These are good values for production, but we want to override them if we're in development. Here's how:


    
``` javascript
/**
* @hint We need to override variables.framework values, only way to do this is pre-fw/1 onRequestStart() as setupRequest() is called later in the call stack
**/
public any function onRequestStart(string targetPath)
{
  if (isDefined("application.config.mode"))
  {
    if (application.config.mode == "dev")
    {
      variables.framework.reloadApplicationOnEveryRequest = true;
      variables.framework.disableReloadApplication = false;
    }
  }
  super.onRequestStart(targetPath);
}
```



You can see in the example above that we override the default values we set initially, so that if we're in _development_ mode we not only [have the ability to reload the application (using a custom property called _disableReloadApplication_)](http://www.chapter31.com/2012/09/27/preventing-fw1-from-reinitialising-an-app-via-the-url/), but we also reload the application on every request.

2 things to note here, are that we can't use setupRequest() for this, as it's called too late by framework.cfc and won't enable us to override any _variables.framework_ properties. So instead we use onRequestStart(), which gives us the 2nd thing to watch out for, and that is that you must be careful to call super.onRequestStart(targetPath); at the conclusion of this method. Or you might get strange results.
