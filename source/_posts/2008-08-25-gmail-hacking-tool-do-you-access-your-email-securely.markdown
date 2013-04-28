---
comments: true
date: 2008-08-25 04:15:31
layout: post
slug: gmail-hacking-tool-do-you-access-your-email-securely
title: Gmail hacking tool - do you access your email securely?
wordpress_id: 391
categories:
- Misc
---

[Stumbled](http://www.stumbleupon.com/) upon [this article today](http://www.hungry-hackers.com/2008/08/gmail-account-hacking-tool.html) detailing a Gmail hacking tool presented at the Defcon hackers' conference in Las Vegas which will be released in a week or so.

While news about the insecurity of accessing personal information without using encryption is really nothing new it serves as a timely reminder to secure ALL information you access online including email (not just your bank account!). So much detail of our personal and professional lives are held in our (primary) email account, so much so that if it was compromised the fallout could be quite devastating. 

Accessing your email (any email, not just gmail) over http is obviously an insecure way which is outstandingly silly when you think about the information you store there.

For all Gmail users Google have introduced a new feature that allows users to permanently switch on SSL and use it for every action involving Gmail (not only authentication). **I strongly urge all gmail users to turn this on!**

How? Easy.

Click the "settings" link on the top right of your gmail window. Down the bottom of the default tab (General) you will see a _Browser Connection_ area. Click the_ Always use https_ radio option. Click save changes and reconnect to gmail. That's it!

[![](http://www.chapter31.com/wp-content/uploads/2008/08/gmail_settings-300x78.png)](http://www.chapter31.com/wp-content/uploads/2008/08/gmail_settings.png)

If you're a user of _Gmail Notifier_ you have to download a patch for Notifier to work with this setting. [Read more here](http://mail.google.com/support/bin/answer.py?answer=9429). Also errors in the Gmail mobile application may occur when https is turned on. [Read more here](http://mail.google.com/support/bin/answer.py?answer=100210).

One last thing to note, I have several gmail accounts and the https option wasn't available in all of them (particularly those using Google Apps). I imagine Google are rolling this out as we speak and all servers will be updated with this option soon.
