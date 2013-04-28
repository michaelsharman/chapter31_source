---
comments: true
date: 2013-01-21 12:02:46
layout: post
slug: adding-a-global-ignore-file-for-git
title: Adding a global ignore file for git
wordpress_id: 1366
categories:
- ColdFusion
---

Quick setup of ignore files for Git. You can of course set these up per repo, but that gets a little old. Instead you can setup a single ignore file and link to it so that every repo refers to it.

For example, create a git ignore file in your home directory:

```
~/.gitignore_global
```

Fill it with regular files that you want to ignore:

``` bash
#.gitignore

# Railo files #
######################
WEB-INF/

# Sublime files #
######################
*.sublime-project
*.sublime-workspace

# Misc files #
######################
*.yml
*.buildpath
*.settings
*.cache

# OS generated files #
######################
.DS_Store
ehthumbs.db
Icon?
Thumbs.db
.project
```

Edit your main git config file (~/.gitconfig) and add a reference to this new global ignore file:

``` bash
[user]
        name = xxxx xxxx
        email = joe@xxx.com

[core]
        excludesfile = /Users/computername/.gitignore_global
```

Or you can run the following command:

```
git config --global core.excludesfile ~/.gitignore_global
```

Now all your git projects will share the same ignore file :)
