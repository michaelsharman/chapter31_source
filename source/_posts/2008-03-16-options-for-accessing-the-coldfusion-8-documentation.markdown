---
comments: true
date: 2008-03-16 22:46:00
layout: post
slug: options-for-accessing-the-coldfusion-8-documentation
title: Options for accessing the ColdFusion 8 documentation
wordpress_id: 206
categories:
- ColdFusion
---

ColdFusion developers have quite a few options when wanting to access full help documentation for ColdFusion 8 including:
	
  * [Livedocs](http://livedocs.adobe.com/coldfusion/8/)
  * [CFQuickdocs](http://www.cfquickdocs.com/)
  * [ColdFusionDocs.com](http://coldfusiondocs.com/app/#/abs/)
  * [CFDocs on AIR](http://blog.brianflove.com/articles/2008/02/19/cfdocs-on-air)
  * [CFML Reference Docs for the iPod](http://blogs.adobe.com/flexdoc/2007/08/cfml_reference_docs_for_the_ip_1.html)
  * [ColdFusion 8 Help Files for Eclipse](http://www.adobe.com/support/coldfusion/downloads.html#cfdevtools)

The 'source' of all these is the same (Livedocs) so which do you go with? Funnily enough the offical Adobe Livedocs is probably the last one I'd choose simply because it's a little slow :)

CFQuickdocs was one of the first non-adobe help sites that I became aware of (and was for CF7 I believe). It's still great and uses Ajax to speed things up but the newer ColdFusionDocs.com is even quicker with a cool Flex interface!

Of course CFDocs on AIR is fantastic (can't beat running locally!) unless you're working on Linux then you need to wait for Adobe to release AIR for Linux :(

Today I added the [help docs](http://livedocs.adobe.com/coldfusion/8/com.adobe.coldfusion_help_8_1.0.1.jar) for Eclipse from the [cfdevtools page](http://www.adobe.com/support/coldfusion/downloads.html#cfdevtools). All you need to do is copy the .jar file into your Flex Builder or Eclipse installation's plugins folder then restart Eclipse and you're good to go.

This is great to have the ColdFusion docs locally right at your fingertips open in a separate Eclipse window (click "Help -> Dynamic Help"). Another reason why Eclipse is the premier IDE for ColdFusion developers.
