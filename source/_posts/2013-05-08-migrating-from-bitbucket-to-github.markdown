---
layout: post
title: "Migrating from bitbucket to github"
date: 2013-05-08 10:31
comments: true
categories:
- git
---
Migrating repositories between [bitbucket](https://bitbucket.org/) and [github](http://github.com) couldn't be simpler thanks to the design nature of <acronym title="Distrubuted Version Control System">DVCS</acronym> like git because the entire history is already located on your machine within your projects _.git_ folder. All you're really doing is changing a _remote_.

Open a terminal and navigate to your project directory.

## TLDR;
For those who just want the commands with no explanation

```bash
git remote rename origin bitbucket
git remote add origin git@github.com:[username]/[repo_name].git
git push -u origin master
git remote rm bitbucket
```

## Explanation of steps

Check which remote(s) you have now:

```bash
$ git remote -v show
origin	git@bitbucket.org:[username]/[repo_name].git (fetch)
origin	git@bitbucket.org:[username]/[repo_name].git (push)
```

Now rename your existing _origin_ to _bitbucket_ (or whatever you want to call it):

```bash
git remote rename origin bitbucket
```

 Double check your change:

```bash
$ git remote -v show
bitbucket	git@bitbucket.org:[username]/[repo_name].git (fetch)
bitbucket	git@bitbucket.org:[username]/[repo_name].git (push)
```

Now add github as your _origin_ and push the repository:

```bash
git remote add origin git@github.com:[username]/[repo_name].git
git push -u origin master
```

Check what remotes you have:

```bash
$ git remote -v show
bitbucket	git@bitbucket.org:[username]/[repo_name].git (fetch)
bitbucket	git@bitbucket.org:[username]/[repo_name].git (push)
origin	git@github.com:[username]/[repo_name].git (fetch)
origin	git@github.com:[username]/[repo_name].git (push)
```

Removed the old remote (_bitbucket_):

```bash
git remote rm bitbucket
```

Finally, check your remotes:

```bash
$ git remote -v show
origin	git@github.com:[username]/[repo_name].git (fetch)
origin	git@github.com:[username]/[repo_name].git (push)
```

Note that at the end of this, you still have your code on bitbucket, you've just pushed your repository to github and pointed your _origin_ remote to there. To fully _clean up_ you need to delete your repo from bitbucket.
