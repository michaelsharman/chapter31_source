---
layout: post
title: "base16 - colour scheme for hackers"
date: 2013-06-01 17:40
comments: true
categories: 
- shell
---
I came across a great set of colour schemes called [base16](http://chriskempson.github.io/base16/). From the website:

	Base16 provides carefully chosen syntax highlighting and a default set of 
	sixteen colors suitable for a wide range of applications.
	
	Base16 is both a color scheme and a template.

There are repos for the following tools:

 - Base 16 Builder
 - Vim
 - Shell
 - iTerm2
 - TextMate
 - OSX Color Palette
 - Xresources
 - Mou
 - XFCE4 Terminal
 - Gimp Palette
 - Gnome Terminal
 - Emacs
 - Geany

 There's even [a builder](https://github.com/chriskempson/base16-builder) so you can roll your own theme!

 I'm currently using Monaki Dark 256 for iTerm2. The best bet is to git clone the [iTerms 2 colour schemes](https://github.com/chriskempson/base16-iterm2) to somewhere on your machine that is persistent. Perhaps _~/Documents/iterm2_schemes/base16_.

 Then you can experiment with the colours you like by going to preferences->profiles->colors then import your schemes using the _load presets_ dropdown (pointing to wherever you cloned the base16 repo).

 ![Monaki Dark 256](/images/monaki-dark.png)
