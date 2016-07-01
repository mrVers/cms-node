# A simple Node.js CMS

A simple Node.js CMS w/ Angular made for SAE assignment.

![Node CMS](http://i.imgur.com/yzNBNq3.png)

### Requirements

* Node.js
* MongoDB ``` $ mongod ``` in background
* Bower and Grunt

## Installation
In /api/ folder:

```bash
$ npm install
```

In /app/ folder:

```bash
$ npm install
$ bower install
```

## Running
The project has two parts, the API and the actual APP.
Make sure you have ``` $ mongod ``` running in background.

#### API
In /api/ folder run
```
$ node run
```
The server will run on port 3333.
```
http://localhost:3333/
```

#### APP
In /app/ folder run
```
$ grunt serve
```
View the app running on port 9001.
```
http://localhost:9001/
```
