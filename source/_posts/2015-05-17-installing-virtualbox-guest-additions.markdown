---
layout: post
title: "Installing VirtualBox Guest Additions"
date: 2015-05-17 21:23
comments: true
categories: 
---
Currently I have VirtualBox 4.3.18 installed on Mac OS X Mavericks. I recently downloaded several Windows 7/8/8.1 images from either [modern.ie](http://modern.ie) or MSDN, and I wanted to install guest additions as well so I could do things like:

* change the size of the guest window
* turn on bidirectional shared clipboard
* add shared folder(s)
* etc

There is a handy menu option to do this from the _VirtualBox VM_ menu:

```
Devices / Insert Guest Additions CD image... (Host+D)
```

My problem was that every time I clicked that (for every Windows image I tried) nothing happened. For some reason that menu option was not finding or not opening the guest additions installer.

Luckily it's pretty straight forward to do this manually from within the guest virtual machine. Follow the screenshots below:

**Open _Computer_**

![Installing guest additions - 1](/images/guestadditions/1.png)

**Double click the _VirtualBox Guest Additions_**

![Installing guest additions - 2](/images/guestadditions/2.png)

**Double click _VBoxWindowsAdditions_**

![Installing guest additions - 3](/images/guestadditions/3.png)

**Click _Yes_**

![Installing guest additions - 4](/images/guestadditions/4.png)

**Click _Next_**

![Installing guest additions - 5](/images/guestadditions/5.png)

**Click _Next_**

![Installing guest additions - 6](/images/guestadditions/6.png)

**Click _Install_ (I didn't add Direct3D Support)**

![Installing guest additions - 7](/images/guestadditions/7.png)

**Click _Install_**

![Installing guest additions - 8](/images/guestadditions/8.png)

![Installing guest additions - 9](/images/guestadditions/9.png)

**Click _Finish_**

![Installing guest additions - 10](/images/guestadditions/10.png)
