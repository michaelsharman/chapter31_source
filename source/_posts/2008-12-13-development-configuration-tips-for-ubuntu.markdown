---
comments: true
date: 2008-12-13 02:28:20
layout: post
slug: development-configuration-tips-for-ubuntu
title: Development configuration tips for Ubuntu
wordpress_id: 614
categories:
- Apache/IIS
- cfeclipse
- Databases
- php
- SVN
- Ubuntu
---

I just setup my machine at home with Ubuntu 8.10 (desktop) which was so easy think I saved hours off the time it would normally take with Windows. So much is already installed and ready to go and with apt (or the Synaptic package manager) it's super quick to download and install extra things things like MySQL, PHP, Apache, Java etc

Here are some notes which helped me out when configuring some of these development tools.

This assumes you've already installed Apache and MySQL, for notes on installing these I [found this article](http://ubuntuexperiment.wordpress.com/2008/11/10/installing-apache-php-mysql/) to be a great resource.

If you get this message when you restart Apache, "_Could not reliably determine the server’s fully qualified domain name, using 127.0.1.1 for ServerName_", edit /etc/apache2/conf.d/fqdn and add "ServerName localhost":

```
sudo nano /etc/apache2/conf.d/fqdn
```

**Load the mod_rewrite module for Apache**

```
sudo a2enmod rewrite
```

**Enable your Apache vhosts**

I already had all my vhosts defined in separate _.conf_ files on my windows box, so I copied them all into /etc/apache2/sites-available and setup symbolic links from my /etc/apache2/sites-enabled:

```
sudo ln -s /etc/apache2/sites-available/mysite.conf /etc/apache2/sites-enabled/mysite.conf
```

**Download and install PHP**

```
sudo apt-get install php5 libapache2-mod-php5
```

**PHP connector to MySQL**

```
sudo apt-get install libapache2-mod-auth-mysql php5-mysql
```

**Install MySQL Administrator**

```
sudo apt-get install mysql-admin
```

**Install subversion**

```
sudo apt-get install subversion
```

I am also using [Pulse](http://www.poweredbypulse.com/) to manage my [eclipse](http://www.eclipse.org/) development environment so I needed Java which I got from the Synaptic Package Manager (_sun-java6-bin_). Pulse is super cool, I used the standard cfeclipse profile with the addition of the PHP PDT (for developing in PHP).
