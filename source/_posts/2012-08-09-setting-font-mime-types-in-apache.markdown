---
comments: true
date: 2012-08-09 23:40
layout: post
slug: setting-font-mime-types-in-apache
title: "Setting font MIME types in apache"
wordpress_id: 1153
categories:
- Apache/IIS
---

If your website is using custom fonts, you may see this line in your Chrome console:


> Resource interpreted as Font but transferred with MIME type application/octet-stream


This is really kinda annoying, if you want to get rid of that warning then add the following directives to your apache conf/.htaccess:

``` javascript
AddType application/vnd.ms-fontobject eot
AddType font/opentype otf
AddType font/truetype ttf
AddType application/x-font-woff .woff
```

[See here for more information.](http://www.jbarker.com/blog/2011/resource-interpreted-font-transferred-mime-type)
