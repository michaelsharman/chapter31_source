---
comments: true
date: 2006-12-19 05:00:51
layout: post
slug: determining-which-httpproxy-ports-your-jrun-instance-is-running-on
title: Determining which http/proxy ports your JRun instance is running on
wordpress_id: 63
categories:
- ColdFusion
---

At Daemon we often run ColdFusion in multi-server mode (on top of JRun) which enables us to cleanly separate projects which require different server settings from one another.


Typically I have a ColdFusion instance per [Farcry](http://www.farcrycms.org/) version, at the moment that would be:
    
  * p300 (v3)
  * gonzales (v4)

When ColdFusion first installs in multi-server mode you get the default 'cfusion' instance, but you also get the 'admin' JRun instance which is really only used when you need to access the JRun Management Console...not very often for most people!

That being the case I often switch it off (in Control Panel/Administrative Tools/Services) and set its start option to manual, i.e. I'll start it if I want to use it because I don't want it taking up any system resources when I don't specifically need it :)

*Sometimes* this is a pain when you need to double check the http and/or proxy port of a particular ColdFusion instance, usually when I need to access ColdFusion administrator or when I'm setting a bootstrap in my apache config.

To save me starting the 'admin' JRun instance purely to see the proxy port value, I can open up the jrun.xml file in my server-inf directory and look for the <port> setting under ProxyService.

For me this is located in C:\JRun4\servers\cfusion_gonzales\SERVER-INF
    
```
<!-- ================================================================== -->
<!-- This is the built-in JRun Web Server -->
<!-- ================================================================== -->
<attribute name="port">8301</attribute></code>
```

```
<!-- ========================================================================= -->
<!-- This service is for communicating with a native (IIS, Apache, Netscape) -->
<!-- web server. -->
<!-- To run this service in a secure mode via SSL, set the keyStore, -->
<!-- keyStorePassWord, trustStore and socketFactoryName attributes. -->
<!-- ========================================================================= -->
<attribute name="port">51000</attribute></code>
```

Believe it or not this is actually easier for me than starting (and then stopping) my admin JRun instance! Now you can just add this to your folder of explorer shortcuts.

Ah it's the little things...
