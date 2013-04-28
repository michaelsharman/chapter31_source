---
comments: true
date: 2013-01-21 11:37:37
layout: post
slug: showing-hidden-files-in-finder-on-mac-osx
title: Showing hidden files in Finder on mac osx
wordpress_id: 1362
categories:
- ColdFusion
---

Short and sweet, MAC OSX has this annoying trait where hidden files (dotfiles) are not visible by default in Finder. No probs, I'll just go to the "View" menu and turn them on. Nope...nada, zip.

Turns out you have to enter a command in the terminal, nice. Here it is for future reference:

```
defaults write com.apple.finder AppleShowAllFiles TRUE
```

Then kill Finder to have the changes take effect.

```
killall Finder
```

If you ever want to turn hidden files off?

```
defaults write com.apple.finder AppleShowAllFiles FALSE
```
