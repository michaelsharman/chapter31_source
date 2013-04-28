---
comments: true
date: 2006-11-29 04:13:41
layout: post
slug: will-cfmx8-have-cfcontinue
title: Will CFMX8 have cfcontinue?
wordpress_id: 81
categories:
- ColdFusion
---

There are a [couple of nice statements](http://livedocs.macromedia.com/coldfusion/7/htmldocs/wwhelp/wwhimpl/common/html/wwhelp.htm?context=ColdFusion_Documentation&file=00000977.htm) you can use to control processing within loops, namely

  * break
  * continue

Break is of course used to exit the current loop entirely and resume page processing from the first CF statement after the end loop tag. Lovely!

Continue has a subtle but handy difference, it ends the current loop iteration and 'continues' from the beginning of the next loop iteration. Very lovely :)

Now the problem is that there is no ColdFusion tag equivalent for continue, it's only accessible when in a &lt;cfscript&gt; block. As far as I know this is the only statement in the CFML language which is available in &lt;cfscript&gt; but not tags :(

For some scenarios this will be ok, especially for the cfscripters out there. But for people who don't like (for several reasons) &lt;cfscript&gt; then this is a limitation which I hope Adobe will address (among others!) in Scorpio.

And don't forget that the inherent limitations of &lt;cfscript&gt; (limited cftag support) means that sometimes you won't be able to do your logic in cfscript. For example you may want to use a &lt;cfsavecontent&gt; etc which you can't do in &lt;cfscript&gt;.

I know...I know that you can create your own functions [simulating tag functionality in cfscript](http://www.chapter31.com/2006/11/15/getting-tag-functionality-in-cfscript/) but all gets a little messy doesn't it?
