---
comments: true
date: 2008-06-29 13:55:21
layout: page
slug: shell-commands
title: Shell commands
---

<figure class="code">
<table summary="shell commands for mac (bash) terminal">
	<tbody>
		<tr>
			<th style="width: 30%;">Command</th>
			<th style="width: 30%;">Example</th>
			<th>Notes</th>
		</tr>
		<tr>
			<td>#!/bin/bash -ex</td>
			<td></td>
			<td>e == stop on error, x == print an execution trace</td>
		</tr>
		<tr>
			<td rowspan="3">cat</td>
			<td>cat filename.txt</td>
			<td>Prints contents of a file to the screen (shell)</td>
		</tr>
		<tr>
			<td>cat /dev/null &gt; myfilename<p>Or even easier:</br>&gt; myfilename</p></td>
			<td>Deletes the contents of <em>myfilename</em> without having to delete and recreate the actual file</td>
		</tr>
		<tr>
			<td>cat file | pbcopy</td>
			<td>Copy contents of the file to the clipboard</td>
		</tr>
		<tr>
			<td rowspan="4">cd</td>
			<td>cd /usr/local/apache</td>
			<td>change directory, go to /usr/local/apache/ directory</td>
		</tr>
		<tr>
			<td>cd ~ (or just cd)</td>
			<td>go to your home directory</td>
		</tr>
		<tr>
			<td>cd -</td>
			<td>go to the last directory you were in</td>
		</tr>
		<tr>
			<td>cd ..</td>
			<td>go up a directory</td>
		</tr>
		<tr>
			<td>checksum</td>
			<td>/usr/bin/openssl sha1 /path/to/.app file/</td>
			<td>Compares the checksum of a downloaded file</td>
		</tr>
		<tr>
			<td rowspan="3">chown</td>
			<td></td>
			<td>Changes file ownership permissions. The set of 2 go in this order from left to right:USER &#8211; GROUP</td>
		</tr>
		<tr>
			<td>chown root myfile.txt</td>
			<td>Changes the owner of the file to root</td>
		</tr>
		<tr>
			<td>chown root.root myfile.txt</td>
			<td>Changes the owner and group of the file to root</td>
		</tr>
		<tr>
			<td rowspan="3"><a href="http://www.ss64.com/osx/chmod.html">chmod</a></td>
			<td></td>
			<td>Changes file access permissions. The set of 3 go in this order from left to right:0 = &#8212; No permission<br/>
		1 = &#8211;X Execute only<br/>
		2 = -W- Write only<br/>
		3 = -WX Write and execute<br/>
		4 = R&#8211; Read only<br/>
		5 = R-X Read and execute<br/>
		6 = RW- Read and write<br/>
		7 = RWX Read, write and execute</td>
		</tr>
		<tr>
			<td>chmod 000 index.html</td>
			<td>No one can access</td>
		</tr>
		<tr>
			<td>chmod g+w index.html</td>
			<td>Adding write access for the &#8220;group&#8221;</td>
		</tr>
		<tr>
			<td>clear</td>
			<td></td>
			<td>Clears the terminal screen</td>
		</tr>
		<tr>
			<td>cmp</td>
			<td>cmp file1.html file2.html</td>
			<td>Compares 2 files and writes the result to the standard output.<br/>
		0 = identical<br/>
		1 = different</td>
		</tr>
		<tr>
			<td rowspan="3">cp</td>
			<td>cp filename filename.backup</td>
			<td>copies filename to filename.backup</td>
		</tr>
		<tr>
			<td>cp -a /home/burst/new_design/* /home/burst/public_html/</td>
			<td>copies all files, retaining permissions form one directory to another.</td>
		</tr>
		<tr>
			<td>cp -av * ../newdir</td>
			<td>Copies all files and directories recurrsively in the current directory INTO newdir</td>
		</tr>
		<tr>
			<td rowspan="3">du</td>
			<td>du -sh ./path</td>
			<td>Size of directory (including all sub-directories) in a human readable format</td>
		</tr>
		<tr>
			<td>du -sh ./path/*</td>
			<td>Size of a directory, grouped by sub-directories</td>
		</tr>
		<tr>
			<td>du -Sh ./path</td>
			<td>Size of a directory, grouped recursively by sub-directories</td>
		</tr>
		<tr>
			<td rowspan="3">echo</td>
			<td>echo &#8220;My text here&#8221; &gt; mynewfile</td>
			<td>Creates a file called &#8216;mynewfile&#8217; with the contents of &#8216;My text here&#8217;</td>
		</tr>
		<tr>
			<td>echo -n &gt; ./myfile</td>
			<td>Empties an existing file</td>
		</tr>
		<tr>
			<td>echo $PATH | tr &#8216;:&#8217; &#8216;\n&#8217;</td>
			<td>Print your environment path values, one for each line</td>
		</tr>
		<tr>
			<td rowspan="4">find</td>
			<td>find -mtime 7</td>
			<td>&#8220;Finds&#8221; files modified in the last 7 days</td>
		</tr>
		<tr>
			<td>find . -mtime -1 -ls</td>
			<td>Finds file modified in the last day</td>
		</tr>
		<tr>
			<td>find / -name &#8216;my.cnf&#8217;</td>
			<td>Finds a file called &#8220;my.cnf&#8221; from the root dir</td>
		</tr>
		<tr>
			<td>find . -maxdepth 2 -name &#8220;myfile*&#8221; -exec cp {} temp.txt \;</td>
			<td>Finds all files from the current location, going to a max depth of 2 where the name is LIKE myfile*. The executes a command (in this case copy), the braces indicate each file/directory found. Then renaming to temp.txt. This is of course a silly example.<br/>
		Note you need the final \;</td>
		</tr>
		<tr>
			<td rowspan="2">git</td>
			<td colspan="2">
		<div class="codecolorer-container text railscasts" style="overflow:auto;white-space:nowrap;"><div class="text codecolorer">git checkout-index -a -f --prefix=/destination/path/</div></div>
		</td>
		</tr>
		<tr>
			<td colspan="2">
		<div class="codecolorer-container text railscasts" style="overflow:auto;white-space:nowrap;"><div class="text codecolorer">git config --global core.excludesfile ~/.gitignore_global</div></div>
		</td>
		</tr>
		<tr>
			<td rowspan="5">grep</td>
			<td></td>
			<td>looks for patterns in files</td>
		</tr>
		<tr>
			<td>grep root /etc/passwd</td>
			<td>shows all matches of root in /etc/passwd</td>
		</tr>
		<tr>
			<td>grep -c mystring myfile.txt</td>
			<td>shows how many matching lines have &#8220;mystring&#8221; in the file</td>
		</tr>
		<tr>
			<td>grep -o &#8220;mystring&#8221; myfile.txt | wc -w</td>
			<td>shows how many occurrences of &#8220;mystring&#8221; are in the file (regardless of line)</td>
		</tr>
		<tr>
			<td>grep -v root /etc/passwd</td>
			<td>shows all lines that do not match root</td>
		</tr>
		<tr>
			<td rowspan="2">history</td>
			<td></td>
			<td>looks up previously entered commands</td>
		</tr>
		<tr>
			<td>!n</td>
			<td>executes line &#8216;n&#8217; of the history record</td>
		</tr>
		<tr>
			<td>java</td>
			<td>java -version</td>
			<td>Provides information on your current java version</td>
		</tr>
		<tr>
			<td>kill</td>
			<td>kill -9 PID</td>
			<td>Terminate a system process</td>
		</tr>
		<tr>
			<td>less <em><em>filename</em></em></td>
			<td>Shift+f</td>
			<td>less a file, then hit Shift-f it will tail the file, but you can scroll back up through the file. Good for scanning recent log file entries without having to grep.</td>
		</tr>
		<tr>
			<td rowspan="3">ls</td>
			<td>ls -lSrh $(find . -type f -name &#8216;*.flv&#8217;)</td>
			<td>find a file type ordering by filesize (smallest first)</td>
		</tr>
		<tr>
			<td>ls -R -1 . | wc -l</td>
			<td>counts the number of files and directories (recursive)</td>
		</tr>
		<tr>
			<td>ls *.pdf | wc -l</td>
			<td>How many files are in a directory</td>
		</tr>
		<tr>
			<td>locate</td>
			<td>sudo /usr/libexec/locate.updatedb</td>
			<td>Manually updates the database</td>
		</tr>
		<tr>
			<td>ln</td>
			<td>ln -s /usr/local/apache/conf/httpd.conf /etc/httpd.conf</td>
			<td>Creates links between files and directories. Now you can edit /etc/httpd.conf rather than the original. changes will affect the orginal, however you can delete the link and it will not delete the original.</td>
		</tr>
		<tr>
			<td rowspan="5">ls</td>
			<td>ls</td>
			<td>list files/directories in a directory, comparable to dir in windows/dos.</td>
		</tr>
		<tr>
			<td>ls -al</td>
			<td>shows all files (including ones that start with a period), directories, and details attributes for each file.</td>
		</tr>
		<tr>
			<td>ls -ld */</td>
			<td>shows all directories (in long format) from the current position</td>
		</tr>
		<tr>
			<td>ls | wc -l</td>
			<td>Count of files in a directory</td>
		</tr>
		<tr>
			<td>ls -lSrh $(find . -type f -name &#8216;*.flv&#8217;)</td>
			<td>List all files (flv in this case) ordered by size, smallest to largest</td>
		</tr>
		<tr>
			<td rowspan="3">mkdir</td>
			<td>mkdir <em>mydirname</em></td>
			<td>Creates new directories</td>
		</tr>
		<tr>
			<td>mkdir -p /dir/subdir/subsubdir</td>
			<td>Creates intermediate directories as required.</td>
		</tr>
		<tr>
			<td>mkdir -v</td>
			<td>Be verbose when creating directories, listing them as they are created.</td>
		</tr>
		<tr>
			<td rowspan="2">more</td>
			<td></td>
			<td>like cat, but opens the file one screen at a time rather than all at once</td>
		</tr>
		<tr>
			<td>more /etc/userdomains</td>
			<td>browse through the userdomains file. hit Spaceto go to the next page, q to quit</td>
		</tr>
		<tr>
			<td>mv</td>
			<td>mv oldfilename newfilename</td>
			<td>Move a file or directory from oldfilename to newfilename</td>
		</tr>
		<tr>
			<td rowspan="4">ps</td>
			<td></td>
			<td>short for process status, which is similar to the top command. It&#8217;s used to show currently running processes and their PID.A process ID is a unique number that identifies a process, with that you can kill or terminate a running program on your server (see kill command).</td>
		</tr>
		<tr>
			<td>ps U username</td>
			<td></td>
		</tr>
		<tr>
			<td>ps aux</td>
			<td>shows all system processes</td>
		</tr>
		<tr>
			<td>ps aux &#8211;forest</td>
			<td>shows all system processes like the above but organizes in a hierarchy that&#8217;s very useful!</td>
		</tr>
		<tr>
			<td rowspan="2">pwd</td>
			<td>pwd</td>
			<td>&#8220;Print Working Directory&#8221;, outputs the path to the current folder location. See &#8220;/bin/pwd&#8221;</td>
		</tr>
		<tr>
			<td>pwd -P</td>
			<td>Prints the absolute working directory when you&#8217;re in a symlinked directory</td>
		</tr>
		<tr>
			<td>openssl</td>
			<td>openssl md5 [filename]</td>
			<td>Verify a file checksum. Replace md5 with &#8220;sha1&#8243; if the hash is sha-1</td>
		</tr>
		<tr>
			<td rowspan="3">rm</td>
			<td>rm filename.txt</td>
			<td>deletes filename.txt, will more than likely ask if you really want to delete it.<br/>
		rm -rf `find . -name .svn`</td>
		</tr>
		<tr>
			<td>rm -f filename.txt</td>
			<td>deletes filename.txt, will not ask for confirmation before deleting.</td>
		</tr>
		<tr>
			<td>rm -rf tmp/</td>
			<td>recursively deletes the directory tmp, and all files in it, including subdirectories. BE VERY CAREFULL WITH THIS COMMAND!!</td>
		</tr>
		<tr>
			<td>scutil</td>
			<td>scutil &#8211;dns</td>
			<td>View local DNS configuration (mac)</td>
		</tr>
		<tr>
			<td>ssh</td>
			<td colspan="2">
				<p>create a new key, specifying the name (good if you already have default keys):
				<br>ssh-keygen -f ~/.ssh/mykey_rsa</p>
				<p>Remove a previously generated known host
				<br>ssh-keygen -R</p>
				<p>See if the ssh-agent is running:
				<br>ps aux | grep [s]sh-agent</p>
				<p>See which keys are loaded:
				<br>ssh-add -l</p>
				<p>Remove a key from the ssh agent
				<br>ssh-add -d ~/.ssh/mykey_rsa</p>
				<p>If your key isn&#8217;t there, load it:
				<br>ssh-add ~/.ssh/mykey_rsa</p>
				<p>Set the correct identity file (if you use more than 1) in your .ssh/config:
				<br>Host myhostname
				<br>HostName domain.com
				<br>PreferredAuthentications publickey
				<br>IdentityFile ~/.ssh/mykey_rsa
				</p>
				<p>Also note above to set <em>PreferredAuthentications</em> to only accept publickey.</p>
				<p>Permissions:
				<br>755 on ~/.ssh
				<br>600 on your public and private keys
				<br>644 on known_hosts and config</p>
			</td>
		</tr>
		<tr>
			<td rowspan="11">svn</td>
			<td>svn delete &#8211;keep-local .project</td>
			<td>Removes file from repo but keeps local copy</td>
		</tr>
		<tr>
			<td>svn diff -r HEAD</td>
			<td>Compare local working copy to HEAD</td>
		</tr>
		<tr>
			<td>svn add &#8211;force ./path</td>
			<td>Forces svn to add new files in a &#8220;path&#8221; that is already under version control</td>
		</tr>
		<tr>
			<td>svn propedit svn:ignore .</td>
			<td>Opens a system editor to edit</td>
		</tr>
		<tr>
			<td>svn log</td>
			<td>Provides basic audit of activity in the repository (best to pipe into less etc as it will get quite long)</td>
		</tr>
		<tr>
			<td>svn log -v</td>
			<td>As above except this time you get a full list of files committed by the user</td>
		</tr>
		<tr>
			<td>svn log -v -r HEAD:1000</td>
			<td>As above except this time you get a full verbose output, from the most recent change (HEAD) to revision number 1000. Again, best to pipe into <em>less</em> etc</td>
		</tr>
		<tr>
			<td>svn log -v &#8211;limit 5</td>
			<td>Limit the log to the last 5 commits</td>
		</tr>
		<tr>
			<td>svn log -r {2012-02-02}:{2012-02-03}</td>
			<td>Show a log between certain dates</td>
		</tr>
		<tr>
			<td>svn log &#8211;xml -v -r 25311:25230 | xsltproc svn2cl.xsl &#8211; &gt; ChangeLog</td>
			<td>Retrieves the svn log (in xml) between revisions, passes to <a href="http://arthurdejong.org/svn2cl/" target="_blank">svn2cl</a> for formatting</td>
		</tr>
		<tr>
			<td>svn st -u</td>
			<td>Shows you what&#8217;s changed in the repo, handy before updating your local copy</td>
		</tr>
		<tr>
			<td>svn diff -r head myfile.html</td>
			<td>Shows you a diff between your local copy and HEAD</td>
		</tr>
		<tr>
			<td>sudo -l</td>
			<td>sudo -l</td>
			<td>What commands can the current user run on this host?</td>
		</tr>
		<tr>
			<td>sudo !!</td>
			<td>sudo !!</td>
			<td>Executes the last command with &#8220;sudo&#8221; added</td>
		</tr>
		<tr>
			<td rowspan="4">tail</td>
			<td></td>
			<td>like cat, but only reads the end of the file</td>
		</tr>
		<tr>
			<td>tail /var/log/messages</td>
			<td>see the last 20 (by default) lines of /var/log/messages</td>
		</tr>
		<tr>
			<td>tail -f /var/log/messages</td>
			<td>watch the file continuously, while it&#8217;s being updated</td>
		</tr>
		<tr>
			<td>tail -200 /var/log/messages</td>
			<td>print the last 200 lines of the file to the screen</td>
		</tr>
		<tr>
			<td rowspan="4">tar</td>
			<td></td>
			<td>Creating and Extracting .tar.gz and .tar files</td>
		</tr>
		<tr>
			<td>tar -zxvf file.tar.gz</td>
			<td>Extracts the file</td>
		</tr>
		<tr>
			<td>tar -cf archive.tar contents/</td>
			<td>Takes everything from contents/ and puts it into archive.tar</td>
		</tr>
		<tr>
			<td>gzip -d filename.gz</td>
			<td>Decompress the file, extract it</td>
		</tr>
		<tr>
			<td>zip</td>
			<td>zip -r archivename.zip filestozip</td>
			<td>Compresses file(s) to a zip</td>
		</tr>
		<tr>
			<td>top</td>
			<td></td>
			<td>shows live system processes in a nice table, memory information, uptime and other useful info. This is excellent for managing your system processes, resources and ensure everything is working fine and your server isn&#8217;t bogged down.<br/>
		top then type Shift + M to sort by memory usage or Shift + P to sort by CPU usage</td>
		</tr>
		<tr>
			<td rowspan="2">touch</td>
			<td></td>
			<td>creates an empty file</td>
		</tr>
		<tr>
			<td>touch index.html</td>
			<td>create an empty file called index.html in the current directory</td>
		</tr>
		<tr>
			<td>unzip</td>
			<td>unzip file.zip</td>
			<td>Extracting .zip files shell command</td>
		</tr>
		<tr>
			<td>wc</td>
			<td>wc -l filename.txt</td>
			<td>tells how many lines are in filename.txt</td>
		</tr>
		<tr>
			<td rowspan="4">wget</td>
			<td>wget &#8211;recursive &#8211;no-clobber &#8211;page-requisites &#8211;html-extension &#8211;convert-links &#8211;restrict-file-names=windows &#8211;domains intranet.bosw2k.com http://intranet.bosw2k.com/</td>
			<td>scrapes an entire site, doesn&#8217;t follow external links</td>
		</tr>
		<tr>
			<td>wget -O &#8211; www.mysite.com</td>
			<td>Retrieves a single page via GET</td>
		</tr>
		<tr>
			<td>wget &#8211;post-data &#8216;param1=value&#8217; -O &#8211; www.mysite.com</td>
			<td>Retrieves a single page via POST and sends parameters</td>
		</tr>
		<tr>
			<td>wget &#8211;server-response &#8211;spider http://www.mysite.com/</td>
			<td>Retrieves the HTTP headers only</td>
		</tr>
		<tr>
			<td class="noborder" colspan="3"> <a name="apache"></a></td>
		</tr>
		<tr>
		<th class="heading" colspan="3">
		<h3>Apache commands</h3>
		</th>
		</tr>
		<tr>
			<td rowspan="3">httpd</td>
			<td>httpd -v</td>
			<td>Outputs the build date and version of the Apache server.</td>
		</tr>
		<tr>
			<td>httpd -l</td>
			<td>Lists compiled in Apache modules</td>
		</tr>
		<tr>
			<td>httpd status</td>
			<td>Only works if mod_status is enabled and shows a page of active connections</td>
		</tr>
		<tr>
			<td rowspan="4">httpd</td>
			<td>sudo apachectl graceful</td>
			<td>If Apache is not already running it will be started. If it is already running then it will reload with the new changes but will not abort active connections, meaning that anyone who is in the middle of downloading something will continue to be able to download it.</td>
		</tr>
		<tr>
			<td>sudo apachectl configtest</td>
			<td>Check your config syntax</td>
		</tr>
		<tr>
			<td>apachectl -M</td>
			<td>what static and shared modules are loaded</td>
		</tr>
		<tr>
			<td>apachectl -l</td>
			<td>what compiled in modules are installed</td>
		</tr>
		<tr>
			<td class="noborder" colspan="3"></td>
		</tr>
		<tr>
		<th class="heading" colspan="3"><a name="mysql"></a></p>
		<h3>MySQL commands</h3>
		</th>
		</tr>
		<tr>
			<td rowspan="4">mysqladmin</td>
			<td>mysqladmin processlist</td>
			<td>Shows active mysql connections and queries</td>
		</tr>
		<tr>
			<td>mysqladmin -uroot -p shutdown</td>
			<td>Shut down the mysql service</td>
		</tr>
		<tr>
			<td>mysqladmin -uroot -p variables</td>
			<td>Shows global vars</td>
		</tr>
		<tr>
			<td>mysqladmin create databasenamehere</td>
			<td>Creates a mysql database</td>
		</tr>
		<tr>
			<td rowspan="10">mysql</td>
			<td>mysql -uroot -p</td>
			<td>Connects to mysql in the terminal</td>
		</tr>
		<tr>
			<td>mysql &#8211;print-defaults</td>
			<td>mysql would have been started with the following arguments:</p>
		<div class="codecolorer-container text railscasts" style="overflow:auto;white-space:nowrap;"><div class="text codecolorer">--port=3306 --socket=/tmp/mysql.sock --default-character-set=utf8<br/>
		--no-auto-rehash --default-character-set=utf8</div></div>
		</td>
		</tr>
		<tr>
			<td>mysql&gt; show databases;</td>
			<td>Shows all databases on the server (once connected)</td>
		</tr>
		<tr>
			<td>mysql&gt; use [database];</td>
			<td>Connects you to a particular database</td>
		</tr>
		<tr>
			<td>mysql&gt; show tables;</td>
			<td>Displays all tables once you have connected to a database</td>
		</tr>
		<tr>
			<td>mysql&gt; show table status;</td>
			<td>Displays table metadata including sizes</td>
		</tr>
		<tr>
			<td>mysql&gt; show variables like &#8220;%character%&#8221;;<br/>
		show variables like &#8220;%collation%&#8221;;</td>
			<td>Shows the server collation and characterset, e.g.<br/>
		+&#8212;&#8212;&#8212;&#8212;&#8212;&#8212;&#8212;&#8212;&#8211;+&#8212;&#8212;&#8212;&#8212;&#8212;&#8212;&#8212;&#8212;&#8212;-+<br/>
		| Variable_name | Value |<br/>
		+&#8212;&#8212;&#8212;&#8212;&#8212;&#8212;&#8212;&#8212;&#8211;+&#8212;&#8212;&#8212;&#8212;&#8212;&#8212;&#8212;&#8212;&#8212;-+<br/>
		| character_set_client | utf8 |<br/>
		| character_set_connection | utf8 |<br/>
		| character_set_database | utf8 |<br/>
		| character_set_filesystem | binary |<br/>
		| character_set_results | utf8 |<br/>
		| character_set_server | utf8 |<br/>
		| character_set_system | utf8 |<br/>
		| character_sets_dir | /usr/share/mysql/charsets/ |<br/>
		+&#8212;&#8212;&#8212;&#8212;&#8212;&#8212;&#8212;&#8212;&#8211;+&#8212;&#8212;&#8212;&#8212;&#8212;&#8212;&#8212;&#8212;&#8212;-++&#8212;&#8212;&#8212;&#8212;&#8212;&#8212;&#8212;-+&#8212;&#8212;&#8212;&#8212;&#8212;&#8211;+<br/>
		| Variable_name | Value |<br/>
		+&#8212;&#8212;&#8212;&#8212;&#8212;&#8212;&#8212;-+&#8212;&#8212;&#8212;&#8212;&#8212;&#8211;+<br/>
		| collation_connection | utf8_general_ci |<br/>
		| collation_database | utf8_general_ci |<br/>
		| collation_server | utf8_general_ci |<br/>
		+&#8212;&#8212;&#8212;&#8212;&#8212;&#8212;&#8212;-+&#8212;&#8212;&#8212;&#8212;&#8212;&#8211;+</td>
		</tr>
		<tr>
			<td>mysql&gt; show create table tablename;Shows create statement with keys and indexes</td>
		</tr>
		<tr>
			<td>mysql&gt; show variables like &#8220;character_set_database&#8221;;</td>
			<td>Shows characterset of a specific database+&#8212;&#8212;&#8212;&#8212;&#8212;&#8212;&#8212;&#8212;+&#8212;&#8212;-+<br/>
		| Variable_name | Value |<br/>
		+&#8212;&#8212;&#8212;&#8212;&#8212;&#8212;&#8212;&#8212;+&#8212;&#8212;-+<br/>
		| character_set_database | utf8 |<br/>
		+&#8212;&#8212;&#8212;&#8212;&#8212;&#8212;&#8212;&#8212;+&#8212;&#8212;-+</td>
		</tr>
		<tr>
			<td>mysql&gt; show full columns from vocab_scot;</td>
			<td>+&#8212;&#8212;-+&#8212;&#8212;&#8212;&#8212;&#8211;+&#8212;&#8212;&#8212;&#8212;&#8212;&#8211;+&#8212;&#8212;+&#8212;&#8211;+&#8212;&#8212;&#8212;+&#8212;&#8212;&#8212;&#8212;&#8212;-+&#8212;&#8212;&#8212;&#8212;&#8212;&#8212;&#8212;&#8212;&#8212;&#8212;&#8212;+&#8212;&#8212;&#8212;+<br/>
		| Field | Type | Collation | Null | Key | Default | Extra | Privileges | Comment |<br/>
		+&#8212;&#8212;-+&#8212;&#8212;&#8212;&#8212;&#8211;+&#8212;&#8212;&#8212;&#8212;&#8212;&#8211;+&#8212;&#8212;+&#8212;&#8211;+&#8212;&#8212;&#8212;+&#8212;&#8212;&#8212;&#8212;&#8212;-+&#8212;&#8212;&#8212;&#8212;&#8212;&#8212;&#8212;&#8212;&#8212;&#8212;&#8212;+&#8212;&#8212;&#8212;+<br/>
		| id | int(11) | NULL | NO | PRI | NULL | auto_increment | select,insert,update,references | |<br/>
		| term | varchar(200) | utf8_general_ci | NO | UNI | NULL | | select,insert,update,references | |<br/>
		| uri | varchar(200) | utf8_general_ci | NO | | NULL | | select,insert,update,references | |<br/>
		+&#8212;&#8212;-+&#8212;&#8212;&#8212;&#8212;&#8211;+&#8212;&#8212;&#8212;&#8212;&#8212;&#8211;+&#8212;&#8212;+&#8212;&#8211;+&#8212;&#8212;&#8212;+&#8212;&#8212;&#8212;&#8212;&#8212;-+&#8212;&#8212;&#8212;&#8212;&#8212;&#8212;&#8212;&#8212;&#8212;&#8212;&#8212;+&#8212;&#8212;&#8212;+</td>
		</tr>
		<tr>
			<td rowspan="6">mysqldump</td>
			<td>mysqldump -hdb.example.com -uusername -p mydbname | gzip &gt; mydbname.sql.gz</td>
			<td>Back&#8217;s up a database and compresses to a .gz file</td>
		</tr>
		<tr>
			<td>mysqldump &#8211;no-data -h db.example.com -u username -p mydbname &gt; myschema.sql</td>
			<td>Generates schema, no data</td>
		</tr>
		<tr>
			<td>mysqldump -h 127.0.0.1 -u myusername -p &#8211;single-transaction mydatabase | gzip &gt; mydatabase.sql.gz</td>
			<td>Back&#8217;s up a database without locking tables (innoDB only)</td>
		</tr>
		<tr>
			<td>mysqldump -h 127.0.0.1 -u myusername -p &#8211;lock-tables=false mydatabase | gzip &gt; mydatabase.sql.gz</td>
			<td>Back&#8217;s up a database without locking tables (MyISAM only)</td>
		</tr>
		<tr>
			<td>mysqldump &#8211;compatible=ansi -h127.0.0.1 -umyuser -p mydatabase | gzip &gt; mydatabase.sql.gz</td>
			<td>Back&#8217;s up a database with ansi compatibility, meaning syntax will hopefully be more consistent and less likely to barf</td>
		</tr>
		<tr>
			<td>mysqldump -umsharman -p &#8211;ignore-table=mydatabase.tablename mydatabase | gzip &gt; mydatabase.sql.gz</td>
			<td>Dumps a database ignoring a specific table</td>
		</tr>
		<tr>
			<td rowspan="3">gunzip</td>
			<td>gunzip &lt; [mydbname.sql.gz] | mysql -u[uname] -p[pass] mydbname</td>
			<td>Restores a database</td>
		</tr>
		<tr>
			<td>mysql -uroot dbname &lt; &lt;(cat *sql)</td>
			<td>Restores a database if you have an sql file per table</td>
		</tr>
		<tr>
			<td>cat &lt; mydb.sql | mysql -uroot dbname</td>
			<td>Runs sql file against a database</td>
		</tr>
		<tr>
			<td class="noborder" colspan="3">To set the default to UTF-8, you want to add the following to my.cnf</p>
		<div class="codecolorer-container text railscasts" style="overflow:auto;white-space:nowrap;"><div class="text codecolorer">[client]<br/>
		default-character-set=utf8</div></div>
		<p>[mysql]<br/>
		default-character-set=utf8[mysqld]<br/>
		default-character-set = utf8<br/>
		collation-server = utf8_unicode_ci<br/>
		init-connect=&#8217;SET NAMES utf8&#8242;<br/>
		character-set-server = utf8</td>
		</tr>
		<tr>
			<td class="noborder" colspan="3"></td>
		</tr>
		<tr>
		<th class="heading" colspan="3"><a name="nano"></a></p>
		<h3>Nano commands</h3>
		</th>
		</tr>
		<tr>
			<td>ctrl + space</td>
			<td>or ctrl + shift + alt</td>
			<td>Moves forward 1 word</td>
		</tr>
		<tr>
			<td>ctrl + j</td>
			<td></td>
			<td>justifies the current paragraph</td>
		</tr>
		<tr>
			<td>ctrl + a</td>
			<td></td>
			<td>moves to start of line</td>
		</tr>
		<tr>
			<td>ctrl + o</td>
			<td></td>
			<td>saves file to disk</td>
		</tr>
		<tr>
			<td>ctrl + e</td>
			<td></td>
			<td>moves to end of line</td>
		</tr>
		<tr>
			<td>ctrl + v</td>
			<td></td>
			<td>moves down a screen</td>
		</tr>
		<tr>
			<td>ctrl + y</td>
			<td></td>
			<td>moves up a screen</td>
		</tr>
		<tr>
			<td>ctrl + c</td>
			<td></td>
			<td>shows where cursor is (handy if you&#8217;ve moved down pages etc)</td>
		</tr>
		<tr>
			<td>ctrl + k</td>
			<td></td>
			<td>deletes current line</td>
		</tr>
		<tr>
			<td>ctrl + shift + _ (or ctrl + _)</td>
			<td></td>
			<td>go to line</td>
		</tr>
		<tr>
			<td>ctrl + \</td>
			<td></td>
			<td>find and replace</td>
		</tr>
		<tr>
			<td>ctrl + g</td>
			<td></td>
			<td>help</td>
		</tr>
		<tr>
			<td>ctrl + w (or F6)</td>
			<td></td>
			<td>search</td>
		</tr>
		<tr>
			<td>ctrl + ^</td>
			<td></td>
			<td>&#8220;marks&#8221; a spot for selecting text (to copy etc) up to where you move your cursor. If you mess up, hit ctrl + ^ again to &#8220;unmark&#8221; your selection</td>
		</tr>
		<tr>
			<td>ctrl + k</td>
			<td></td>
			<td>Cutting text (selected with ctrl + ^)</td>
		</tr>
		<tr>
			<td>ctrl + u</td>
			<td></td>
			<td>Pastes text cut with ctrl + k</td>
		</tr>
	</tbody>
</table>
</figure>
