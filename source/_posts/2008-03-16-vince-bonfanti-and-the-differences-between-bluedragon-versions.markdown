---
comments: true
date: 2008-03-16 04:47:42
layout: post
slug: vince-bonfanti-and-the-differences-between-bluedragon-versions
title: Vince Bonfanti and the differences between BlueDragon versions?
wordpress_id: 205
categories:
- BlueDragon
- ColdFusion
---

More news on the differences between the commercial and open source offerings for Blue Dragon on [Vince Bonfanti's blog](http://blog.newatlanta.com/index.cfm?mode=entry&entry=721992F3-B1B8-4975-8E3A1D3EB33AA435) as well as the [New Atlanta forums](http://forums.newatlanta.com/messages.cfm?threadid=B46928CD-9285-40B6-A9661BE30A4E512D);

"The free open source edition of BlueDragon/J2EE will be fully featured, with only minor differences to remove dependencies on commercial libraries."

Vince elaborated more on the NA Product forums:



> There will be three differences between the commericial and open source editions of BlueDragon/J2EE:

> 1) The JTurbo JDBC driver for Microsoft SQL Server will not be included with the open source edition. JTurbo is a commercial product of New Atlanta's that we are choosing not to release as open source. However, we plan to add support for Microsoft's free JDBC driver for SQL Server (http://msdn2.microsoft.com/en-us/data/aa937724.aspx) so there should be no loss of functionality for the open source edition.
>
> 2) The CFDOCUMENT implementation is based on commercial libraries from ICEsoft Technologies Inc. (http://www.icesoft.com/) that cannot be included with the open source BD edition. We are investigating whether it will be possible to keep the "hooks" for the ICEsoft libraries in the open source BD edition, and then allow customers to purchase the libraries for ICEsoft if they need this feature.
>
> 3) The BD admin console contains New Atlanta trademarks and copyrighted material for which we do not wish to relinquish our intellectual property rights (for similar reasons that RedHat removes its trademarks and copyrighted material from Fedora). Therefore, the open source BD edition will not include the existing admin console and will need to be configured by editing the XML configuration file (bluedragon.xml). We expect that one of the first tasks identified by the BD open source steering committee will be the creation of a new admin console (but maybe not, hand-editing configuration files is pretty standard in the open source world). Certainly we'll need to provide documentation on how to edit bluedragon.xml.
>
> That's it. Those will be the only three differences between the open source and commercial editions of BD/J2EE.

That's really pretty exciting, especially if cfdocument is really the only 'functional' tag which won't be included but you'll still have the option to get a "plugin" from a commercial package. Nice.

I really recommend reading [Vince's post](http://blog.newatlanta.com/index.cfm?mode=entry&entry=721992F3-B1B8-4975-8E3A1D3EB33AA435) where he addresses some of the community feedback from the last week or so.

One thing I really want to see is some good (recent) benchmarks detailing performance of [BlueDragon](http://www.newatlanta.com/products/bluedragon/index.cfm) vs [ColdFusion](http://www.adobe.com/products/coldfusion/) vs [Railo](http://www.railo.ch/) (all with the latest releases of each). I've read in the past that BlueDragon and Railo were at least holding their (in terms of performance) against CF, but with recent releases across the board it would be excellent to get some updated numbers.

Of course with 3+ CF engines out there (well 4 as we're not forgetting [Smith](http://www.smithproject.org/)!) it may come down to price vs features for each, maybe Adobe will have an edge here particularly if they can leverage features from the rest of their product range into CF Server.

The good thing is that competition is great for the end users and if ColdFusion 8 is the most successful release in its history, you can be sure that Adobe don't want any other ColdFusion "Server" vendors grabbing a slice of their pie.

One things for sure...it's a great time to be developing in "ColdFusion" whatever flavour of server you choose!
