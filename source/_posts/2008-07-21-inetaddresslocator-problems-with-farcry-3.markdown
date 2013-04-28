---
comments: true
date: 2008-07-21 02:56:27
layout: post
slug: inetaddresslocator-problems-with-farcry-3
title: InetAddressLocator problems with FarCry 3
wordpress_id: 275
categories:
- ColdFusion
- Farcry
---

Took me a little bit to find the solution for this across several different board posts so I thought I'd quickly write it up.

For those of us still using FarCry 3 (remember that [FarCry 5](http://farcrycms.org/) is out!) you may come across the following error:

"java init failed: net.sf.javainetloca­tor.InetAddressLocat­or"

The docs tell us:

> Geolocator is a plugin that determines the locale of an inbound request. Its an optional plugin that is turned off by default, and requires a class file InetAddressLocator to be placed in your class path.
>
> You may be getting this error because you have migrated or copied an application to a server environment that is not correctly configured for the plugin.
>
> You can either turn it off by getting into the ADMIN>>CONFIG>>PLUGINS – or drop the InetAddressLocator class into your JAVA class path. 

Remember however that if you have this problem, you can't login to FarCry to make the config change :(

In which case you can open your database and make the change manually. Open up the "config" table and edit the "plugins" row (row 9) in which there is a small wddx packet. You want to change the value of the "GEOLOCATOR" value, it should be "no" as follows:

```
<var name='GEOLOCATOR'><string>No</string></var>
```

After this run an update app (/index.cfm?updateapp=1) and you should be fine. If your site is up and running now then read no further, otherwise:

But wait...there's more!

Let's say that your GEOLOCATOR setting is now (or already was) set to "no" but you are still getting the error. Could it be that the "farcry_core" directory is not sitting at the same level as your project directory?

If this is the case then this could help you:

Open up /config/_serverSpecificVars.cfm in your project and change the value of _application.path.core_ to be an absolute path to the farcry_core directory on your server (or use expandPath()).

Something like:

``` javascript
application.path.core = expandPath('/farcry/farcry_core/');
```

or:

``` javascript
application.path.core = '/vhosts/farcry/farcry_core';
```

Run an updateapp and now you should be fine :)
