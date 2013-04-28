---
comments: true
date: 2007-12-18 04:27:08
layout: post
slug: mylyn-plugin-for-aptana
title: Mylyn plugin for Aptana
wordpress_id: 178
categories:
- Misc
---

I've been reading about [Mylyn](http://www.eclipse.org/mylyn/) for a little while now but haven't had the opportunity to install it. After reading [this post](http://adamflater.blogspot.com/2007/12/review-of-mylyn.html) today from Adam Flater I thought it was about time I gave it a go.

For those that don't know Mylyn:



> Mylyn is the Task-Focused UI for Eclipse that reduces information overload and makes multi-tasking easy. It does this by making tasks a first class part of Eclipse, and integrating rich and offline editing for repositories such as Bugzilla, Trac, and JIRA



Currently the [downloads](http://www.eclipse.org/mylyn/downloads/) on the site only seem to be for Eclipse 3.3/3.4 but as I'm using [Aptana](http://www.aptana.com/) (which bundles with Eclipse 3.2) I needed to use an earlier version of Mylyn.

I ended up finding the following URL and doing a 'Software Update' (help -> Software Updates -> Find and install -> Search for new features to install) in Eclipse:

http://download.eclipse.org/tools/mylyn/update/e3.2

There are 2 .jar which I needed to already have to successfully install the full Mylyn package (according to my Aptana), but as I don't develop in Java I could remove them from the installation by unchecking the checkboxes on the "Software Updates" page.




	
  * org.eclipse.jdt

	
  * org.eclipse.pde.ui



If you don't uncheck these then you won't be able to install.

After that just restart Aptana and you're done :)

For some reason the perspective is called "Planning" and not "Mylyn", in case you can't find it!

There are some cool tutorials floating around for Mylyn including [this one](http://www.ibm.com/developerworks/java/library/j-mylyn1/?ca=dgr-eclipse-1).


