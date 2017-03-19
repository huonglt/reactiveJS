This is a starter for reactive javascript.

It is based on ping-pong example from https://github.com/cyclejs-community/redux-cycles

However, I found this example very hard to follow for someone who just has a glimpes about reactive programming.

I complete the example above with all the setup required, and clean code.

What am I using here:
- redux: for state management
- redux-cycles: for reactive handling of Redux Actions

This app is running in node environment.

To support module import ES 6 in node v7, I'm using babel-plugin-transform-es2015-modules-commonjs

To see how reactive RxJs handle asynchronous HTTP request, checkout client/cycles/userRepo.js
To see how reactive Rxjs handle simple synchronous logic, checkout client/cycles/pingPong.js 

I started with reactive programing from java. And really enjoy it.

## Prerequisite
node & yarn preinstalled

- brew install node
- brew install yarn

I'm using node v7.5.0, yarn v0.20.3

## Install dependencies before you start
yarn install

## To start
yarn start
