---
layout: lab
title: Preparing the Environment
subtitle: How to prepare an environment for a workshop
html_title: Preparing the Environment
categories: [lab, intro, welcome, developers, ops]
---

## Preparation
For the workshop you will want a headcount of how many people will be there.  Take note of which user accounts each workshop participant is provided as we will need to clean up the environment after the workshop.  

## Deployment of the workshop contents
Workshop contents can be deployed locally on each workshop participants laptop or straight from github.io.  If on a network that can access the internet, we highly recommend using github.io.

You can access the url for the workshop by going to this url:
```
http://<branch's username>.github.io/rhmap-workshops/
```

If we are in a location with no external internet connection we can deploy the workshop using Jekyll.  

## Installing Jekyll
We only need to install jekyll on the machines if we are providing this demo at a location with no external internet.  You will need to install a few prerequisites before you can use Jekyll.  

1. Install Ruby Version 2.0 or above, including all development headers
2. RubyGems
3. GCC and Make (in case your system doesn’t have them installed, which you can check by running gcc -v and make -v in your system’s command line interface)

Once all the prerequisites have been installed run the following commands in the workshop directory.
<blockquote>
<i class="fa fa-terminal"></i> $ gem install jekyll
</blockquote>
<blockquote>
<i class="fa fa-terminal"></i> $ cd docs
</blockquote>
<blockquote>
<i class="fa fa-terminal"></i> $ jekyll serve --baseurl=""
</blockquote>

##You will need to run through
the workshop yourself and name each project and app generically so we can share this to the workshop attendees.  

##Creating the Workshop Team.
