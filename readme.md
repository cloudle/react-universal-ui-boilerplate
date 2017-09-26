# React Universal UI  Boilerplate

[react-native-url]: https://facebook.github.io/react-native/
[react-native-web-url]: https://github.com/necolas/react-native-web
[react-universal-ui-url]: https://npmjs.org/package/react-universal-ui

## Overview
#### A boilerplate for cross-platform React project - which let you run your [React Native][react-native-url] App on both Native (iOs, Android) and Web

Extending [React Native][react-native-url]'s initial structure using [react-native-web][react-native-web-url] and UI components form [react-universal-ui][react-universal-ui-url].

## Usage
```
git clone https://github.com/cloudle/react-universal-ui-boilerplate.git
cd react-universal-ui-boilerplate
npm install
npm run web-vendor
npm run web
```

## Notes for Native run
React native boilerplate code use vector-icons packages which need to link it's asset to native module.. so we'll need to run this as well:
```
react-native link
```
after it, we'll be able to safely run our app on native with `react-native run-ios` or `react-native run-android`

**`web-vendor`** builds webpack's shared-dll which massively increase rebuild time for hot-reloading our code.
*(Under* **200ms** *in my machine, which is quite close to React Native's rebuild).*

## Run modes
```
npm run [web | web-vendor | ios | android]
```
