# To-Dos
My first JavaScript project - To-Do's .

## About
This is a Todo List project on javascript based upon the course: [Practical JS by Gorden Zhu](https://watchandcode.com/p/practical-javascript). The Code here have various extended features from the one in course like 'empty input handler' and each function is enclosed in an object.

## Description
The todos.js is the scripting file called in the index.html and have **three objects** : 
### 1. todoList:
Contain an array of object for todo items having two properties: text(string) and completed(boolean). It also contain all the function on the todo item array like adding, deleteing, changing text of existing todo, toggle completed property and toggle all.
### 2. handler:
It is an object having all the functions called by the events like button clicking. It also have the handlers for generating alert when empty or unaccepted input is given.
### 3. view:
The functions of this object is used by handler for creating and updating the html which is viewed to the user. The methods are for displaying todo items and for creating a delete and toggle button for each item seperatly.

## NOTE:
**TOGGLE AND DELETE CAN BE DONE EITHER VIA SEPERATE BUTTONS FOR EACH ITEM OR BY SPECIFING INDEX IN THE INPUT FIELD AND THE INDEXING IS DONE FROM 0!**

## Acceptable Changes (PRs)
1. Most important changes are welcomed in UI(Obviously!).
2. Any improvement in JS file for adding or improving thing are also appreciated.

**Also, If you have an idea regarding any improvement you can create an issue so that other interested ones can work open it.**
