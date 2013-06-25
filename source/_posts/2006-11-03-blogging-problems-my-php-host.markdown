---
comments: true
date: 2006-11-03 06:39:14
layout: post
slug: blogging-problems-my-php-host
title: Blogging problems with my (PHP) host
wordpress_id: 65
categories:
- php
---

Last week my blog software decided to stop working. I couldn't create or edit any posts, bugger.

It wasn't the fault of the blog software however, it seems the host added some new 'forbidden' words to their list and of course I wasn't notified.

Basically every time I wanted to create or edit a post I was redirected to the host's home page! Specifically it looks like the line in question which was causing me headaches was:

    $draft->post_title = sprintf(__('Post # %s'), $draft->ID);

I don't have time at the moment to set a workaround so I've just commented it out, and as it's only for display in my administration area this will be fine for now.

Ah the things that waste what little time you have in a day :(
