---
comments: true
date: 2012-07-10 12:49:19
layout: post
slug: editing-svnignore-on-the-terminal
title: Editing svn:ignore on the terminal
wordpress_id: 1134
categories:
- SVN
---

_svn:ignore_ is a great way to exclude certain files or folders from being added to your subversion repository. Typically I'll manage this via an IDE plugin like subclipse (in Eclipse), but if you want to do it via the terminal instead (bash)...here's how.


## Crappy way


You can add single values to your svn:ignore by running this command either at the root of your project or wherever directory you want the ignore to take effect:

	svn propset svn:ignore "*.project" .
	
However that command seems not only to add an ignore rule, but also it clears any rules you may have had on that directory and only inserts the single rule you just specified. No good.


## Better way


There are a couple of ways to enter multiple ignore values into your ignore file, I like simply opening up the ignore editor. Try this command:

	svn propedit svn:ignore .
	
If you get the following error it means you haven't associated an editor with svn:ignore

> svn: None of the environment variables SVN_EDITOR, VISUAL or EDITOR are set, and no 'editor-cmd' run-time configuration option was found

You can quickly associate the editor with nano (or another editor of your choice) by running:

	export SVN_EDITOR=nano
	
That's not ideal as it'll only work in the current bash session, when you close your terminal window that export will be lost. The best bet is to add it to your ~/.bash_profile (or ~/.bash_login).

```
cd ~
nano .bash_profile
export SVN_EDITOR=nano
```

Now you'll always be able to edit your svn:ignore file. So let's try again:

	svn propedit svn:ignore .
	
Nano (or whatever editor you specified) should open allowing you to enter whatever you want :)

Here's a simple list of mine:

	*.DS_Store  
	*.project  
	*.sublime-project  
	*.sublime-workspace  
	htdocs/WEB-INF

If you actually want to see all your files (including those that you've ignored) via the terminal, run:

	svn status --no-ignore

## Externals

Note that you can also edit any svn:externals using the same technique.

	svn propedit svn:externals .

Remember that you need to be in the location of the directory that contains any externals for this to work properly.
