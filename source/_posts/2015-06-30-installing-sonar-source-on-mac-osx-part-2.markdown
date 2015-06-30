---
layout: post
title: "Installing Sonar Source on Mac OSX – Part 2"
date: 2015-06-30 11:55
comments: true
categories: 
---
I had some notes [a while ago](/2013/05/02/installing-sonar-source-on-mac-osx/) for installing Sonar on a Mac. Recently I upgraded to a new Mac, OS X Yosemite (10.10.3), and found I needed to add a few steps to the install process.

 - You need the JDK to run Sonar
 - You need xdebug

## xdebug
To install xdebug run:

```
sudo pecl install xdebug
```

Then add to your `php.ini` the following (I just added it to the bottom), replace the version in the path with whichever you installed:

```
zend_extension=/usr/local/Cellar/php56/5.6.5/lib/php/extensions/no-debug-non-zts-20131226/xdebug.so
[xdebug]
xdebug.remote_enable=1
xdebug.remote_host=localhost
xdebug.remote_port=9000
```

To find which php.ini you're using (useful if you're using multiple versions of PHP via brew as I do) run:

```
php -i | grep php.ini
```

Then restart apache:

```
sudo apachectl restart
```

To check that the xdebug module is loaded:

```
php -m | grep xdebug
```

Then you should be set :)
