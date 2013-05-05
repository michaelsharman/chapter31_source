---
comments: true
date: 2012-06-05 14:52
layout: post
slug: apache-permission-denied-on-mac-osx-lion
title: "Apache permission denied on Mac OSX Lion"
wordpress_id: 1071
categories:
- Apache/IIS
- Mac
---

I've just upgraded to OSX Lion and had some trouble getting Apache to load a vhost. I kept getting a 403 permission denied error, but all my vhosts had the correct permission directives set.

Now by default your webserver document root is located in _/Library/WebServer/Documents_. I don't really like that for my local machine, I'd rather store web files under my user account. Just tends to make things easier.

However...if you're getting a 403 error, and something like this in your apache error log (/var/log/apache2/error_log):

	[Wed Jun 06 00:36:02 2012] [crit] [client 127.0.0.1] (13)Permission denied: /Users/[username]/Documents/.htaccess pcfg_openfile: unable to check htaccess file, ensure it is readable

Then check your directory permissions. The interesting thing is that I don't have an .htaccess file in my Documents directory. Even adding one did nothing, so I'm not quite sure why Apache was complaining about this.

The answer was simple, I didn't have "group" read or execute permissions on the _Documents_ directory, once I ran a chmod...everything started working ok :)

	chmod 755 Documents

The actual path to my site was _/Users/[username]/Documents/workspaces/sitename/htdocs_, but still...without the requisite permissions on the _Documents_ folder Apache couldn't access the vhost.
