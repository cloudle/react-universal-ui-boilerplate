# React Universal UI Boilerplate

[react-native-url]: https://facebook.github.io/react-native/
[react-native-web-url]: https://github.com/necolas/react-native-web
[react-universal-ui-url]: https://npmjs.org/package/react-universal-ui

#### A boilerplate for cross-platform React project - which let you run your [React Native][react-native-url] App on both Native (iOs, Android) and Web

Extending [React Native][react-native-url]'s initial structure using [react-native-web][react-native-web-url] and UI components form [react-universal-ui][react-universal-ui-url].

## New updates:
- Boost up build speed (first time build massively faster)
- Allow skip common chunks (`yarn web-vendor` step)  which always required on `legacy` version (however it is still highly recommended to use)
- Improves `cli` message, `hot-loader` for Browser `development-server`
- Update to latest version of React, React Native ;)
- Most up to date `iOs` and `Android` project template (by `react-native-cli`)  
- Official Windows support!

## Getting started
```
git clone https://github.com/cloudle/react-universal-ui-boilerplate.git
cd react-universal-ui-boilerplate
yarn install
yarn vendor
yarn web
```

### Boost first-launch and hot-reload time!
Run `yarn vendor` once to get commons library Chunks get cache and reuse..
before run our `yarn web` make our development server rebuild faster (should be under `200 milliseconds`)!

That really save our time and money.

##### *note: `yarn vendor` cache our common library (e.g react, react-dom) into reusable chunks, that also mean it won't get updated when we install newer version of those packages (see webpack.vendor.js for more information).

## Full command list
- `yarn vendor` build common chunks to reuse to boost our rebuild time ;)
- `yarn web` launch our development server.
- `yarn bundle` release our production build under `web` directory.
- `yarn ios`, `yarn android` quick alias which launch our `iOs` or `Android` emulator.
- `yarn test`, `yarn start`
