---
comments: true
date: 2006-08-01 03:27:29
layout: post
slug: swfobject
title: SWFObject
wordpress_id: 19
categories:
- (X)HTML
---

I've been using [SWFObject](http://blog.deconcept.com/swfobject/) for quite a while now and it amazes me that developers out there _still_ don't know about it, especially with all the news around Microsoft's EOLAS case late last year.

SWFObject is a tasty method for embedding Macromedia Flash content into your web pages and has (among others) the following functionality which alone are reason to be using it!

  * Flash detection
  * Search engine friendly
  * Validates to HTML and XHTML (as long as pages sent as text/html, not application/xhtml+xml.)
  * Degrades beautifully!

All you need to do is add your .js file in the <head>:

``` javascript
<script src="swfobject.js" type="text/javascript"></script>
```

Then use the following code:

``` javascript    
<div id="flashcontent">
  This text is replaced by the Flash movie.
</div>
```
    
``` javascript
<script type="text/javascript">
   var so = new SWFObject("movie.swf", "mymovie", "200", "100", "7", "#336699");
   so.write("flashcontent");
</script>
```

Note the &lt;div id="flashcontent"&gt;? Inside this div is where you'll store any HTML to be displayed if the user doesn't have flash. So you can have a link to Adobe to get the latest flash player, an alternate image or simply display HTML!

One problem I had is with users on low bandwidth seeing this HTML (non-flash) content before the Flash has a chance to load. To get around this I had the content within the non-flash div hidden (using CSS) then onload() make it visible.

[Download SWFObject here](http://blog.deconcept.com/swfobject/swfobject1-4.zip)
