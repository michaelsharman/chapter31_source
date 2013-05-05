---
comments: true
date: 2006-12-07 23:05
layout: post
slug: including-js-files-from-within-js-files
title: "Including js files from within js files"
wordpress_id: 87
categories:
- (X)HTML
- Javascript
---

I'm working on an application which stores a lot of data in the application scope. Part of the data stored is a config CFC that has a method which loads 'external assets' (javascript and css files etc) into the <head> of the html document via [<cfhtmlhead>](http://livedocs.macromedia.com/coldfusion/7/htmldocs/wwhelp/wwhimpl/common/html/wwhelp.htm?context=ColdFusion_Documentation&file=00000271.htm). I love that tag :)




My part in this application development is limited to a particular section only, but there was already a lot of external assets present in the header and things were getting very messy. I was looking for a way to simulate <cfinclude> but from within a .js file so I could clean up my output a bit, fortunately there is a way!




I now have a master js file to add to the <head> section of my document:


``` javascript
<script src="js/master.js" type="text/javascript"></script>
```


From within this master.js file I can 'include' any js files I want.




master.js


``` javascript
//this function includes all necessary js files for the application
function include(file)
{

  var script  = document.createElement('script');
  script.src  = file;
  script.type = 'text/javascript';
  script.defer = true;

  document.getElementsByTagName('head').item(0).appendChild(script);

}

/* include any js files here */
include('js/myFile1.js');
include('js/myFile2.js');
```


The above code includes myFile1.js and myFile2.js, both of which are located in the relative 'js/' directory.




Not only does this clean up my output, but as my config file was stored in application scope every time I wanted to add/remove an asset from my application I need to refresh the scope...annoying. But now I am happy :)




