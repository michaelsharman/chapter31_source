---
comments: true
date: 2008-11-10 03:16:54
layout: post
slug: invalid-serial-number-when-upgrading-to-flex-builder-3-pro
title: '"Invalid serial number" when upgrading to Flex Builder 3 Pro'
wordpress_id: 491
categories:
- Flex
---

Ok this was annoying...I had an older trial version of the standalone Flex Builder 3 on my system (Mac 10.5) and wanted to activate it with a new serial for FB3 Professional.

Whenever I entered the serial in "Help -> Manage Flex Licenses" I kept getting a message saying "Invalid serial number" even though it was a brand new serial. Damn.

[Mark](http://www.lynchconsulting.com.au/go/blog) gave me the original hint to remove the _license.properties_ file under _/Library/Application Support/Adobe/Flex_ but FB wasn't re-creating it when I entered my serial on startup. I needed to create the file manually and enter my serial number. These steps got me going:
	
  * cd /Library/Application Support/Adobe/Flex
  * sudo touch license.properties (create the file)
  * sudo nano license.properties (edit the file)
  * enter the following "flexbuilder3=xxxx-xxxx-xxxx-xxxx-xxxx-xxxx" (where xxx etc is your actual serial)
  * restart Flex Builder

Also thanks to [62five.com](http://62five.com/blog/?p=26) for the post.
