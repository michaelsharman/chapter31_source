---
comments: true
date: 2007-09-28 01:27:24
layout: post
slug: jquery-and-swfobject-conflict
title: jQuery and SWFObject conflict
wordpress_id: 145
categories:
- Javascript
---

I experienced some strange behaviour today when building a site which was using jQuery and SWFObject. Our Flash files were loading ok and 99% of the javascript (using jQuery) was working fine.

The problem was found only in IE (sound familiar?) with the following code:

``` javascript
$(document).ready(function(){

	$('#submitButton').click(function(){
```

When the 'submitButton' was clicked, this function was not firing in IE. After some googling I found that there is a slight conflict with jQuery and SWFObject. I tested this and found the problem in jQuery 1.1.x and 1.2.1.

[I found the fix](http://blog.deconcept.com/swfobject/forum/discussion/540/jquery-and-swfobject-tips/) on the SWFObject forums which is basically using jQuery to load the .swf:

``` javascript
<script type="text/javascript">
	$(document).ready(function(){
		var so = new SWFObject("movie.swf", "mymovie", "400", "100%", "8", "#336699");
		so.addParam("quality", "low");
		so.addParam("wmode", "transparent");
		so.addParam("salign", "t");
		so.write("flashcontent");
	});
</script>
```

All good in all browsers :)
