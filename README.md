# TypeScript-Learnings

This is a project to make understand advance
concepts of TS and build a working Web framework with the use of Typescript.

#### Run cmd: parcel index.html

## Project Description

We have two types of classes **Model** and **View** they both have diffrent functionlity in our project.

#### Model Classes

Handle data, used to represent Users, Blog Posts, Images, etc.

#### View Classes

Handle HTML and events caused by the user like _clicks, typing, hitting enter key, etc_.

## User Class

private data: UserProps :- Object to store information about a particular user (name, age).

get(propName:string):(string| number) :- Gets a single piece of info about this user (name, age).

set(update: UserProps):void :- Changes information about this user (name, age).

on(eventName:string,callback:()=>{}) :- Registers an event handler with this object, so other parts of the app know when something changes.

trigger(eventName: string): void :- Triggers an event to tell other parts of the app that something has changed.

fetch(): Promise :- Fetches some data from the server about a particular user.

save(): Promise :- Saves some data about this user to the server.

// In Typescript, strings can be types <==> In JS (and therefore TS), all object keys are strings

#### Rendering Timeline

###### ˅ Call _'render'_ method

###### ˅ Render calls _'template'_, gets HTML sring

###### ˅ Render inserts HTML string into a template element

###### ˅ WE should somehow bind event handler to the HTML in there

###### ˅ Render inserts content of template into DOM
