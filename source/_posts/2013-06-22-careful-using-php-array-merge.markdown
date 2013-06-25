---
layout: post
title: "Careful using PHP array_merge"
date: 2013-06-22 23:11
comments: true
categories:
- php
---
Using ```array_merge``` bit me today when I merged an array (which happened to be empty) with a numerically indexed array.

Because the array I was merging was empty, I expected my other (numerically indexed) array to remain untouched. However that wasn't the case, [from the docs](http://php.net/manual/en/function.array-merge.php):

    Values in the input array with numeric keys will be renumbered with incrementing
    keys starting from zero in the result array.

This meant that the following array keys went from being their _constant_ numeric values, to 0, 1, 2, 3:

```php
$pdoOptions = [
    PDO::ATTR_PERSISTENT         => false,
    PDO::ATTR_ERRMODE            => PDO::ERRMODE_WARNING,
    PDO::MYSQL_ATTR_INIT_COMMAND => 'SET NAMES utf8',
    PDO::ATTR_EMULATE_PREPARES   => false
];
```

I really dislike this behaviour, but it is what it is so be warned. Instead I just looped over my merging array and set the keys manually:

```php
if (count($myArr)) {
    foreach ($myArr as $key => $value) {
        $otherArr[$key] = $value;
    }
}
```
