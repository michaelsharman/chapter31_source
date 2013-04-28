---
comments: true
date: 2008-05-22 07:30:43
layout: post
slug: setting-up-svnexternals-with-subclipse
title: Setting up svn:externals with subclipse
wordpress_id: 231
categories:
- SVN
---

Setting up "externals" with subversion can assist you when you want to load external libraries into an existing project.

You may have a JavaScript validation framework which you re-use amongst many projects. Of course you don't want to copy and paste the code into every project, what would happen then if you wanted to upgrade the codebase?

Using subclipse (in the Eclipse IDE) you can link a separate svn repository in the middle of your project by adding an _svn:externals_ property. Right click the parent directory you want to import the external repository into and choose "Team -> Set Property"

[![](/images/uploads/2008/05/cfeclipse-svnproperties-281x300.png)](/images/uploads/2008/05/cfeclipse-svnproperties.png)

Once you load the properties dialog window you need to add the following into the property field:

svn:externals

Then in the property content box add the following:

[yourLibraryName] -r98 [url to repo]

``` javascript
e.g. jquery-validation -r98 https://myhome.com/svn/repos/jquery-validation/trunk
```

[![](/images/uploads/2008/05/screenshot-set-a-svn-property-300x233.png)](/images/uploads/2008/05/screenshot-set-a-svn-property.png)

In the above example a directory called "jquery-validation" will be created with the contents of the repository located at "https://myhome.com/svn/repos/jquery-validation/trunk".

The "-r98" is the revision number of the external library you want to add. This is important because it means you can link to a snapshot of the library and not simply the trunk (which would mean you couldn't control the updates to the library).

Once that is done simply update your project and it will import your external codebase into your project.

Thanks to [Mark](http://www.lynchconsulting.com.au/) for showing me syntax for this one :)
