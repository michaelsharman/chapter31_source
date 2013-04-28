---
comments: true
date: 2007-08-13 23:28:38
layout: post
slug: storing-flash-coldfusion-and-sql-in-subversion
title: Storing Flash, ColdFusion and SQL in subversion
wordpress_id: 133
categories:
- ColdFusion
- SVN
---

Most developers who use Source Code Management are familiar with the fact that while you can have any directory you want in your 'repositories', it is recommended that you use the following directories as a base layout:




	
  * branches

	
  * tags

	
  * trunk



The trunk directory will hold the "main line" of development, a branches directory will have "branch-ing" development (perhaps a maintenance release?), and a tags directory holds a "snapshot" in time (essentially a read-only area) often used when deploying to a production server.

For example:

``` javascript
/myrepository/myproject
	/branches
	/tags
	/trunk
```

In the past when working in pure ColdFusion/HTML applications I've had my entire project sitting in the root of the "trunk" folder which makes it nice and easy as I can point my repository to "trunk" when updating or commiting.

But how does this work when you have Flash in your project? Essentially as a ColdFusion (or front end) developer I'm not interested in having ActionScript files or any .fla's/Flash assets in my project directory let alone on a production or staging server!

Some people like to have totally separate project repositories to hold all Flash elements, but I like to keep everything located in the same svn location. This seems more logical to me.

To this end I've included 3 sub-directories into my "trunk" directory:


	
  * flash

	
  * sql

	
  * www



Which gives me:

``` javascript
/myrepository/myproject
	/branches
	/tags
	/trunk
		/flash
		/sql
		/www
```

That way any Flash developers working on the project can commit their Flash assets to the "flash" directory, any database scripts can be stored in the "sql" directory and the entire _deployable_ project (including the exported .swf's) needed by the web server can live in the "www" directory.

With this setup each developer only has the files which they directly need on their workstation/development environment. It's also just as easy to "tag" the "www" directory for production deployments.
