---
layout: post
title: "Installing Xdebug on Mac Mountain Lion (10.8.3)"
date: 2013-05-29 06:31
comments: true
categories:
- php
---
Even though I'm running Mountain Lion (10.8.3) which comes with Xdebug I couldn't get the PHP (5.4.14) local web server to register that Xdebug was actually installed and enabled.

My php.ini had the already installed Xdebug extension enabled:

```bash
zend_extension="/usr/lib/php/extensions/no-debug-non-zts-20090626/xdebug.so"
```

But whenever I inspected ```phpinfo()``` there wasn't any mention of Xdebug.

Luckily the [website has a wizard](http://xdebug.org/wizard.php) where you can paste the output of phpinfo(). From there you get detailed instructions on how to download, configure and make the latest version of Xdebug. It's pretty simple.

Essentially the steps are as follows:

1. Download [xdebug-2.2.3.tgz](http://xdebug.org/files/xdebug-2.2.3.tgz)
2. Unpack the downloaded file with ```tar -xvzf xdebug-2.2.3.tgz```
3. Run: ```cd xdebug-2.2.3```
4. Run: ```phpize``` (Any problems…[see the FAQ](http://xdebug.org/docs/faq#phpize))
5. Run: ```./configure```
6. Run: ```make```
7. Run: ```sudo mkdir -p /usr/lib/php/extensions/no-debug-non-zts-20100525```
7. Run: ```cp modules/xdebug.so /usr/lib/php/extensions/no-debug-non-zts-20100525```
8. Update your /etc/php.ini and uncomment/add the line
```zend_extension = /usr/lib/php/extensions/no-debug-non-zts-20100525/xdebug.so```
9. Restart the webserver

Now if you check the output of phpinfo() you should see Xdebug.

To make sure your debug output is being styled properly, make sure you have ```html_errors = On``` in php.ini (it defaults to _Off_).
