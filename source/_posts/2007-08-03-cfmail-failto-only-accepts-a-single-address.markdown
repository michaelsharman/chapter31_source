---
comments: true
date: 2007-08-03 01:50:50
layout: post
slug: cfmail-failto-only-accepts-a-single-address
title: <cfmail> failto only accepts a single address?
wordpress_id: 130
categories:
- ColdFusion
---

I'm getting some new production servers setup at the moment and I have a single ColdFusion application ready to go on one of them. 

Part of the setup was of course getting an SMTP server going, to test this I used a simple ColdFusion script with a cfmail tag. I was receiving the email successfully so all was good...until I tested sending emails as part of my application flow, no email :(

Basically I had something in my project which I didn't have in my test script, that being _multiple failto_ recipients.

``` javascript
<cfmail to="#to#" from="#from#" subject="my subject" server="#server#" failto="sample1@sample.com,sample2@sample.com">
message body
</cfmail>
```

Note the multiple 'failto' recipients: failto="sample1@sample.com,sample2@sample.com"

No emails were being sent with the above code and it wasn't until I removed the 2nd failto address that I started getting emails.

``` javascript
failto="sample1@sample.com"
```

This seems strange as I can have many to or from recipients, just not failto! The [docs](http://livedocs.adobe.com/coldfusion/7/htmldocs/wwhelp/wwhimpl/common/html/wwhelp.htm?context=ColdFusion_Documentation&file=00000297.htm) say:

> "Address to which mailing systems should send delivery failure notifications. Sets the mail envelope reverse-path value."

This doesn't seem to say either way to me whether you can only have 1 or multiple addresses here.

I tested this on both ColdFusion 7.0.2 and ColdFusion 8 Standard versions running on Windows Server SMTP.

Has anyone successfully sent email with <cfmail> with multiple failto's?
