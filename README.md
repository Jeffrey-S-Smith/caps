# caps

## CAPS

Phase 1: Begin the build of an application for a product called CAPS - The Code Academy Parcel Service. In this sprint, we’ll build out a system that emulates a real world supply chain. CAPS will simulate a delivery service where vendors (such a flower shops) will ship products using our delivery service and when our drivers deliver them, each vendor will be notified that their customers received what they purchased.

This will be an event driven application that “distributes” the responsibility for logging to separate modules, using only events to trigger logging based on activity.

The following user/developer stories detail the major functionality for this phase of the project.

- As a vendor, I want to alert the system when I have a package to be picked up.
- As a driver, I want to be notified when there is a package to be delivered.
- As a driver, I want to alert the system when I have picked up a package and it is in transit.
- As a driver, I want to alert the system when a package has been delivered.
- As a vendor, I want to be notified when my package has been delivered.

## Testing

Write a complete set of tests for all functional units and modules
Your tests must be running green on Github Actions
[TESTS](./__tests__)

## Documentation

Compose a UML or Process/Data Flow Diagram for every application
UML Reference
![UML](img/lab%2011.png)
This should be the first thing you do when beginning work on a lab assignment.
Draw the process/data flow of your application and map it to the code you will need to write or evaluate/fix.

## Web Socket

![UML](img/lab12.png)

## Deployment

How do I install the app or library?
Clone this app and install all dependencies.

How do I test the app or library?
Run "NPM test" in the terminal once all dependencies are installed.

For Applications:
How do I run the app?
You can run the app on your local terminal.
How do I set up the app?
Be sure to install all dependencies.

## Testing

Write a complete set of tests for all functional units and modules

You can run [npm test] on the terminal to run tests:
 testing event handlers
    ✓ Driver should confirm package was picked up
    ✓ Driver should confirm package is delivered
    ✓ Vendor should confirm package was received

You must open the server and, at least, one client in order to have the sockets communicating.

[Heroku](https://smith-caps.herokuapp.com/caps) 

Heroku instruction code to start up server : node driver/index.js

Local Server: node global/app.js

