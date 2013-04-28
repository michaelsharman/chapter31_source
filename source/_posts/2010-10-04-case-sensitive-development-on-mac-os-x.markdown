---
comments: true
date: 2010-10-04 22:36:56
layout: post
slug: case-sensitive-development-on-mac-os-x
title: Case sensitive development on Mac OS X
wordpress_id: 854
categories:
- Databases
- Mac
---

[At work](http://www.learnosity.com/) most of the developers are on Mac OS X but our staging and production environments are Linux based. This means development is case insensitive but stage/production is case sensitive. Although we have development guidelines/standards which dictate file and database naming conventions etc, human error can still occur (in terms of referencing files with a different "case"). We also use a few open source packages where we obviously don't have control over the naming of files or the references to database tables within those files.

Why is this an issue?

Linux is a case sensitive environment, so calling _myClass.cfc_ when the actual name of the file is _MyClass.cfc_ will fail on Linux, but will be ok during development as Mac OS X isn't case sensitive by default. The same would happen for MySQL table references in the codebase as tables are stored as files on the file system.

This has been an ongoing issue for us over the years particularly with open source libraries we may be using. So last week I decided to change my working environment to avoid finding these issues only once code had been deployed to staging. Overall the process was simple and really only took an hour or so (and most of that was waiting for files to copy across to the new location).

What I did was to create a case sensitive partition on the Mac and move my "Workspace" (project folders and files) and "MySQL" install to the new partition. Now any case sensitive issues will be found during development which is much preferable to finding them in staging/production :)

Setting up the new partition was done using [iPartition](http://www.coriolis-systems.com/iPartition.php) but you could just as easily use the Disk Utility. I setup a new 50GB jhfsx partition (HFS Journaled case sensitive). Once that was done I copied my _workspace_ folder across, then the _MySQL_ folder. Finally, create symlinks for both the workspace and mysql paths so I didn't run into any pathing issues in my apache conf etc.

Steps:
	
  1. Create your case sensitive _jhfsx (HFS Journaled case sensitive)_ partition. 50GB was fine for me; your requirements may vary. Remember that you need enough space for your MySQL databases and your project files (both current and future).
	
  2. Stop MySQL  
	> $ mysqladmin -uroot -p shutdown 
	
  3. Copy the MySQL and Workspaces folders to the new paritition (I named my new partition "Learnosity")  
	> $ sudo cp -rp /usr/local/mysql /Volumes/Learnosity  
	> $ sudo cp -rp /users/michaelsharman/Workspaces /Volumes/Learnosity
	
  4. symlink your previous paths to the new partition to save you having to remap apache confs and MySQL commands etc  
	> $ sudo ln -sf /Volumes/Learnosity/mysql /usr/local/mysql  
	> $ sudo ln -sf /Volumes/Learnosity/Workspaces /users/michaelsharman/Workspaces
	
  5. Set the MySQL _lower_case_table_names_ to 0 (same as it is on Linux by default) by adding this line in /etc/my.cnf  
	> lower_case_table_names = 0
	
If you run _$ mysqladmin -uroot -p variables_ you can see all global variables for your MySQL instance.
	
  6. Start MySQL  
	> $ sudo mysqld -uroot

That should be it, don't need to do anything else except change the location to your Workspaces folder in your editor of choice. 
