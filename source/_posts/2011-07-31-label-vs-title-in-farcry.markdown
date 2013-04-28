---
comments: true
date: 2011-07-31 23:16:01
layout: post
slug: label-vs-title-in-farcry
title: Label vs Title in FarCry
wordpress_id: 989
categories:
- Farcry
---

All system content objects (and those custom types which extend "types" or "versions" etc) in FarCry have the "label" and "title" properties. Most of the time the value of these are identical, I find myself typically using the "title" property in formtools as well as any display methods. The question of course is why have both these if they're always exactly the same?

A note on the FarCry forums suggested that this was a handy way split what you might want to use in a display method vs an admin screen or any other scenario etc. Well today I had need to do exactly this, and combined with some of the custom metadata for your _type components_ I've found that this is yet another simple but powerful feature of FarCry core.

## Scenario

I have a custom type, a "topic". Now these topics have titles but also "codes" associated with them. Sometimes I'll want to output just the title, but sometimes I'll want to output the code + title together. Sure _stObj_ gives me the simple ability to access these singularly, but having the ability to store this composite value in the label field (as well as the single title in the "title" field) gives me freedom to display this in places like the object admin screen, generic nav, breadcrumbs etc. Very very nice.

## How

Ok first you need to enable auto labels for your type:

	<cfcomponent extends="farcry.core.packages.types.versions" displayname="ACE Topic" bUseInTree="0" bFriendly="1" fuAlias="acetopic" bObjectBroker="0" bAutoSetLabel="true">

Then for each property you'd like combined for your label, set a _bLabel_ attribute to true.

	<cfproperty name="Code" type="string" required="no" default="" ftSeq="1" ftwizardStep="Content" ftValidation="required" ftFieldset="General Details" bLabel="true">

	<cfproperty name="Title" type="string" hint="Title of content item." required="no" default="" ftSeq="2" ftwizardStep="Content" ftFieldset="General Details" ftValidation="required" bLabel="true">

What this now does (after you edit a content object) is save the "code + title" in the label field. Cool :)
