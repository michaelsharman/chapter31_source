---
comments: true
date: 2008-03-24 04:59:51
layout: post
slug: installing-php5-with-mysql-extensions
title: Installing PHP5 with MySQL extensions
wordpress_id: 217
categories:
- php
---

I'm generally a ColdFusion programmer but occasionally I need to install PHP for one reason or another, the last couple of times has been to use [Wordpress](http://wordpress.org/).

I remember the last time I did this (maybe 6 months ago) I had problems with connecting to MySQL because [PHP 5 no longer bundles MySQL client libraries](http://www.php.net/manual/en/faq.databases.php#faq.databases.mysql.php5) for the following reasons:

  * Most systems these days already have the client library installed.
  * Given the above, having multiple versions of the library can get messy. For example, if you link mod_auth_mysql against one version and PHP against another, and then enable both in Apache, you get a nice fat crash. Also, the bundled library didn't always play well with the installed server version. The most obvious symptom of this being disagreement over where to find the mysql.socket Unix domain socket file.
  * Maintenance was somewhat lax and it was falling further and further behind the released version.
  * Future versions of the library are under the GPL and thus we don't have an upgrade path since we cannot bundle a GPL'ed library in a BSD/Apache-style licensed project. A clean break in PHP 5 seemed like the best option.

Ok fine, no problems. There are even some fairly easy to find instructions for Windows users (which I am at home):

  * Windows users may enable the extension php_mysql.dll inside php.ini
  * Also, be sure libmysql.dll is available to the systems PATH.

No prob, you can even put libmysql.dll in the C:/windows/ directory which isn't a best practice, but is easy!

So I fire up my Wordpress site and get the following error:

_"Your PHP installation appears to be missing the MySQL which is required for WordPress."_

A few rounds in Google told me I needed to uncomment some files in php.ini:

  * extension=php_mysql.dll
  * extension=php_mysqli.dll

Hmmm....I don't have those files nor do I have those lines in my php.ini file, that's strange.

Ok...so what was my problem? When installing I didn't select any extra 'extensions' for MySQL. The installer actually makes it nice and simple, so this is just a note for next time I need to do this to be careful and choose the extensions I need when installing.

Luckily you can just run the installer again to change the configuration of your installation, including adding necessary extensions :)
