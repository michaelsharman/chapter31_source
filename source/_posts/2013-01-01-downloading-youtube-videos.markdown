---
comments: true
date: 2013-01-01 02:48:27
layout: post
slug: downloading-youtube-videos
title: Downloading youtube videos
wordpress_id: 1346
categories:
- ColdFusion
---

I wanted to grab some youtube videos for the kids and found this cool [CLI utility called youtube-dl](http://rg3.github.com/youtube-dl/) to handle it. I downloaded it from the website (you may need to chmod 755):
```
wget https://github.com/downloads/rg3/youtube-dl/youtube-dl -O /usr/local/bin/youtube-dl
```

However you can get it via brew if you want:
```
brew install youtube-dl
```

The basic process is the following:
```
youtube-dl [video URL]
```

By default that should download the highest quality format available (in case you didn't know, youtube usually has multiple versions of a file for different qualities etc). If you want to see what formats are available, try:
```
youtube-dl -F [URL]
```

For example:
``` bash
youtube-dl -F http://www.youtube.com/watch?v=iThX9rbOqXY
[youtube] Setting language
[youtube] iThX9rbOqXY: Downloading video webpage
[youtube] iThX9rbOqXY: Downloading video info webpage
[youtube] iThX9rbOqXY: Extracting video information
Available formats:
34 : flv [360x640]
18 : mp4 [360x640]
43 : webm [360x640]
5 : flv [240x400]
17 : mp4 [144x176]
```

Then you can select whichever you want to download by choosing the number next to the format you want:
```
youtube-dl -f [format number] [URL]
```

So if I wanted the highest quality mp4 available in the example above I'd  type (note the number corresponds to the video I want) the following, note the lowercase f:
```
youtube-dl -f 18 http://www.youtube.com/watch?v=iThX9rbOqXY
```

You can also pass in a file containing a list of URLs (one on ea to handle batch downloading:
```
youtube-dl -a urls.txt
```

If you want to rename the file as you download it (by default it's the filename on youtube which isn't really that useful):
```
youtube-dl -f 18 -o "myfilename.mp4" [URL]
```

You can do other cool things like extracting the audio only (and choosing which audio format you want). There are also [LOTS of sites](http://rg3.github.com/youtube-dl/documentation.html#d4) that are supported...not just youtube.
