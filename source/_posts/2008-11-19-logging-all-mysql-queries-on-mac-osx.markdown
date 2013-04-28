---
comments: true
date: 2008-11-19 23:19:48
layout: post
slug: logging-all-mysql-queries-on-mac-osx
title: Logging all MySQL queries on Mac OSX
wordpress_id: 518
categories:
- Databases
---

[We've](http://www.lynchconsulting.com.au/go/blog) been doing some debugging of a 3rd party application recently where we had some possible performance concerns under a certain load and/or size of data in the database. What we wanted to know was exactly which queries (and how many) where hitting the database on a specific page request.

The simplest method was to turn on logging of all queries on the local MySQL database, this is turned off by default as like most debugging techniques it adds overhead. To do this I needed to make a small change in the config file and restart MySQL. However it seems that a Mac installation of MySQL doesn't create this config file by default which is a little confusing. 

Here are the steps taken to turn on logging of all queries:

**Create a "my.cnf" file (if it doesn't already exist)**

```
sudo touch /etc/my.cnf
```

**Add an entry to my.cnf telling MySQL where to write the log entries**

```
[mysqld]
log=/var/log/mysqld.log
```

**Create the log file**

```
sudo touch /var/log/mysqld.log
```

**Restart MySQL**

To view the logs simply open mysqld.log in your favourite editor, or you can tail it in the terminal:

```
tail -f /var/log/mysqld.log
```

This is a really handy way to see all the database traffic from your application. We also use MySQL Adminstrator to [view some real-time stats](http://www.chapter31.com/2008/02/21/using-mysql-administrator-to-view-real-time-stats/) in terms of the total number of queries being executed.

Remember once you've finished your debugging to turn logging off in my.cnf, I just comment it out (with a #) and restart MySQL:

``` javascript
#[mysqld]
#log=/var/log/mysqld.log
```

**Note:** An easy way to check if you do have a my.cnf file is to open up [MySQL Administrator](http://dev.mysql.com/downloads/gui-tools/5.0.html) and click the "Options" tab. If you get an alert saying "Configuration File not Found" then you know you need to go and create one!

[![](http://www.chapter31.com/wp-content/uploads/2008/11/picture-11-300x132.png)](http://www.chapter31.com/wp-content/uploads/2008/11/picture-11.png)

Once you have a my.cnf file you have access to the wide array of config options all from MySQL Administrator:

[![](http://www.chapter31.com/wp-content/uploads/2008/11/picture-3-300x204.png)](http://www.chapter31.com/wp-content/uploads/2008/11/picture-3.png)
