---
comments: true
date: 2009-05-28 02:26:58
layout: post
slug: setting-a-label-property-tip-for-farcry-5
title: Setting a "Label" property tip for FarCry 5
wordpress_id: 627
categories:
- ColdFusion
- Farcry
---

Quick tip which might fix some problems for people as it did for me today.

I had a custom object for a calendar where the main title was "EventTitle". Now as you may know [FarCry](http://farcrycms.org/) uses the "label" and "title" property from types.cfc by default. 

As I wasn't using this default property my _label_ value was "incomplete" in the database. This didn't really bother me as it would never be seen, however it was preventing my content object from being approved. I wasn't getting an error message when attempting to publish, it's just that the row would remain in draft.

I figured if I could add a value to the _label_ property I would be able to approve the object. A quick search on the [docs](http://docs.farcrycms.org/) site gave me a nice little attribute to add to your type cfproperty of _[bLabel](http://docs.farcrycms.org/display/FCDEV40/Form+Tool+Property+Metadata)="true/false"_. What this does is maps the property to the types.label property.

This is a nice little solution, now the "label" property can be populated by any property I choose (i.e. EventTitle) and I'm not restricted to name my propery "label" or "title" etc.

Btw this also fixed my publishing issue.

This works as of FarCry 5.1.4
