---
comments: true
date: 2006-10-20 04:37:51
layout: post
slug: building-accessible-tables
title: Building accessible tables
wordpress_id: 60
categories:
- (X)HTML
---

These days all the rage is building web pages without tables, but has this gone too far for a lot of developers?

I'm of the opinion that HTML tables shouldn't be used for layout purposes and I think most would agree, if you don't please let me know because I'd love to hear the reasoning :)

There is however a quite valid and obvious for using tables, that being where the content contains tabular data. In this instance tables just make sense, not to mention all the tags and attributes (of which there are quite a few) that tables provide to help users using assistive technologies like screen readers. Sure I can use nested unordered lists and I can even throw in 'title' attributes to describe my content. But I can't do things that tables can do like:

  * caption
  * th
  * thead, tbody and tfooter
  * summary
  * colspan and rowspan
  * scope
  * abbr

For further information see the [fantastic article](http://www.456bereastreet.com/archive/200410/bring_on_the_tables/) on [456bereastreet](http://www.456bereastreet.com/) which is quite old now but still stands up.

Also check out this [accessible table builder](http://accessify.com/tools-and-wizards/accessibility-tools/table-builder/) to quickly and easily generate accessible table code!
