---
comments: true
date: 2012-11-21 05:48:57
layout: post
slug: json-undefined-issues-on-ie8-and-ie9
title: JSON undefined issues on IE8 and IE9
wordpress_id: 1338
categories:
- Javascript
---

I had some issues today while testing in IE, where "JSON" was undefined. This was happening in IE8 and IE9, which is strange because the JSON functions are in those IE versions. The problem was IE's compatibility view, which triggers rendering in sort-of-IE7 mode. Classy. This was making JSON undefined ;(

The usual fix for this is to add a meta tag to force IE to use "edge" (or a specific version if you like):

```html
<meta http-equiv="X-UA-Compatible" content="IE=edge">
```

However we've had problems with this in the past where it doesn't always seem to work, especially on corporate networks and intranets. We now use an Apache header (and not use the meta tag at all) to achieve IE=edge. Here's the Apache header (to go in your .htaccess, note that you need mod_headers enabled for this to work):

```
Header set X-UA-Compatible "IE=edge"
```

### Update


You can use the Apache header above, combined with a check to only send the header for Internet Explorer

```
BrowserMatch MSIE ie
Header set X-UA-Compatible "IE=edge,chrome=1" env=ie
```

To be safe, if you can't use the Apache header above (which we found to always work as opposed to the meta tag) you might want to load [json2.js](https://github.com/douglascrockford/JSON-js/blob/master/json2.js) for IE8 and 9 because you can't control if a user is in compatibility view. If they are, then JSON will be undefined. The cool thing about json2 is that if it detects that JSON is already defined, it won't do anything at all. But it's there if the older browsers need it (IE7) or you somehow have visitors in compatibility view.

You can also load json2.js from a CDN:

```
http://cdnjs.cloudflare.com/ajax/libs/json2/20110223/json2.js
or minified
http://cdnjs.cloudflare.com/ajax/libs/json2/20110223/json2.min.js

or

http://ajax.cdnjs.com/ajax/libs/json2/20110223/json2.js
or minified
http://ajax.cdnjs.com/ajax/libs/json2/20110223/json2.min.js
```
