---
layout: post
title: "Installing PHP 5.4+ from source on Mac OSX Mountain Lion"
date: 2013-05-06 09:32
comments: true
categories:
- PHP
---
Download and extract the PHP source from [php.net](http://php.net/downloads.php), for me that was  5.4.14. Put it somewhere friendly, the desktop will do.

Open a terminal and install some dependancies via brew:

```bash
brew install libjpeg
brew install pcre
brew install libxml2
brew install mcrypt
```

Download and install ICU from [http://site.icu-project.org/download/48#ICU4C-Download](http://site.icu-project.org/download/48#ICU4C-Download)

```bash
tar xzvf icu4c-4_8_1-src.tgz
cd icu/source
./runConfigureICU MacOSX
make
sudo make install
```

Rebuild IMAP, download source from [ftp://ftp.cac.washington.edu/imap/](ftp://ftp.cac.washington.edu/imap/)

```bash
make osx EXTRACFLAGS="-arch i386 -arch x86_64 -g -Os -pipe -no-cpp-precomp"
sudo cp c-client/*.h /usr/local/include/
sudo cp c-client/*.c /usr/local/lib/
sudo cp c-client/c-client.a /usr/local/lib/libc-client.a
```

Then in the PHP source folder you downloaded:

```bash
cd ~/Desktop/php/ext/imap
phpize
```

Now run configure:

```bash
./configure  \
--prefix=/usr  \
--mandir=/usr/share/man  \
--infodir=/usr/share/info  \
--sysconfdir=/private/etc  \
--with-apxs2=/usr/sbin/apxs  \
--enable-cli  \
--with-config-file-path=/etc  \
--with-libxml-dir=/usr  \
--with-openssl=/usr  \
--with-kerberos=/usr  \
--with-zlib=/usr  \
--enable-bcmath  \
--with-bz2=/usr  \
--enable-calendar  \
--with-curl=/usr  \
--enable-dba  \
--enable-exif  \
--enable-ftp  \
--with-gd  \
--enable-gd-native-ttf  \
--with-icu-dir=/usr/local  \
--with-iodbc=/usr  \
--with-ldap=/usr  \
--with-ldap-sasl=/usr  \
--with-libedit=/usr  \
--enable-mbstring  \
--enable-mbregex  \
--with-mysql=mysqlnd  \
--with-mysqli=mysqlnd  \
--without-pear  \
--with-pdo-mysql=mysqlnd  \
--with-mysql-sock=/var/mysql/mysql.sock  \
--with-readline=/usr  \
--enable-shmop  \
--with-snmp=/usr  \
--enable-soap  \
--enable-sockets  \
--enable-sysvmsg  \
--enable-sysvsem  \
--enable-sysvshm  \
--with-tidy  \
--enable-wddx  \
--with-xmlrpc  \
--with-iconv-dir=/usr  \
--with-xsl=/usr  \
--enable-zip  \
--with-imap=/usr/local/imap-2007 \
--with-kerberos \
--with-imap-ssl \
--enable-intl \
--with-pcre-regex  \
--with-pgsql=/usr  \
--with-pdo-pgsql=/usr \
--with-freetype-dir=/usr/X11 \
--with-jpeg-dir=/usr  \
--with-png-dir=/usr/X11
```

If you want to check for errors in the build step you can run:

```bash
make test
```

This might take a while, like 30 mins.

If you're feeling bold, or once the test has completed, run:

```bash
sudo make install
```

Done!

PS If you're getting strange errors during _configure_ make sure you have these libraries:

```bash
brew install libpng
brew install freetype
brew install openssl
```
