---
comments: true
date: 2012-05-24 04:14:47
layout: post
slug: strange-linefeed-characters-appearing-on-mac
title: Strange linefeed characters appearing on Mac
wordpress_id: 1058
categories:
- Mac
---

Had a funny situation today where I was emailed a bash program file, but simply downloading the attachment from gmail (in Chrome) added a linefeed (\r) to the file.

This is strange because I never actually opened the file to edit, so I'm not sure what was writing those chars to the file. I'm on a Mac (OSX 10.6.8), so I get the line feed character in general, but just not in this case as the file was never opened.

The following command shows (among other things) the non-printing characters:

`od -c filename | sed 4q`

![](/images/uploads/2012/05/dos2unix_before1.png)

You can see the offending _\r_ which was breaking the bash program. The unix tool _dos2unix_ was suggested to clean up the file. Unfortunately this wasn't available on Mac by default. MacPorts to the rescue (I assume homebrew would be a good option as well):

``` bash
sudo port install dos2unix
Password:
--->  Fetching dos2unix
--->  Attempting to fetch dos2unix-3.1.tar.gz from http://fresh.t-systems-sfr.com/linux/src/
--->  Verifying checksum(s) for dos2unix
--->  Extracting dos2unix
--->  Configuring dos2unix
--->  Building dos2unix with target all
--->  Staging dos2unix into destroot
--->  Installing dos2unix 3.1_0
--->  Activating dos2unix 3.1_0
--->  Cleaning dos2unix
```

Then run the program to clean up the invalid line feed (on 2 files).

``` bash
dos2unix -n dirwatcher2 dirwatcher2_2
dos2unix: converting file dirwatcher2 to file dirwatcher2_2 in UNIX format ...
dos2unix -n processPDF processPDF_2
dos2unix: converting file processPDF to file processPDF_2 in UNIX format ...
```

Nice! The changes are:

![](/images/uploads/2012/05/dos2unix_after.png)

No \r

:)
