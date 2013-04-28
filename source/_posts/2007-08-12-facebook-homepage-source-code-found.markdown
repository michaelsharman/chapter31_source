---
comments: true
date: 2007-08-12 22:45:05
layout: post
slug: facebook-homepage-source-code-found
title: Facebook homepage source code found!
wordpress_id: 132
categories:
- ColdFusion
---

Hmm, seems a problem with the .htaccess file made the source for [Facebooks](http://www.facebook.com/) homepage available.

[Nik Cubrilovic](http://www.nik.com.au/archives/2007/08/11/learning-from-facebook-preventing-php-leakage/) offers an explanation from a technical standpoint:

> PHP has always been notorious for sometimes not processing requests poorly and sending back the source code for pages to the client. Because of the way mod_php works with apache, if mod_php fails in intercepting and processing the request, then apache will just serve it back to the client as an ordinary text file.

He also goes on to suggest good security practices with PHP/Apache which is well worth a read for any developer.

[Click here](http://facebooksecrets.blogspot.com/2007/08/facebook-home-page-code.html) to see the actual code and more Facebook 'secrets'
