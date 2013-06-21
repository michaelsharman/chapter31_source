---
layout: post
title: "PHP ['SCRIPT_NAME'] returning empty string"
date: 2013-06-21 11:58
comments: true
categories:
- PHP
- apache
---
I was working with [Slim](http://slimframework.com/) (v2.2.x) the other day and saw that a PHP warning was being thrown in one of the interal Slim files:

```bash
Warning: strpos(): Empty needle in /vendor/slim/slim/Slim/Environment.php on line 143
```

The code throwing the warning was the following _if_ statement:

```php
if (strpos($_SERVER['REQUEST_URI'], $_SERVER['SCRIPT_NAME']) === 0) {
```

The actual issue was that ```$_SERVER['SCRIPT_NAME']``` was an empty string, so _strpos_ was complaining as that is invalid syntax. Strangely, this was all working fine when we had the apache rewrite rules in an .htaccess file:

```bash
RewriteCond %{DOCUMENT_ROOT}%{REQUEST_URI} !-f
RewriteRule ^(.*)$ /index.php/$1 [QSA,L]
```

However once we moved the rules to the _VirtualHost_ we got the warning. Some [googling](https://issues.apache.org/bugzilla/show_bug.cgi?id=40102) [told me](https://bugs.php.net/bug.php?id=38141) that this is a 6 year old problem with either apache, php, mod_php or the boogey man...depending on who you believe. It seems that various rewrite settings working differently if you have them in .htaccess vs the VirtualHost block.

I considered sending a pull request to Slim to handle the scenario where SCRIPT_NAME is empty:

```php
if (strlen($_SERVER['SCRIPT_NAME']) && strpos($_SERVER['REQUEST_URI'], $_SERVER['SCRIPT_NAME']) === 0) {
```

But instead we added the PT (passthrough) rewrite flag. This works fine for what we're doing and ```$_SERVER['SCRIPT_NAME']``` now returns _/index.php_ as it should.

```bash
RewriteCond %{DOCUMENT_ROOT}%{REQUEST_URI} !-f
RewriteRule ^(.*)$ /index.php/$1 [QSA,PT,L]
```
