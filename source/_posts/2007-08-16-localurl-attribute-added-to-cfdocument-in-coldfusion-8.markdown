---
comments: true
date: 2007-08-16 09:00:12
layout: post
slug: localurl-attribute-added-to-cfdocument-in-coldfusion-8
title: '"localURL" attribute added to cfdocument in ColdFusion 8'
wordpress_id: 136
categories:
- ColdFusion
---

I was debugging a legacy app today which I'd just migrated to a new server running ColdFusion 8. A part of this application generates a PDF using <cfdocument>. As usual it was working fine on my development and staging environments...but not on production! Damn.

After a bit of fiddling I found a [related post](http://coldfused.blogspot.com/2005/11/missing-images-in-cfdocument.html#8131215934099422866) by [Rupesh Kumar](http://coldfused.blogspot.com/) where he mentions that you may have problems if ColdFusion is behind a firewall.

_CF server needs to send an HTTP request for the images. If the firewall prevents any outgoing connection from the server, CF will not be able to retrieve them_

Now I already had outbound HTTP access, but I couldn't call a site which was setup on the production machine from where I was browsing. Bugger, I was about to make a the necessary firewall changes when I looked at the [updated docs for CF8](http://livedocs.adobe.com/coldfusion/8/htmldocs/help.html?content=Tags_d-e_06.html) and noticed a new attribute called "localURL" which;

> Specifies whether to retrieve image files directly from the local drive:
>	
> * yes: ColdFusion retrieves image files directly from the local drive rather than by using HTTP, HTTPS, or proxy.
>	
> * no: ColdFusion uses HTTP, HTTPS, or proxy to retrieve image files even if the files are stored locally.

Nice!

Now <cfdocument> can simply call images from a local (relative) path instead of a full HTTP request as it did before.

I love CF8 :)

There are a few additions to this particular tag and you can [view them on the online docs](http://livedocs.adobe.com/coldfusion/8/htmldocs/help.html?content=Tags_d-e_06.html) which have had a much needed facelift.
