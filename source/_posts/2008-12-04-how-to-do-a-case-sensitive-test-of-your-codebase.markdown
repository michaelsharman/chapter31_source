---
comments: true
date: 2008-12-04 23:26:41
layout: post
slug: how-to-do-a-case-sensitive-test-of-your-codebase
title: How to do a case-sensitive test of your codebase
wordpress_id: 604
categories:
- ColdFusion
- Farcry
---

Cross platform development and/or hosting makes for interesting times. Making sure that your entire codebase and configuration are compatible and work in different operating environments is obviously paramount to a successful project, particularly if you are "releasing" a product to the public either open source or commercially.

At [Lynch Consulting](http://www.lynchconsulting.com.au/) all of our production servers are Linux based but the development team spreads across Linux, Mac and the occasional Windows machine. We are looking at implementing the [FarCry 5.x framework](http://www.farcrycore.org/) for some new projects and I wanted to test the codebase in an environment as close as I could to our production setup (i.e. Linux). This is quite an important step because Linux based machines are case-sensitve, whereas Mac and Windows are not. I'm sure many people have been caught out by this where everything is fine until they deploy their codebase to a staging or production server, then they run into "file not found" errors due to referencing a filename with a different case.

If there is _ever_ a chance that your project may be hosted on a case-sensitive server like Linux (quite common if you use a shared host), or if you're releasing your codebase for public consumption where you obviously have no control over where it will be hosted (think blogCFC, Wordpress, FarCry etc) then you MUST test your codebase in a case-sensitive environment.

Now I used to be running Ubuntu (which is case-sensitive) but I'm currently on a Mac so my first thought was to create a Linux virtual machine using [VMWare Fusion](http://www.vmware.com/products/fusion/) to test on. While this would be invaluable ongoing, I didn't have the immediate time to setup and configure the VM, install ColdFusion and Apache and MySQL etc.

Luckily [Mark](http://www.lynchconsulting.com.au/blog) gave me a nice and easy solution, at least for Mac users :)

_**Note: Although the information below is Mac specific, I'm sure it is easily applied to Windows._

Essentially all you need is a thumbdrive (or any external harddive you may have lying around) which is big enough to hold your codebase. Likely your codebase will be under 50MB so I doubt space will be an issue. Thumbdrives are so cheap they literally give them away in cereal boxes, so you shouldn't have a problem finding one.

Now you need to format the drive to be case sensitive using Mac's "Disk Utility". Remember that formatting the drive will completely wipe any existing data. Make sure you backup any data you wish to keep on this volume! Complete the following steps:

  * Connect your thumbdrive to your system
  * Open "Disk Utility"
  * Select the volume (thumbdrive) you want to format from the list on the left hand side
  * Choose "Mac OS Extended (Case-sensitive, Journaled) from the "Volume Format" drop down
  * Enter a name for your volume (this can be anything, I named mine "farcry5" because that was the codebase I was testing
  * Click "Erase"

[![](/images/uploads/2008/12/diskutil_complete-300x260.png)](/images/uploads/2008/12/diskutil_complete.png)

That's it, in just a moment you'll have a case-sensitive thumbdrive you can use to test any and all codebases on!

All you need to do now is setup a new vhost (or change an existing one) in Apache to read files from your thumbdrive. The following is what you can do to have a local site called _farcry5.local_:


  * Copy/move the project codebase to your thumbdrive
  * Make an entry in your hosts file for _farcry5.local_
  * Created a new vhost in Apache with the "DocumentRoot" pointing to your thumbdrive (obviously this means that the site will only work when the drive is attached!)
  * Created your database and ColdFusion datasource/mapping as you would normally do for any other project

Here's a sample vhost for Apache, note the "DocumentRoot" points to my external Volume and I also added a "Directory" directive to grant permissions to that file location:

``` javascript
<VirtualHost *:80>
        ServerName farcry5.local
        ServerAdmin msharman@blahblahblah.com.au
        DocumentRoot /Volumes/farcry5/farcry/projects/mollio/www
        DirectoryIndex index.cfm
        Alias /webtop /Volumes/farcry5/farcry/core/webtop
        <Directory "/Volumes/farcry5/*">
                Options Indexes MultiViews
                AllowOverride None
                Order allow,deny
                Allow from all
        </Directory>
</VirtualHost>
```

Oh and for the curious, FarCry ran smoothly on my case-sensitive volume. No problems :)
