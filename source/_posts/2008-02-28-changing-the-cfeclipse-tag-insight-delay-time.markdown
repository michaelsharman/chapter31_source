---
comments: true
date: 2008-02-28 00:56:02
layout: post
slug: changing-the-cfeclipse-tag-insight-delay-time
title: Changing the cfeclipse 'tag insight' delay time
wordpress_id: 193
categories:
- cfeclipse
---

Having 'tag insight' is a great part of any IDE, one which almost every developer takes advantage of irrespective of which editor they use. Tag insight of course being when your IDE provides information (attribute or return information etc) about the tag or function you are currently typing.

Normally when writing a function or tag like <cfhttp>, when you hit the space bar and wait a second a little popup appears detailing exactly what you can do with this tag.

[![cfhttp tag insight](/images/uploads/2008/02/cfhttp_insight.thumbnail.jpg)](/images/uploads/2008/02/cfhttp_insight.jpg)

Now this is all lovely except I find that the _default time_ it takes for this to appear (which is 500ms in cfeclipse) is just a little too short for me so that it is more annoying than helpful as it constantly appears when I don't want it to (like after pasting some code it pops up to display all local variables etc).

[![tag insight](/images/uploads/2008/02/taginsight.thumbnail.jpg)](/images/uploads/2008/02/taginsight.jpg)

Luckily it's a snap to change these little things :)

Window -> Preferences -> CFEclipse -> Editor

[![cfeclipse preferences](/images/uploads/2008/02/preferences.thumbnail.jpg)](/images/uploads/2008/02/preferences.jpg)

Then change the _Insight Delay_ value. I now have 1500 which is working nicely.

Don't forget if this is too slow for you (when you actually DO want the tag insight and you find yourself waiting for it) then you can simply hit ctrl + space to launch the tag insight immediately.
