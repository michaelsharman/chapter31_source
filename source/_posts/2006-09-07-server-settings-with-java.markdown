---
comments: true
date: 2006-09-07 00:39:11
layout: post
slug: server-settings-with-java
title: Server settings with Java
wordpress_id: 26
categories:
- ColdFusion
---

Here are a couple of ways which you can determine the name of the JRun instance you are running as well as the server name of the Application server. Here at [Daemon](http://www.daemon.com.au/) we use these quite a bit in our more complex project environments.


``` javascript
<!--- get the machine (server) name --->
<cfset variables.serverName = createObject("java", "java.net.InetAddress").localhost.getHostName() />

<!--- get the JRun instance name --->
<cfset variables.instanceName = createObject("java", "jrunx.kernel.JRun").getServerName() />

<cfoutput>
    Server: #variables.serverName#
    <br /> 
    JRun Instance: #variables.instanceName#
</cfoutput>
```


Nice :)



