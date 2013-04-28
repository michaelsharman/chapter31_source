---
comments: true
date: 2006-09-10 23:29:28
layout: post
slug: cfcomponent-should-you-use-the-name-attribute
title: cfcomponent - should you use the name="" attribute?
wordpress_id: 36
categories:
- ColdFusion
---

Charlie Arehart has an [interesting post here](http://carehart.org/blog/client/index.cfm/2006/9/9/Argument_against_CFCOMPONENT_NAME) on whether you should use the **name** attribute in cfcomponent.

Apparently there is no 'name' attrbribute in the cfdocs for &lt;cfcomponent&gt;, remember you can use displayName or hint for component introspection. And if you want to take advantage of getMetaData()? Well there already is a 'name' attribute as default in ColdFusionMX! The thing is that's it's for internal use and even if you do use 'name', the value you specify won't appear in getMetaData(), the internal ColdFusion value will instead!

Most interesting that IDE's like cfeclipse have 'name' as part of the code completion, as Charlie says...it'll be interesting to see how the community resonds to this one :)

Note that it is actually legal to add as many non-official attributes to &lt;cfcomponent&gt; and &lt;cffunction&gt; for your own documentation (when using component introspection). Very nice!
