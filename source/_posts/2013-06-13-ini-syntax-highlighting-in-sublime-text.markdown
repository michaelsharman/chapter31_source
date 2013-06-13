---
layout: post
title: "INI Syntax Highlighting in Sublime Text"
date: 2013-06-13 16:37
comments: true
categories:
- sublime
---
I went searching for a package to provide syntax highlighting for INI files in Sublime Text. The reason? INI files are ugly ;(

 ![INI no syntax highlighting](/images/ini-before.png)

I found one that works well called [sublime-text-2-ini](https://github.com/clintberry/sublime-text-2-ini).

Installation isn't done via the package manager, but it's still simple. Open a terminal and navigate to your Sublime _Packages_ folder, then clone in the package from github.

```bash
cd ~/Library/Application\ Support/Sublime\ Text\ 2/Packages/
git clone git@github.com:clintberry/sublime-text-2-ini.git ./INI
```

That's it! Here's what it looks like after installation:

![INI with syntax highlighting](/images/ini-after.png)
