---
layout: post
title: "Managing pathnames on OSX"
date: 2013-03-31 20:37
comments: true
categories: 
---
You can set environment variables on your Mac in several different ways.

If you want to set a PATH variable just for the current user, you can edit your ~/.bash_profile file. Eg

```
export PATH=/usr/local/share/python:$PATH"
```

