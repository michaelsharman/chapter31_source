---
comments: true
date: 2010-05-27 06:30:30
layout: post
slug: cfml-issue-on-railo-with-the-accelerate-cache-tag
title: CFML issue on Railo with the accelerate cache tag
wordpress_id: 827
categories:
- ColdFusion
- Railo
---

We've been using [Brandon Purcell's](http://www.bpurcell.org) excellent accelerate custom cache tag for a few projects. I had an issue today while testing a new app which is about to go live. It seemed that whatever I did nothing would be cached.

Upon investigation it seemed that the caching worked fine on Adobe ColdFusion but not on Railo. A quick look at the codebase brought me to this line:

``` javascript
<cfif IsDefined("application.accelerator.#scriptName#.#primarykey#.#secondaryKey#")
```

Basically this was always returning false, even when I knew the key was in the application scope. I changed it to the following:

``` javascript
<cfif structKeyExists(application,"accelerator[scriptName][primarykey][secondaryKey]")
```

Success! (Thanks AJ for the final structKeyExists)

Just a quick fyi to anyone else who might be using this custom tag on Railo.
