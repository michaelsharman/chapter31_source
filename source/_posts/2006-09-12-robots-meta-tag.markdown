---
comments: true
date: 2006-09-12 23:35:52
layout: post
slug: robots-meta-tag
title: Robots META tag
wordpress_id: 38
categories:
- (X)HTML
---

The Robots META tag is a way you can tell 'Robots' or 'Spiders' whether a page (or pages) on your site should be indexed, or if links on the page should be followed.

At this stage I don't believe all 'robots' out there support the use of this META tag, but some do so in the right situation it's worth using.

The most common examples for the robots META tags are:

``` javascript
    <meta content="index,follow" name="robots"></meta>
    <meta content="noindex,follow" name="robots"></meta>
    <meta content="index,nofollow" name="robots"></meta>
    <meta content="noindex,nofollow" name="robots"></meta>
    
    <meta content="noimageindex" name="robots"></meta>
    <meta content="noimageclick" name="robots"></meta></code>
```

"noimageindex" prevents the images on the page from being indexed but the text on the page can still be indexed.  

"noimageclick" prevents the use of links directly to the images, instead there will only be a link to the page. 

In addition to the robots META tag above, Google supports a GOOGLEBOT command. With it, you can tell Google that you do not want the page archived, but allow other search engines to do so. If you specify this command, Google will not save the page and the page will be unavailable via its cache.

``` javascript
    <meta content="noarchive" name="googlebot"></meta>
```

A formal syntax for the Robots META tag content is:

``` javascript
content    = all | none | directives
all        = "ALL"
none       = "NONE"
directives = directive ["," directives]
directive  = index | follow
index      = "INDEX" | "NOINDEX"
follow     = "FOLLOW" | "NOFOLLOW"
```
