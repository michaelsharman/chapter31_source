---
comments: true
date: 2007-01-11 12:19:57
layout: post
slug: to-delete-or-not-to-delete
title: To delete or not to delete
wordpress_id: 95
categories:
- ColdFusion
- Databases
---

As a web developer you are constantly faced with building functionality to remove an object from an application. The object could be anything from a web page in a CMS to a user in a CRM, but generally involves a record(s) stored in a database.

For a user 'using' the application whenever they access the functionality to remove the object it disappears from view...but what happens behind the scenes?

There are a couple of standard options available to developers:




	
  1. To actually delete the object from the database via a DELETE statement

	
  2. To flag the object as deleted (via an UPDATE statement) and have code to handle the 'removal' in a view accordingly



Deleting the record(s) is nice and easy and most likely no other code will be needed in your 'view', but there are schools of thought where people never (or rarely) physically delete a record from the database even if you do have backups to access at a later date. The main reason for this is that somebody (particularly an administrator) might be interested in all sorts of information on the history of that object, who removed it (and when) and the ability to rollback that object to an active state.

It's this approach to web applications which I almost always follow. I rarely delete objects from the database, opting to flag the record instead. But this _can_ lead to a lot more time spent completing the project, which could mean a later 'go live' date. 

Consider that a HUGE portion of your application code is (or should) be taken up by defensive programming like exception handling and safety from malicious intent etc, how much extra code might you spend on keeping these removed (so presumably no longer relevant) objects?

Of course each scenario is different as are the business requirements of a client, but even if a client assuring you that "we'll never need it again!", I'd have a long and hard think before actually physically deleting anything. After all, we are professionals and need to think ahead to what the client may need in the future. Your 'expert' advise should always be considered and put forward, even if it is the unpopular view.

How much extra time spent will of course differ in each scenario but you'll clearly need to have your SQL statements to filter out these records (eg. WHERE IsDeleted Is Null). This will most likely need to be done on any gateway type query which is run on the table(s) in question.

Do you need to build in an audit trail for tracking which user deleted the object, when they deleted it and have mandatory comments on why they deleted it?

Do you need to have the ability to rollback to an active state?

In the above 2 scenarios you'll probably need an interface to access this data as well.

Business logic might also add another layer of complexity (the catalyst for this post) to the question which is "to delete or not to delete".

I'm still a fan of storing the data for most operations, but in an age of agile/extreme programming, more and more pressure to get the job done in half the time and a great mantra of "release early, release often"...sometimes you may need to ask yourself if you really need to keep this data :)


