---
comments: true
date: 2011-05-11 13:42:10
layout: post
slug: fancybox-for-wordpress-plugin-not-working
title: FancyBox for Wordpress plugin not working
wordpress_id: 910
categories:
- PHP
- Wordpress
---

I just spent some time figuring out why fancybox wasn't working tonight (image thumbnails were just linking to the large image...not loading the overlay as they should). It now seems obvious after the fact but as far as I can see it's NOT in the fancybox docs.

When you insert your gallery from the media section of a page in wp-admin, you HAVE to choose "Image File", not "Attachment Page". That's it!

Annoyingly if you set the option to "Image File", save and exit...the next time you edit the page Wordpress doesn't remember your decision and instead checks the "Attachment Page" radio option.

Hope this helps some people :)

![wordpress gallery settings](/images/uploads/2011/05/gallery_settings.jpg)
