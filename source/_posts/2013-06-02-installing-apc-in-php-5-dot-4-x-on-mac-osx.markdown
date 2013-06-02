---
layout: post
title: "Installing APC in PHP 5.4.x on Mac OSX"
date: 2013-06-02 16:33
comments: true
categories:
- PHP
---
I recently [installed PHP 5.4 from source](/2013/05/06/installing-php-5-dot-4-plus-from-source-on-mac-mountain-lion/) but needed to add <abbr title="Alternative PHP Cache">APC</abbr>.

Most people can install this using <abbr title="PHP Extension Community Library">PECL</abbr>, but I got an error doing this:

```bash
$ pecl install apc

Warning: lstat(): Lstat failed for /private/tmp/pear/cache/497e483d585c1e3f341260e73a8c6e85rest.cacheid in PEAR/REST.php on line 276

Warning: lstat(): Lstat failed for /private/tmp/pear/cache/497e483d585c1e3f341260e73a8c6e85rest.cacheid in /opt/php-5.4.15/lib/php/PEAR/REST.php on line 276
No releases available for package "pecl.php.net/apc"
install failed
```

So instead I downloaded the APC source [from the PECL website](http://pecl.php.net/package/APC) and ran the following:

```bash
cd APC-3.1.13/
phpize
./configure --with-php-config=/opt/php/bin/php-config --enable-apc
make
export TEST_PHP_ARGS='-n'
sudo make install
```

Note that my _php-config_ setting is a little different because I installed my PHP into _/opt_ instead of the default _/usr/bin_

The output of _make install_ is:

```bash
$ sudo make install
Installing shared extensions:     /opt/php-5.4.15/lib/php/extensions/no-debug-non-zts-20100525/
Installing header files:          /opt/php-5.4.15/include/php/
```

Copy the _Installing shared extensions_ path into your php.ini file.

```bash
[apc]
extension=/opt/php-5.4.15/lib/php/extensions/no-debug-non-zts-20100525/apc.so
apc.enabled=1
apc.shm_size=128M
apc.ttl=7200
apc.user_ttl=7200
apc.enable_cli=1
```

You can double check the installation process by either reviewing phpinfo(); in a browser or using CLI:

```bash
php -i | grep apc
```

If you see something like the following (from php -i)...all good:

```bash
apc.cache_by_default => On => On
apc.canonicalize => On => On
apc.coredump_unmap => Off => Off
apc.enable_cli => On => On
apc.enabled => On => On
apc.file_md5 => Off => Off
apc.file_update_protection => 2 => 2
apc.filters => no value => no value
apc.gc_ttl => 3600 => 3600
apc.include_once_override => Off => Off
apc.lazy_classes => Off => Off
apc.lazy_functions => Off => Off
apc.max_file_size => 1M => 1M
apc.mmap_file_mask => no value => no value
apc.num_files_hint => 1000 => 1000
apc.preload_path => no value => no value
apc.report_autofilter => Off => Off
apc.rfc1867 => Off => Off
apc.rfc1867_freq => 0 => 0
apc.rfc1867_name => APC_UPLOAD_PROGRESS => APC_UPLOAD_PROGRESS
apc.rfc1867_prefix => upload_ => upload_
apc.rfc1867_ttl => 3600 => 3600
apc.serializer => default => default
apc.shm_segments => 1 => 1
apc.shm_size => 128M => 128M
apc.shm_strings_buffer => 4M => 4M
apc.slam_defense => On => On
apc.stat => On => On
apc.stat_ctime => Off => Off
apc.ttl => 7200 => 7200
apc.use_request_time => On => On
apc.user_entries_hint => 4096 => 4096
apc.user_ttl => 7200 => 7200
apc.write_lock => On => On
```
