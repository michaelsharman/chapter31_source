---
comments: true
date: 2010-11-14 23:38:10
layout: post
slug: importing-a-csv-into-mysql-using-the-command-line
title: Importing a csv into MySQL using the command line
wordpress_id: 863
categories:
- Databases
- Mac
---

**_UPDATE 16th Nov 2010: I had some issues with the import which I noted in the first code example below_**

Today I had to import csv into a single mysql table. The destination table only had 5 columns and the csv was around 22MB (around 400,000 records). The csv also contained more columns that I needed for the import. Sometimes I'll use a GUI to do this as I usually have one open, but it never ceases to amaze me how much slower GUI tools are compared to the command line.

To import the file via Aqua Data Studio took around 20 mins to import on my machine (over the network to the staging server took over 40mins!). As I need to do this more and more I though I'd look at a few command line options. I actually wanted to do this in 2 steps; firstly import the csv, them export it as a sql file and import it into "production" from there.

First we need to import the original .csv, ignoring certrain columns which the destination table didn't need. Why not open this in excel/open office and `clean` the csv first? Too many rows, by default open office won't read that many rows, plus it slows the machine down to even try that, double plus it's super simple to ignore columns you don't need:

``` javascript
mysql> LOAD DATA LOCAL INFILE '/pathtofile/myfile.csv'
    -> INTO TABLE MyTable
    -> FIELDS TERMINATED BY ',' 
    -> ENCLOSED BY '"'
    -> LINES TERMINATED BY '\r\n' 
    -> (col1,col2,@ignore,col3,col4,@ignore,col5);
```

Note the LINES TERMINATED BY...you really need '\r\n', especially if you .csv had been generated from a Windows machine! Otherwise your import will be kinda funky :(

Also note the ENCLOSED BY '"', if you skip that option then any data in the .csv what was enclosed by double quotes (strings for eg) will actually import the double quotes into your database which is more than likely not what you want.

Note the `@ignore` user variables specified in the column list. Basically that's saying that there are extra columns in the csv which I don't want to import into the database. So by assigning the csv column to a user variable and not assigning the variable to an actual table column you effectively ignore it. You can call the user variable anything you want (prefixed with `@` of course). Calling it `@ignore` made sense to me.

Great now we have our data in the table, took about 2 seconds to run as opposed to 20min in the GUI tool :/

Then I had to quickly massage the data via sql as defined by the business rules as the original csv was `incomplete` in terms of the application requirements. After that was done I exported the table into a sql file:

``` javascript
mysqldump -uroot -p [local_database_name] [table_to_export] --skip-opt --compact --disable-keys --extended-insert --no-create-info > mytable.sql
```

The options used here skip things in the .sql file like CREATE TABLE etc. They also combine INSERTS and disable the keys to improve the speed of the import. Finally import the production ready sql into:

``` javascript
mysql -uroot -p [production_database] < mytable.sql
```

Again, the point of this is pure performance. The speed difference is incredible, even on a local machine I don't know why anyone would bother using GUI tools to import/export data unless you were working with tiny databases/tables.
