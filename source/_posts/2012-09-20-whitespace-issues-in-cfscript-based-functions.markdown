---
comments: true
date: 2012-09-20 07:28:08
layout: post
slug: whitespace-issues-in-cfscript-based-functions
title: Whitespace issues in cfscript based functions
wordpress_id: 1179
categories:
- ColdFusion
---

Ok now we all know that ColdFusion is kind of lame when it comes to whitespace management, unless you specifically have "whitespace management" turned on for your server.

I have a function that is used to build the _href_ value of a hyperlink. Nothing special there. However when I viewed the source of the page I was a little surprised to see a mountain of whitespace coming back from the function.

All I do is return a string from the function, I don't output any text from within the function.

Here it is:

``` javascript
public string function getFullPageURI(required string pagename)
{
  var pages = new lib.services.pages();
  var page = pages.getPageByNavURL(arguments.pagename, getId());
  return page.getPageURI();
}
```

And the link source:

![](/images/uploads/2012/09/Screen-shot-2012-09-20-at-5.24.32-PM.png)

Hmm, could that suck any more? Now what happens if I add output="false" (not particularly intuitive) to the end of the function, like this:

``` javascript
public string function getFullPageURI(required string pagename) output="false"
{
  var pages = new lib.services.pages();
  var page = pages.getPageByNavURL(arguments.pagename, getId());
  return page.getPageURI();
}
```

Now I get:

![](/images/uploads/2012/09/Screen-shot-2012-09-20-at-5.25.54-PM.png)

Sorry but that's just insane. cfscript should behave like cfsilent all the time unless you specify a writeOutput();

Hope this helps any other people out there. The lesson learned is that you can specify output="false" in a cfscript based function, but ONLY AFTER THE METHOD SIGNATAURE!

So if you did this:

``` javascript
public string output="false" function getFullPageURI(required string pagename)
```

If would fail. It needs to occur after the parens.
