---
layout: lab
title: Preparing the Environment
subtitle: How to prepare an environment for a workshop
html_title: Preparing the Environment
categories: [lab, intro, welcome, developers, ops]
---

## Creating users
For the workshop you will want a headcount of how many people will be there.  Each person should have their own unique username and the team should be configured so they can only see the content they created.  


## Creating the Workshop Team.
<blockquote>
<i class="fa fa-desktop"></i> Log into your platform and go to the home screen.
</blockquote>
<img src="{{ site.baseurl }}/www/4.2/default/screenshots/rhmap-homepage.png" width="600"/><br/>

<blockquote>
<i class="fa fa-desktop"></i> Navigate to Admin page
</blockquote>
<img src="{{ site.baseurl }}/www/4.2/default/screenshots/rhmap-adminpage.png" width="600"/><br/>
<blockquote>
<i class="fa fa-desktop"></i> Click <b>Teams</b>
</blockquote>
<blockquote>
<i class="fa fa-desktop"></i> Click <b>Create Team</b>
</blockquote>
<blockquote>
<i class="fa fa-desktop"></i> Name your team: Workshop
</blockquote>
Once you create your team it will take you to the dashboard.  Click **Edit Permissions >>**
<img src="{{ site.baseurl }}/www/4.2/default/screenshots/rhmap-team-permissions.png" width="600"/><br/>

## Editing Permissions for the team.
The goal of the permissions is to give the users access to the entire workshop environment except for existing content and user/team permissions.
<blockquote>
<i class="fa fa-desktop"></i> Select <b>Domain</b>.  Turn off Inherit Permissions and Select <b>View & Edit</b>.
</blockquote>
<blockquote>
<i class="fa fa-desktop"></i> Expand <b>Admin</b> so both <b>User</b> and <b>Team</b> are visible.
</blockquote>
<blockquote>
<i class="fa fa-desktop"></i> On both User and Team: Turn off Inherit Permissions and Select <b>No Access</b>.
</blockquote>
<blockquote>
<i class="fa fa-desktop"></i> Select <b>Project</b>.  Set <i>Access All</i> to off.
</blockquote>
<blockquote>
<i class="fa fa-desktop"></i> Add any projects you wish to be able to show your workshop members.
</blockquote>
<blockquote>
<i class="fa fa-desktop"></i> Select <b>Form</b>. Add any forms you wish to be able to show your workshop members.
</blockquote>
<blockquote>
<i class="fa fa-desktop"></i> Select <b>Theme</b>. Add any form themes you wish to be able to show your workshop members.
</blockquote>

## Adding users through the web console
<blockquote>
<i class="fa fa-desktop"></i> Navigate to Admin page
</blockquote>
<blockquote>
<i class="fa fa-desktop"></i> Click <b>Users</b>
</blockquote>
<blockquote>
<i class="fa fa-desktop"></i> Click <b>Create</b>
</blockquote>

This will take you to the *Create a User* page.  You will need to fill out all information: User ID, Password, Email Address, Name.  Use highly recognizable information for each of these fields.  

For example for
* name: workshop1, workshop2, workshop3, etc.
* password: YourUniquePassword
* email: workshop1@redhat.com,workshop2@redhat.com, workshop3@redhat.com, etc.
* name: WorkshopUser1, WorkshopUser2, WorkshopUser3, etc.

<blockquote>
<i class="fa fa-desktop"></i>  Assign each user you create to the Workshop Team.
</blockquote>

<blockquote>
<i class="fa fa-desktop"></i>  Click <b>Create User</b> and repeat these steps for as many workshop users you will need.
</blockquote>
```
Note: You will only have to do this once.
```
