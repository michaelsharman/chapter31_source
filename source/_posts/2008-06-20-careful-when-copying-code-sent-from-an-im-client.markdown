---
comments: true
date: 2008-06-20 07:28:11
layout: post
slug: careful-when-copying-code-sent-from-an-im-client
title: Careful when sharing code sent from an IM client
wordpress_id: 252
categories:
- Apache/IIS
- Misc
---

Ok this is a warning to all those who get sent commands to use via IM.

Scenario:

I was helping someone setup their Apache config today, so I copied part of my VirtualHost block to them in an IM client. Then I went to their machine, grabbed the code and pasted it into their .conf file. Then Apache wouldn't start/restart.

After spending 10 minutes scratching my head and comparing code and files etc...I removed all carriage returns/whitespace from the code and woo hoo! Apache started happily.

Same thing happened to me last week where I put some SQL in an IM window, when the recipient got grabbed the query it wouldn't run saying there was a parse error. When he removed the whitespace it worked fine.

Moral of the story?

If you are using code sent to you via IM, when you paste it in remove all carriage returns and white space before using it. Then you can re-format it how you want. You just need to make sure there are no sneaky hidden characters in there.
