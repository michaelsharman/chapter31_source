---
layout: post
title: "Stopping a remote process after killing an ssh session"
date: 2013-05-05 11:19
comments: true
categories:
- shell
- ssh
---
I often want to tail log files on remote server(s) when running diagnostics for an application. You can either login to the remote server via an SSH session, then execute the _tail_ command. Or you can do it from a local shell (without explicitly logging onto the remote server first). That's pretty simple:

```bash
ssh myRemoteServer tail -f /path/to/logs/myapp.log
```

The problem here, is when you ctrl-c out of this command to kill the _tail_, the process is still running on the remote machine. Some googling told me that this is because of the lack of a controlling terminal for the running process.

From [superuser.com](http://superuser.com/a/20708):

	This behaviour stems from the lack of a controlling terminal for the running process.
	When the remote process does not have a controlling terminal, the remote ssh process handling your session
	is unable to kill the command, which is left hanging in a zombie state to be eventually cleaned up by init.

So although the process on the remote server(s) will eventually be cleaned up, it's not great to leave a lot of zombie processes lying around. And you certainly don't want to logon to every server and _ps ax_ to kill them. Crazy.

The answer, as described on superuser, is that you simply add the _-t_ flag when you connect via SSH from a local terminal. Essentially that makes the remote process terminate when you ctrl+c your tail locally.

So for the initial example at the top:

```bash
ssh -t myRemoteServer tail -f /path/to/logs/myapp.log
```

I often use [multitail](http://www.vanheusden.com/multitail/) a lot because it facilitates tailing log files on a remote servers from one command, a sample multi-tail script is now (with _-t_):

```bash
#!/bin/bash

multitail -l "ssh -t myRemote1 tail -f /path/to/logs/myapp.log" \
        -l "ssh -t myRemote2 tail -f /path/to/logs/myapp.log"
```
