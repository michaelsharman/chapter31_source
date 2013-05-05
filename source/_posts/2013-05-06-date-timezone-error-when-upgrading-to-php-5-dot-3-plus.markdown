---
layout: post
title: "Date timezone error when upgrading to PHP 5.3+"
date: 2013-05-06 09:03
comments: true
categories:
- PHP
---
I upgraded to 5.4.14 last night on Mac OSX 10.8.3. Things went smoothly except I got an error running my apps:

	date(): It is not safe to rely on the system's timezone settings. You are *required* to use the date.timezone setting or the date_default_timezone_set() function. In case you used any of those methods and you are still getting this warning, you most likely misspelled the timezone identifier. We selected the timezone 'UTC' for now, but please set date.timezone to select your timezone.

Basically since PHP 5.3.0 you have to explicitly set your date.timezone setting, this is a good thing. Prior to PHP 5.3.0, the line existed in the php.ini but was generally commented out. There are 2 places you could make this change.

1. php.ini
2. in your application codebase

Ideally you'd do both. Have a default in your php.ini that all applications on the server can use, and you can override if needed in your application.

## php.ini
Look in your _php.ini_ for the date.timezone setting and uncomment if necessary. For me I set it to "Australia/NSW". You can get a full list of [supported timezones here](http://us3.php.net/manual/en/timezones.php)

```php
date.timezone = "Australia/NSW"
```

## Application codebase
The method above, of course is a server default, so if you want something specific to your application, try:

```php
date_default_timezone_set("Australia/NSW");
```
