---
layout: post
title: "PHP Composer error - cannot redeclare class"
date: 2013-06-03 09:16
comments: true
categories:
- PHP
---
I rebuilt PHP last night to include APC and all of a sudden composer stopped working in my project. Whenever I ran a simple update, install or dump-autoload I'd get:

```bash
$ composer update
PHP Fatal error:  include(): Cannot redeclare class symfony\component\process\process in phar:///usr/local/bin/composer/vendor/composer/ClassLoader.php on line 183

Fatal error: include(): Cannot redeclare class symfony\component\process\process in phar:///usr/local/bin/composer/vendor/composer/ClassLoader.php on line 183
```

A quick google told me [others](https://github.com/composer/composer/issues/1432) also had the [same](https://github.com/composer/composer/issues/264) issue.

It seems that there's a bug between composer.phar and APC. From one of the composer issues:

	Quite weird, but then again the php docs seem to acknowledge that APC should not really be
	enabled on the CLI. It seems to be a phar+apc bug, see https://bugs.php.net/bug.php?id=59398
	https://bugs.php.net/bug.php?id=59829 https://bugs.php.net/bug.php?id=59907 as well.

There are a couple of things you can do to fix this, but they all involve turning off APC for php-cli. First, run _composer diag_ to see whether any more information can be gleaned:

```bash
$ composer diag
Checking platform settings: FAIL

The apc.enable_cli setting is incorrect.
Add the following to the end of your `php.ini`:
    apc.enable_cli = Off

The php.ini used by your command-line PHP is: /opt/php-5.4.15/lib/php.ini
If you can not modify the ini file, you can also run `php -d option=value` to modify ini values on the fly. You can use -d multiple times.
```

If you get that message, you know you have the same problem as I did :) You can also check the [troubleshooting](http://getcomposer.org/doc/articles/troubleshooting.md) page on getcomposer.org

You can try running the _self-update_ (for me I don't reference the .phar file because I use the unix install convention).

```bash
php /usr/local/bin/composer self-update
```

Those are really just everyday things to try if you have composer issues, to really fix this you need to disable APC for php-cli. You should set this option to _0_ in your php.ini

```bash
apc.enable_cli=0
```

If you don't have access to php.ini, you can disable APC on the CLI per command:

```bash
php -d apc.enable_cli=0 /usr/local/bin/composer install
```

Note: if you have composer.phar in your project you could just do:

```bash
php -d apc.enable_cli=0 composer.phar install
```
