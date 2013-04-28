---
comments: true
date: 2006-11-16 02:55:20
layout: post
slug: commenting-templates-with-author-data
title: Commenting templates with author data
wordpress_id: 70
categories:
- ColdFusion
---

We all know that we should liberally comment our code to allow other developers (and yourself) to quickly and easily find out what a particular section of code does. But what about a comment block at the top of the page so anybody can (at a glance) determine template specific information?

Here is an example of what I use at the top of my pages, this is pretty standard but I know a lot of people don't do it.

``` ruby
<!---
   Name          : myFile.cfm
   Author        : Michael Sharman
   Created       : November 06, 2006
   Last Updated  : November 06, 2006
   History       : Initial release (mps 6/11/2006)
   Purpose       : A descriptive message
--->
```

I find the best thing is to either have this as part of a template for a new _.cfm_ file, or as a snippet for easy access. I actually use snippets with built-in and custom [snippet variables](http://www.chapter31.com/2006/10/22/cfeclipse-snippets/) for the comment options.

The snippet I use for cfeclipse is:

``` ruby
<!---
   Name          : $${CURRENTFILE}
   Author        : Michael Sharman
   Created       : $${MONTH} $${DAYOFMONTH}, $${YEAR}
   Last Updated  : $${MONTH} $${DAYOFMONTH}, $${YEAR}
   History       : Initial release (mps $${DAYOFMONTH}/$${MONTHNUMBER}/$${YEAR})
   Purpose       : $${Purpose:}
--->
```

Note the custom variable $${Purpose:} as well as the built-in snippet variables like $${CURRENTFILE}. You can read more about [snippet variables here](http://www.cfeclipse.org/go/documentation/user-docs/snippets).
