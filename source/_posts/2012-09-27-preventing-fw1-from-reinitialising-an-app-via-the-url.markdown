---
comments: true
date: 2012-09-27 12:57:23
layout: post
slug: preventing-fw1-from-reinitialising-an-app-via-the-url
title: Preventing FW/1 from reinitialising an app via the URL
wordpress_id: 1209
categories:
- ColdFusion
tags:
- FW/1
---

One of the things that [FW/1](https://github.com/seancorfield/fw1) allows you to do is configure a reload "key" and "password" which you can use to reinit your application via URL.

So inside your Application.cfc you might have:

```
variables.framework = {
  reload = 'reinit',
  password = "mysecretkey"
  …
}
```

So you can reinit your application (flush the application scope by re-running onApplicationStart()) by calling something like:

```
http://www.example.com/?reinit=mysecretkey
```

The "reload" and "password" properties can be changed to whatever you want for securities sake.

We wanted a little extra security, that being the option to never allow an application to be reinitialised via a URL. Typically we want this in a production environment only. What you lose in flexibility, being able to reinit the application quickly and easily after a release/deployment, you (arguably) gain in security. Perhaps this is being a little over-cautious, but we like to be better safe than sorry, especially when reducing possible DOS vectors. Also it makes life easier when dealing with system administrators and/or security audits :)

To achieve this we simply added a new property to the _variables.framework_ structure inside Application.cfc, called "disableReloadApplication", which accepts true|false. If _true_, then even if you know the "reload" and "password" values…the application cannot be reinitialised via the URL. So the following would NOT reinit the app:

```
http://www.example.com/?reinit=mysecretkey
```

A few extra lines were needed inside framework.cfc to make this happen:

setupFrameworkDefaults()

```
…
if ( !structKeyExists(variables.framework, 'disableReloadApplication') ) {
  variables.framework.disableReloadApplication = false;
}
…
```

and isFrameworkReloadRequest()

```
return ( !variables.framework.disableReloadApplication &&
  ((isDefined( 'URL' ) &&
  structKeyExists( URL, variables.framework.reload ) &&
  URL[ variables.framework.reload ] == variables.framework.password ) ||
  variables.framework.reloadApplicationOnEveryRequest));
```

Although we could have extended framework.cfc with our own file (and just defined these 2 methods), we just altered the original framework.cfc as we store a local copy in source control that all our projects can draw from.

[Here is the fork of FW/1](https://github.com/michaelsharman/fw1) (really just a change to framework.cfc), version 2.0.1.
