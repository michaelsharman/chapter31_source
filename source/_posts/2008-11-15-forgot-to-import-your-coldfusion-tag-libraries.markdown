---
comments: true
date: 2008-11-15 09:55:58
layout: post
slug: forgot-to-import-your-coldfusion-tag-libraries
title: Forgot to import your ColdFusion tag libraries?
wordpress_id: 504
categories:
- ColdFusion
- Farcry
---

I've been bitten by the "forgetting to add <cfimport>" when importing ColdFusion custom tags before. If you also have then you know what I mean and have shared the frustration...basically your custom tag does nothing but you get no error from ColdFusion, nada, zip! Depending on the scenario this can lead to some wasted hair pulling time!

The reason is of course that the syntax to import custom tags is perfectly valid XML which is ignored by ColdFusion server because you forgot to add <cfimport> tag. As such the output goes straight to the browser which treats it as markup...markup which it knows nothing about therefore it ignores it and you have no idea why your server side script isn't doing anything :(

Well today I saw a brilliantly simple solution by the newest [Daemonite](http://www.daemon.com.au/) [Rob Rohan](http://robrohan.com/).

From [Rob's post](http://groups.google.com/group/farcry-dev/browse_thread/thread/e6ada060cd04c91b?hl=en) on the farcry-dev mailing list:

> however, since the <skin:build> type tags will make it all the way to the browser, we can style the tag in the browser to alert the problem.
>
> I threw together a quick CSS file that you can include into your  project style sheet that will draw attention to the error. Just add this to your site style sheet:
>
> @import url('http://robrohan.com/farcrystuff/missingTag.css');
>
> Or download the css file and put it where you want. That will style any FarCry taglib with block, red so you can spot the mistake right off.

While this tip is fantastic and easily flexible for use in any ColdFusion project, keep in mind that in its current state it will only be of use for FarCry developers.

**Also note** that the custom tag syntax (e.g. <skin:buildlink>) will only make its way to the browser (as part of the html source to be parsed by the css) if it's inside <cfoutput> tags. If not then you'll have the same problem as before where you're tags are doing nothing, you're not getting an error from ColdFusion AND the css won't style anything because the xml tags aren't in the source code :(

Here is a screen shot of the css in action, as you can see it's hard to miss your mistake!

[![](http://www.chapter31.com/wp-content/uploads/2008/11/cfimport_css-300x92.jpg)](http://www.chapter31.com/wp-content/uploads/2008/11/cfimport_css.jpg)

Many thanks to Rob for the tip, here is the [link to his css](http://robrohan.com/farcrystuff/missingTag.css).
