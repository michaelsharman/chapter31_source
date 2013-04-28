---
comments: true
date: 2008-03-03 00:32:45
layout: post
slug: always-add-the-cfimport-tag-when-using-cfimport-style-syntax
title: Always add the <cfimport> tag when using cfimport style syntax
wordpress_id: 199
categories:
- ColdFusion
---

Using [cfimport](http://livedocs.adobe.com/coldfusion/8/htmldocs/help.html?content=Tags_i_04.html) is a great way to add custom tag functionality to your applications. 

One thing you need to do of course is add a <cfimport> tag to _every template_ where you want to use the cfimport syntax. However, a couple of times when I've been creating new templates I've forgotten this rule and **not** added <cfimport> and subsequently gotten confused when my results aren't as expected.

I think the annoying thing is that ColdFusion does not throw an error in these situations, it just does nothing. So I can go to any template and add the following (without a <cfimport> on my template):

``` javascript
<tags:myNonExistentTag />
```

And the template runs without an error being thrown :(

So my reminder to myself before looking everywhere else is:

_"Michael...for the love of [Benji](http://www.benji.com/) please check that you've added <cfimport> before doing any other debugging!"_

Now my question (which I'm sure someone out there knows) is why does this not throw an  error (missing template/include/tag etc)?
