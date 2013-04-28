---
comments: true
date: 2008-06-29 13:55:21
layout: page
slug: shell-commands
title: Shell commands
wordpress_id: 257
---

The following is a resource for shell commands (including ssh) that I've accumulated. It is growing so if you can't find something, drop me a line.

You can find miscellaneous shell commands, Apache, MySQL and nano commands. More can be found [here](http://www.ss64.com/osx/).







Command
Example
Notes





/bin/pwd


/bin/pwd


Prints the absolute working directory when you're in a symlinked directory






#!/bin/bash -ex




e == stop on error, x == print an execution trace






cat


cat filename.txt


Prints contents of a file to the screen (shell)






cat /dev/null > myfilename


Deletes the contents of _myfilename_ without having to delete and recreate the actual file






cat file | pbcopy


Copy contents of the file to the clipboard






cd


cd /usr/local/apache


change directory, go to /usr/local/apache/ directory






cd ~ (or just cd)


go to your home directory






cd -


go to the last directory you were in






cd ..


go up a directory






checksum


/usr/bin/openssl sha1 /path/to/.app file/


Compares the checksum of a downloaded file






chown




Changes file ownership permissions. The set of 2 go in this order from left to right:USER - GROUP






chown root myfile.txt


Changes the owner of the file to root






chown root.root myfile.txt


Changes the owner and group of the file to root






[chmod](http://www.ss64.com/osx/chmod.html)




Changes file access permissions. The set of 3 go in this order from left to right:0 = --- No permission
1 = --X Execute only
2 = -W- Write only
3 = -WX Write and execute
4 = R-- Read only
5 = R-X Read and execute
6 = RW- Read and write
7 = RWX Read, write and execute






chmod 000 index.html


No one can access






chmod g+w index.html


Adding write access for the "group"






clear




Clears the terminal screen






cmp


cmp file1.html file2.html


Compares 2 files and writes the result to the standard output.
0 = identical
1 = different






cp


cp filename filename.backup


copies filename to filename.backup






cp -a /home/burst/new_design/* /home/burst/public_html/


copies all files, retaining permissions form one directory to another.






cp -av * ../newdir


Copies all files and directories recurrsively in the current directory INTO newdir






du


du -hs ./path


Size of directory with all sub-directories in a human readable format






echo


echo "My text here" > mynewfile


Creates a file called 'mynewfile' with the contents of 'My text here'






echo -n > ./myfile


Empties an existing file






echo $PATH | tr ':' '\n'


Print your environment path values, one for each line






find


find -mtime 7


"Finds" files modified in the last 7 days






find . -mtime -1 -ls


Finds file modified in the last day






find / -name 'my.cnf'


Finds a file called "my.cnf" from the root dir






find . -maxdepth 2 -name "myfile*" -exec cp {} temp.txt \;


Finds all files from the current location, going to a max depth of 2 where the name is LIKE myfile*. The executes a command (in this case copy), the braces indicate each file/directory found. Then renaming to temp.txt. This is of course a silly example.
Note you need the final \;






git


`git checkout-index -a -f --prefix=/destination/path/`






`git config --global core.excludesfile ~/.gitignore_global`






grep




looks for patterns in files






grep root /etc/passwd


shows all matches of root in /etc/passwd






grep -c mystring myfile.txt


shows how many matching lines have "mystring" in the file






grep -o "mystring" myfile.txt | wc -w


shows how many occurrences of "mystring" are in the file (regardless of line)






grep -v root /etc/passwd


shows all lines that do not match root






history




looks up previously entered commands






!n


executes line 'n' of the history record






java


java -version


Provides information on your current java version






kill


kill -9 PID


Terminate a system process






less __filename__


Shift+f


less a file, then hit Shift-f it will tail the file, but you can scroll back up through the file. Good for scanning recent log file entries without having to grep.






ls


ls -lSrh $(find . -type f -name '*.flv')


find a file type ordering by filesize (smallest first)






ls -R -1 . | wc -l


counts the number of files and directories (recursive)






ls *.pdf | wc -l


How many files are in a directory






locate


sudo /usr/libexec/locate.updatedb


Manually updates the database






ln


ln -s /usr/local/apache/conf/httpd.conf /etc/httpd.conf


Creates links between files and directories. Now you can edit /etc/httpd.conf rather than the original. changes will affect the orginal, however you can delete the link and it will not delete the original.






ls


ls


list files/directories in a directory, comparable to dir in windows/dos.






ls -al


shows all files (including ones that start with a period), directories, and details attributes for each file.






ls -ld */


shows all directories (in long format) from the current position






ls | wc -l


Count of files in a directory






ls -lSrh $(find . -type f -name '*.flv')


List all files (flv in this case) ordered by size, smallest to largest






mkdir


mkdir _mydirname_


Creates new directories






mkdir -p /dir/subdir/subsubdir


Creates intermediate directories as required.






mkdir -v


Be verbose when creating directories, listing them as they are created.






more




like cat, but opens the file one screen at a time rather than all at once






more /etc/userdomains


browse through the userdomains file. hit Spaceto go to the next page, q to quit






mv


mv oldfilename newfilename


Move a file or directory from oldfilename to newfilename






ps




short for process status, which is similar to the top command. It's used to show currently running processes and their PID.A process ID is a unique number that identifies a process, with that you can kill or terminate a running program on your server (see kill command).






ps U username








ps aux


shows all system processes






ps aux --forest


shows all system processes like the above but organizes in a hierarchy that's very useful!






pwd


pwd


"Print Working Directory", outputs the path to the current folder location. See "/bin/pwd"






pwd -P


Prints the absolute working directory when you're in a symlinked directory






openssl


openssl md5 [filename]


Verify a file checksum. Replace md5 with "sha1" if the hash is sha-1






rm


rm filename.txt


deletes filename.txt, will more than likely ask if you really want to delete it.
rm -rf `find . -name .svn`






rm -f filename.txt


deletes filename.txt, will not ask for confirmation before deleting.






rm -rf tmp/


recursively deletes the directory tmp, and all files in it, including subdirectories. BE VERY CAREFULL WITH THIS COMMAND!!






scutil


scutil --dns


View local DNS configuration (mac)






ssh


create a new key, specifying the name (good if you already have default keys):

`ssh-keygen -f ~/.ssh/mykey_rsa`


See if the ssh-agent is running:

`ps aux | grep [s]sh-agent`


See which keys are loaded:

`ssh-add -l`


If your key isn't there, load it:

`ssh-add ~/.ssh/mykey_rsa`


Set the correct identity file (if you use more than 1) in your .ssh/config:

`Host myhostname
HostName domain.com
PreferredAuthentications publickey
IdentityFile ~/.ssh/mykey_rsa`


Also note above to set _PreferredAuthentications_ to only accept publickey.


Permissions:

755 on ~/.ssh
600 on your public and private keys
644 on known_hosts and config






svn


svn delete --keep-local .project


Removes file from repo but keeps local copy






svn diff -r HEAD


Compare local working copy to HEAD






svn add --force ./path


Forces svn to add new files in a "path" that is already under version control






svn propedit svn:ignore .


Opens a system editor to edit






svn log


Provides basic audit of activity in the repository (best to pipe into less etc as it will get quite long)






svn log -v


As above except this time you get a full list of files committed by the user






svn log -v -r HEAD:1000


As above except this time you get a full verbose output, from the most recent change (HEAD) to revision number 1000. Again, best to pipe into _less_ etc






svn log -v --limit 5


Limit the log to the last 5 commits






svn log -r {2012-02-02}:{2012-02-03}


Show a log between certain dates






svn log --xml -v -r 25311:25230 | xsltproc svn2cl.xsl - > ChangeLog


Retrieves the svn log (in xml) between revisions, passes to [svn2cl](http://arthurdejong.org/svn2cl/) for formatting






svn st -u


Shows you what's changed in the repo, handy before updating your local copy






svn diff -r head myfile.html


Shows you a diff between your local copy and HEAD






sudo -l


sudo -l


What commands can the current user run on this host?






sudo !!


sudo !!


Executes the last command with "sudo" added






tail




like cat, but only reads the end of the file






tail /var/log/messages


see the last 20 (by default) lines of /var/log/messages






tail -f /var/log/messages


watch the file continuously, while it's being updated






tail -200 /var/log/messages


print the last 200 lines of the file to the screen






tar




Creating and Extracting .tar.gz and .tar files






tar -zxvf file.tar.gz


Extracts the file






tar -cf archive.tar contents/


Takes everything from contents/ and puts it into archive.tar






gzip -d filename.gz


Decompress the file, extract it






zip


zip -r archivename.zip filestozip


Compresses file(s) to a zip






top




shows live system processes in a nice table, memory information, uptime and other useful info. This is excellent for managing your system processes, resources and ensure everything is working fine and your server isn't bogged down.
top then type Shift + M to sort by memory usage or Shift + P to sort by CPU usage






touch




creates an empty file






touch index.html


create an empty file called index.html in the current directory






unzip


unzip file.zip


Extracting .zip files shell command






wc


wc -l filename.txt


tells how many lines are in filename.txt






wget


wget --recursive --no-clobber --page-requisites --html-extension --convert-links --restrict-file-names=windows --domains intranet.bosw2k.com http://intranet.bosw2k.com/


scrapes an entire site, doesn't follow external links






wget -O - www.mysite.com


Retrieves a single page via GET






wget --post-data 'param1=value' -O - www.mysite.com


Retrieves a single page via POST and sends parameters






wget --server-response --spider http://www.mysite.com/


Retrieves the HTTP headers only






 








### Apache commands








httpd


httpd -v


Outputs the build date and version of the Apache server.






httpd -l


Lists compiled in Apache modules






httpd status


Only works if mod_status is enabled and shows a page of active connections






httpd


sudo apachectl graceful


If Apache is not already running it will be started. If it is already running then it will reload with the new changes but will not abort active connections, meaning that anyone who is in the middle of downloading something will continue to be able to download it.






sudo apachectl configtest


Check your config syntax






apachectl -M


what static and shared modules are loaded






apachectl -l


what compiled in modules are installed














### MySQL commands








mysqladmin


mysqladmin processlist


Shows active mysql connections and queries






mysqladmin -uroot -p shutdown


Shut down the mysql service






mysqladmin -uroot -p variables


Shows global vars






mysqladmin create databasenamehere


Creates a mysql database






mysql


mysql -uroot -p


Connects to mysql in the terminal






mysql --print-defaults


mysql would have been started with the following arguments:
`--port=3306 --socket=/tmp/mysql.sock --default-character-set=utf8
--no-auto-rehash --default-character-set=utf8`






mysql> show databases;


Shows all databases on the server (once connected)






mysql> use [database];


Connects you to a particular database






mysql> show tables;


Displays all tables once you have connected to a database






mysql> show table status;


Displays table metadata including sizes






mysql> show variables like "%character%";
show variables like "%collation%";


Shows the server collation and characterset, e.g.
+--------------------------+----------------------------+
| Variable_name | Value |
+--------------------------+----------------------------+
| character_set_client | utf8 |
| character_set_connection | utf8 |
| character_set_database | utf8 |
| character_set_filesystem | binary |
| character_set_results | utf8 |
| character_set_server | utf8 |
| character_set_system | utf8 |
| character_sets_dir | /usr/share/mysql/charsets/ |
+--------------------------+----------------------------++----------------------+-----------------+
| Variable_name | Value |
+----------------------+-----------------+
| collation_connection | utf8_general_ci |
| collation_database | utf8_general_ci |
| collation_server | utf8_general_ci |
+----------------------+-----------------+






mysql> show create table tablename;Shows create statement with keys and indexes






mysql> show variables like "character_set_database";


Shows characterset of a specific database+------------------------+-------+
| Variable_name | Value |
+------------------------+-------+
| character_set_database | utf8 |
+------------------------+-------+






mysql> show full columns from vocab_scot;


+-------+--------------+-----------------+------+-----+---------+----------------+---------------------------------+---------+
| Field | Type | Collation | Null | Key | Default | Extra | Privileges | Comment |
+-------+--------------+-----------------+------+-----+---------+----------------+---------------------------------+---------+
| id | int(11) | NULL | NO | PRI | NULL | auto_increment | select,insert,update,references | |
| term | varchar(200) | utf8_general_ci | NO | UNI | NULL | | select,insert,update,references | |
| uri | varchar(200) | utf8_general_ci | NO | | NULL | | select,insert,update,references | |
+-------+--------------+-----------------+------+-----+---------+----------------+---------------------------------+---------+






mysqldump


mysqldump -hdb.example.com -uusername -p mydbname | gzip > mydbname.sql.gz


Back's up a database and compresses to a .gz file






mysqldump --no-data -h db.example.com -u username -p mydbname > myschema.sql


Generates schema, no data






mysqldump -d -h db.example.com -u username -p mydbname > myschema.sql


As above, generates schema only






mysqldump -h 127.0.0.1 -u myusername -p --single-transaction mydatabase | gzip > mydatabase.sql.gz


Back's up a database without locking tables (innoDB only)






mysqldump -h 127.0.0.1 -u myusername -p --lock-tables=false mydatabase | gzip > mydatabase.sql.gz


Back's up a database without locking tables (MyISAM only)






mysqldump --compatible=ansi -h127.0.0.1 -umyuser -p mydatabase | gzip > mydatabase.sql.gz


Back's up a database with ansi compatibility, meaning syntax will hopefully be more consistent and less likely to barf






mysqldump -umsharman -p --ignore-table=mydatabase.tablename mydatabase | gzip > mydatabase.sql.gz


Dumps a database ignoring a specific table






gunzip


gunzip < [mydbname.sql.gz] | mysql -u[uname] -p[pass] mydbname


Restores a database






mysql -uroot dbname < <(cat *sql)


Restores a database if you have an sql file per table






cat < mydb.sql | mysql -uroot dbname


Runs sql file against a database






To set the default to UTF-8, you want to add the following to my.cnf`
[client]
default-character-set=utf8`[mysql]
default-character-set=utf8[mysqld]
default-character-set = utf8
collation-server = utf8_unicode_ci
init-connect='SET NAMES utf8'
character-set-server = utf8














### Nano commands








ctrl + space


or ctrl + shift + alt


Moves forward 1 word






ctrl + j




justifies the current paragraph






ctrl + a




moves to start of line






ctrl + o




saves file to disk






ctrl + e




moves to end of line






ctrl + v




moves down a screen






ctrl + y




moves up a screen






ctrl + c




shows where cursor is (handy if you've moved down pages etc)






ctrl + k




deletes current line






ctrl + shift + _ (or ctrl + _)




go to line






ctrl + \




find and replace






ctrl + g




help






ctrl + w (or F6)




search






ctrl + ^




"marks" a spot for selecting text (to copy etc) up to where you move your cursor. If you mess up, hit ctrl + ^ again to "unmark" your selection






ctrl + k




Cutting text (selected with ctrl + ^)






ctrl + u




Pastes text cut with ctrl + k




