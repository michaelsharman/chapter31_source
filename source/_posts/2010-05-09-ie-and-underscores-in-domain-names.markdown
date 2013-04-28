---
comments: true
date: 2010-05-09 23:09:27
layout: post
slug: ie-and-underscores-in-domain-names
title: IE and underscores in domain names
wordpress_id: 809
categories:
- ColdFusion
- Misc
---

Ok, a short warning to those who use underscores in their domain names. Underscores you say? Aren't they illegal characters in domain names? Why yes they are (but I think they're valid in sub-domains...not sure), but you may find yourself using them in development environments, particularly if you're doing a re-design. Think something like _http://mysite_v2.local/_ etc

Now, this works of course and everything is fine and dandy because your using your own hosts file to make it "legal"...except that Internet Explorer has this little quirk where it doesn't persist your session (cookie) information. So your app sets some session variables, refresh the page and they're gone. Sigh...

Why would IE even bother to do this? Who knows. But keep this in mind next time your pulling your hair out trying to figure out why session management isn't working for you in IE.

**Rule:**

Don't ever use underscores in domain names
