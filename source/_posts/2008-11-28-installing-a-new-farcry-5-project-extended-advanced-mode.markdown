---
comments: true
date: 2008-11-28 04:07:07
layout: post
slug: installing-a-new-farcry-5-project-extended-advanced-mode
title: Installing a new FarCry 5 project - (Extended) Advanced Mode
wordpress_id: 551
categories:
- ColdFusion
- Farcry
---

There are several installation options for the latest version of [FarCry](http://www.farcrycore.org/) (5.0.2) which makes things nice and flexible for the framework to be used by different people in a variety of setups.

The [deployment configurations](http://docs.farcrycms.org/display/FCDEV50/Deployment+Configurations) page has some easy to follow instructions for installing in "Standalone" mode. This is really the best option if you are in a shared environment where you may not have control over ColdFusion mappings, but also if you are looking to get up and running quickly (maybe you just want to evaluate the product etc).

For [us](http://www.lynchconsulting.com.au/) we use FarCry for many applications, but in what would be considered an "Advanced" configuration mode (using FarCry 5+ parlance). Unfortunately it looks as though we may stray a little from the "Advanced" configuration which is the point of this tutorial.

The [current advanced](http://docs.farcrycms.org/display/FCDEV50/Deployment+Configurations) setup may be a little confusing to some. It doesn't really list full details for the advanced mode, but still seems to require you to have FarCry running in the following directory structure (note that in the example below 'farcry_5.0.2' can really be called anything and is not a strict naming requirement, I like to use this as it is explicit as to which version I'm using):

  * /farcry_5.0.2
    * /core
    * /plugins
      * /farcrycms
    * /projects
      * /myproject1
      * /myproject2
    * /skeletons
      * /mollio

This is nice and easy as it gives you the ability to have only 1 ColdFusion mapping (_/farcry_ pointing to your /farcry_5.0.2 directory) which all your projects can share (i.e. all projects would share the same farcry "core" and "plugins" codebase etc). It's this structure where our setup starts to differ.

We typically have _library_ directories to hold shared codebases and a _completely separate location for our vhosts_ (projects or "web sites"). This is the main difference and means we have something like the following:

  * /libs/farcry_5.0.2
    * /core
    * /plugins
      * /farcrycms
    * /projects _(note this is only needed for our installation, we won't be hosting projects from here)_
    * /skeletons _(note this is only needed for our installation, we won't need this in production)_
  * /vhosts
    * /myproject1

**Note:** _In actual fact our vhost setup is slightly different than what I've listed above, but this is easier to describe for the purposes of a tutorial._

This is an extremely flexible setup, but installing this way is a little tricky. I've done several installs for this configuration using the following steps:

### Installation - Preparation

Is is assumed that your farcry files, as mentioned above, are in the following location (this location is of course an example of what you may have on a linux based machine, you could obviously use a different path like C:/libs/farcry_5.0.2):

  * /libs/farcry_5.0.2

It is also assumed that you want to install your project into the following location:

  * /vhosts/myproject

*Note: **DO NOT** actually create this project folder yet, we will move the folder to this location _after the FarCry installation_ has completed.

Follow the following steps:

  1. Create a blank database. This can be called anything you want, typically something which mirrors your project name is a good idea
  2. Create a new datasource in ColdFusion Administrator and verify that it is connecting to your new database
  3. Create your project vhost (i.e. http://myproject.local) in your web server of choice (Apache or IIS etc)
    * Point the document root to '/vhosts/myproject/www' _(even though this actual location doesn't exist yet!)_
    * Make sure you have a '/webtop' alias (this replaces the old 'farcry' alias for those familiar with prior versions of FarCry) pointing to /libs/farcry_5.0.2/core/webtop
  4. Create an entry in your hosts file so myproject.local is in use on 127.0.0.1 (for production you'd obviously use different settings!)
  5. Create a '/farcry' ColdFusion mapping pointing to the directory which holds "core" (i.e. /libs/farcry_5.0.2)
  6. Create a '/farcry/projects/myproject' ColdFusion mapping
    * mapping: /farcry/projects/myproject
    * path: /vhosts/myproject
 
*Note: You could get away with having a single ColdFusion mapping of /farcry/projects if all your projects existed under the same directory (i.e. /vhosts), otherwise create a projects mapping per project (e.g. /farcry/projects/myproject). I find it's a good idea anyway to have a separate mapping per project.

### Installation - Installing

To install FarCry we visit the '/webtop/install' sub-directory off your project URL, e.g. http://myproject.local/webtop/install/. 

You may be wondering how this works as we haven't setup our physical project diretory yet, it works because of the web mapping (alias/virtual directory) of '/webtop' which points directly to /farcry_5.0.2/core/webtop/install.

Ok we're almost there! If everything is going well so far and the stars have aligned you'll see the FarCry installation screen.

[![](http://www.chapter31.com/wp-content/uploads/2008/11/screen-1-270x300.png)](http://www.chapter31.com/wp-content/uploads/2008/11/screen-1.png)

The important value on this page is "Project Folder Name". This should be "myproject" (i.e. what will become the physical name of your project directory, the same name as we added in our vhost).

The 2nd step allows you to enter your ColdFusion datasource and database type:

[![](http://www.chapter31.com/wp-content/uploads/2008/11/screen-2-300x196.png)](http://www.chapter31.com/wp-content/uploads/2008/11/screen-2.png)

On the 3rd step you must choose a skeleton to install from. Just use the default 'mollio':

[![](http://www.chapter31.com/wp-content/uploads/2008/11/screen-3-300x174.png)](http://www.chapter31.com/wp-content/uploads/2008/11/screen-3.png)

The 4th step is for plugins, for most cases leave the default which is probably 'farcry' and 'farcry greybox':

[![](http://www.chapter31.com/wp-content/uploads/2008/11/screen-4-282x300.png)](http://www.chapter31.com/wp-content/uploads/2008/11/screen-4.png)

The 5th step is important as the default is "Sub-Directory". You have to change this to the last option "Advanced Configuration":

[![](http://www.chapter31.com/wp-content/uploads/2008/11/screen-5-229x300.png)](http://www.chapter31.com/wp-content/uploads/2008/11/screen-5.png)

Step 6 is a confirmation step, nothing to do here except "INSTALL NOW":

[![](http://www.chapter31.com/wp-content/uploads/2008/11/screen-6-189x300.png)](http://www.chapter31.com/wp-content/uploads/2008/11/screen-6.png)

After hitting "INSTALL NOW" FarCry will go off and do its magic:

[![](http://www.chapter31.com/wp-content/uploads/2008/11/installing-300x100.png)](http://www.chapter31.com/wp-content/uploads/2008/11/installing.png)

When the installation is complete and you can see the final screen FarCry will have successfully installed your project under the /libs/farcry_5.0.2/projects/myproject directory. 

[![](http://www.chapter31.com/wp-content/uploads/2008/11/complete-300x265.png)](http://www.chapter31.com/wp-content/uploads/2008/11/complete.png)

****Important**** BEFORE you click the "VIEW SITE" or "LOGIN TO FARCY WEBTOP" buttons you must _move the project directory_ to where you've specified in your vhost (i.e. move 'myproject' from 'farcry_5.0.2/projects/myproject' to '/vhosts/myproject').

Once you've moved your project directory, you can click the "Visit Site" button and/or "Login to the FarCry Webtop" and you're ready to roll :)

Hopefully that helps people trying to install FarCry in a slightly different configuration.
