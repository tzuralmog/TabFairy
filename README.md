# Overview
The objective of TabFairy is to extend the Mozilla Firefox web browser with features that would allow users to keep tabs organized while surfing the internet. 
For many users, organizational challenges occur when they try to open too many tabs. The tab bar quickly becomes cluttered, and since there is only so much space 
in the tab bar, the tab titles become smaller and unreadable. Finding a needed tab becomes a challenging process. It becomes nearly impossible to achieve a productive 
workflow, especially if working on several projects that require working with many tabs.One method to keep the tabs organized is to designate separate Firefox windows 
for different projects. The user might keep several windows running for the duration of the projects. While this solution is better than using just a single Firefox 
window, it adds the additional organizational challenge of switching between windows. It becomes even more difficult to transition between windows if multiple other 
programs are running simultaneously.

# Installation and Running
We are developing TabFairy using the Node.js runtime environment; clone this package and [install Node.js and npm](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm). Execute with 
    
    node main.js
    
To view the extension as a temporary installation, open a Firefox window and follow these steps:

1. In the address bar launch about:debugging page.
2. Click "This Firefox" at the top left.
3. Click "Load Temporary Add-on" at the top right.
4. Select manifest.json file located in the webextensions folder of a cloned repository on your local machine.

TabFairy sidebar should now be visible at the left of the browser panel.

    
# Build History
We are using Travis CI for testing.  The build history can be accessed [here](https://travis-ci.com/github/tzuralmog/TabFairy/builds).
