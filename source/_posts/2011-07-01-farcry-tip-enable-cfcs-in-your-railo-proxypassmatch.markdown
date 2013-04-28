---
comments: true
date: 2011-07-01 04:04:20
layout: post
slug: farcry-tip-enable-cfcs-in-your-railo-proxypassmatch
title: FarCry Tip - Enable cfc's in your Railo ProxyPassMatch
wordpress_id: 981
categories:
- Farcry
- Railo
---

I ran into an issue today while working on a FarCry project, basically when I opened up the "Related Content" popup from the WYSIWYG editor it was blank. Nothing. Not the usual tabs for Images, File, Flash etc.

![](http://www.chapter31.com/wp-content/uploads/2011/07/relatedcontent.png)

The Railo logs were empty but Apache was throwing a strange error which I hadn't seen before: _"Couldn't initialize from remote server, JRun server(s) probably down."_. Funny as I'm not even using JRun!

Looking at the Chrome console I could see that opening the popup made a request directly to a cfc (/webtop/facade/tinyMCE.cfc?method=ajaxGetTemplateDropdowns) and returned the following error: "_Failed to load resource: the server responded with a status of 500 (Internal Server Error)_"

Eventually [Mark](http://www.learnosity.com/techblog/) pointed me in the right direction which was kind of obvious if I'd actually read the error properly! Our config for Apache -> Railo is for cfm's only...not cfc's. I don't really like the approach of calling cfc's directly at all, which is why it's not in our Apache -> Railo proxy. But it wasn't a big deal to add it for FarCry projects.

Here is the config we now use, note we now pass requests for cfm and cfc to Railo:

``` javascript
        <IfModule mod_proxy_ajp.c>
                <Proxy *>
                        Order deny,allow
                        Allow from all
                </Proxy>
                ProxyPassMatch ^/(.*\.cf[cm])$ ajp://127.0.0.1:8009/$1
                ProxyPassReverse  /  ajp://127.0.0.1:8009/
        </IfModule>
```

And of course now the related content popup works :)

![](http://www.chapter31.com/wp-content/uploads/2011/07/relatedcontent2.png)
