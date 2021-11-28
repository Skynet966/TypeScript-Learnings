# TypeScript-Learnings

This is a project to make understand advance
concepts of TS and build a working Web framework with the use of Typescript.

#### Run cmd: parcel index.html

## Project Description

We have two types of classes **Model** and **View** they both have diffrent functionlity in our project.

Typescript has a distinct OOP style

Many popular JS libs were written before JS ahad any solid idea of 'classes'

Integrating TS with popular JS libs can be tough

TS with JS libs
use the lib normally, adding in basic type annotations where possible
Use a TS adapter library that has helpers for using your lib with TS
Twist your lib to work with TS classes

Integration Issues

##### CONS

###### Type defination files alone can't express what is going on in the JS world accurately (example: middleware)

###### Type defination files provided to us aren't always accurate

###### Inputs to a server (or any program with external inputs) are not guaranteed to exist, or be of the correct type.

##### PROS

###### Addressing these type issues with Typescript can force us to write better code.

TS with JS libs

User the lib normally, adding in basic type annotations where possible.

Use a TS adapter library that has helpers for using your lib with TS

Twist your lib to work with TS classes.

Massaging TS and Express to work better together will take a lot of time + effor

Must get one of two outcomes

Get better type safety (help TS do a better job of catching erros)
Significantly enhance the developer experience.
