---
comments: true
date: 2008-08-16 08:15:50
layout: post
slug: farcry-5-running-on-railo-3-windows
title: FarCry 5 running on Railo 3 (Windows)
wordpress_id: 352
categories:
- ColdFusion
- Farcry
- Railo
---

The CFML market is hotting up with [Railo](http://www.railo-technologies.com/) going open source (in version 3.1) and joining forces with [JBoss](http://www.jboss.org/railo/) for an end of 2008 release! With that in mind I figured it was time to check out Railo with the latest version of FarCry.

My environment:
	
  * Windows XP
  * Railo 3.0.0.003
  * <del>FarCry 5.0.0 (although 5.0.2 is out, the latest distro from the site offers only 5.0.0)</del>
  * FarCry 5.0.2
  * MySQL 5

I'm using the "express" version of Railo which bundles with Jetty Application Server, so no need for any apache configurations as everything runs off port 8888. This is not how you would have things running in a production environment of course, but is great for evaluation purposes as you can just put the Railo files anywhere you want with no actual installation required.

I already had MySQL installed, so I got a [fresh zip of FarCry 5.0.2](http://www.farcrycore.org/go/code-branch/5-0-2) and the latest [release candidate for Railo](http://www.railo-technologies.com/en/index.cfm?treeID=361).

I unpacked Railo into D:/ (this could be anywhere on your system) then unpacked FarCry into the "webroot" folder of Railo following the [standard FarCry 5 installation instructions](http://docs.farcrycms.org/display/FCDEV50/FarCry+Installation).

Next was starting Railo, on Windows open a command prompt (cmd) and run the start.bat file which is in the Railo root directory:

``` javascript
start.bat
```

Now that Railo is running I needed to create a datasource to point to a fresh database created for my new FarCry app. To do this visit the admin area of Railo at http://localhost:8888/railo-context/. 

The first time you do this you'll be asked to enter a password which will be used in the future to access the admin area.

[![](http://www.chapter31.com/wp-content/uploads/2008/08/newpassword2-300x173.png)](http://www.chapter31.com/wp-content/uploads/2008/08/newpassword2.png)

Create and verify a datasource just as you would in ColdFusion Administrator and you're ready for the FarCry install.

To install FarCry visit http://localhost:8888/farcry/ and follow the instructions. As mentioned above you first have to create an empty database for your FarCry site.

[![](http://www.chapter31.com/wp-content/uploads/2008/08/installingfarcry2-300x267.png)](http://www.chapter31.com/wp-content/uploads/2008/08/installingfarcry2.png)

After FarCry installed (without a hitch!) it was time to look around my new site to see if everything is working as normal (well, as it would normally under ColdFusion). Upon initial inspection everything is working fine with just a few exceptions (pun intended!). 

Firstly it seems there is a reserved word conflict with the FarCry core codebase and Railo which prevented me from viewing one of the pages (support) in the mollio skeleton site FarCry installs by default (and also some pages from the webtop).

Railo threw the following error:

_invalid argument for function query, only array as value are allowed_

The code in question was calling a FarCry method called _query()_. I renamed the method to _execQuery()_ and updated the calls to it and everything started working as expected.

I also added this as a [FarCry bug](http://bugs.farcrycms.org/browse/FC-1459) so hopefully it will be resolved by the [Daemon](http://www.daemon.com.au/) guys in the next FarCry release.

There were a couple of other small issues (with containers/publishing rules and a permission problem in the webtop) which I've contacted Daemon about. Hopefully they will be resolved quickly.

All in all it looks as though FarCry is a success on Railo which great news!

Although I was only looking at the express version of Railo, I was extremely impressed with just how simple everything was. Comparing CF8 and Railo (browsing the FarCry admin console), Railo looks a lot faster to me. Of course I did no actual load/performance testing. But it was interesting that I noticed the speed difference by simply browsing.

I'm looking forward to playing with it further, particularly when 3.1 comes out :)
