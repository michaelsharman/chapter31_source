---
comments: true
date: 2008-08-09 03:13:26
layout: post
slug: adding-subscriptions-to-comments-for-your-wordpress-theme
title: Adding subscriptions to comments for your Wordpress theme
wordpress_id: 332
categories:
- PHP
---

If you are using a Wordpress theme which doesn't support users subscribing to comments (crazy I know) you can add the plugin [Subscribe to comments](http://txfx.net/code/wordpress/subscribe-to-comments/) which is currently at version 2.1

A summary of the features this plugin provides:
	
  * Rudimentary security
  * Recognition of subscription status
  * Themeable subscription manager
  * Ability to let users change notification e-mail address
  * Easy integration into comments form
  * Subscription without leaving a comment
  * Customization
  * Internationalization

Installation is as easy as you'd expect from a Wordpress plugin. Simply upload 1 php file into the plugins directory, then "activate" the plugin in the admin area.

Then all you need to do is add a line of code to your theme _comments.php_ where you want the checkbox to go and you're ready!

``` javascript
<?php show_subscription_checkbox(); ?>
```

[Read more](http://txfx.net/code/wordpress/subscribe-to-comments/) and download the plugin here.
