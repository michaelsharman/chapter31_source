---
comments: true
date: 2012-09-26 22:04:33
layout: post
slug: adding-a-mail-server-to-a-railo-instance
title: Adding a mail server to a Railo instance
wordpress_id: 1199
categories:
- ColdFusion
- Railo
---

We turn off all GUI based administration consoles in our production environments, this includes Railo's admin area.

If you need to configure your Railo instance to include an SMTP server, you can add a line in WEB-INF/railo/railo-web.xml.cfm

Open up that file (probably as sudo), look for the <mail> tag (which is empty by default) and insert the following:

```
<server port="25" smtp="127.0.0.1" />
```

The "smtp" attribute should be the IP address of your SMTP server. Also, if your SMTP server requires a username and password, you can add them like so:

```
<server port="25" smtp="127.0.0.1" username="myusername" password="mypassword" />
```

At the end of the day your config entry should look something like:

```
<mail log="{railo-web}/logs/mail.log">
  <server port="25" smtp="127.0.0.1"/>
</mail> 
```

## Update - January 2013

I was googling something else when I came across a post on the Railo groups indicating that by default only _error_ logging is enabled for mail. This means that in the event of an error (where Railo is unable to send the mail) you can check the WEB-INF/railo/logs/mail.log for information.

However, you can turn on _info_ logging as well to presumably track whenever mail is actually sent. This can be done in either railo-server.xml or railo-web.xml. Eg:

```
<mail log-level="info" log="{railo-web}/logs/mail.log">
  <server port="25" smtp="127.0.0.1"/>
</mail> 
```

This is really handy for us as we disallow access to the Railo admin GUI.
