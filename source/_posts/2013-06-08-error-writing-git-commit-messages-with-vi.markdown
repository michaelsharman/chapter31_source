---
layout: post
title: "Error writing git commit messages with vi"
date: 2013-06-08 23:24
comments: true
categories:
- git
---
I typically write my git commit messages in the terminal, but today I wanted to write a multi-line comment so I left out the _-m_ argument to _git commit_ so it would open up my default editor, which is _vi_:

```bash
git commit
```

I wrote my comment, saved and exit but got an error:

```bash
$ git commit
error: There was a problem with the editor 'vi'.
Please supply the message using either -m or -F option.
```

A quick google and I [found the solution](http://tooky.co.uk/2010/04/08/there-was-a-problem-with-the-editor-vi-git-on-mac-os-x.html), I thought I'd repost it here for myself as well as others.

There are a couple of solutions offered in that article, for me I just set the full path to _vi_ with a _-f_ flag in my .gitconfig:

```bash
[core]
  editor = /usr/bin/vi -f
```

As an FYI...if you want to see the values in git config, you can run this command in your project and it will list your global and project configuration:

```bash
git config -l
```
