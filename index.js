/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import Exercise2 from './Exercise2';
import Login from './Login';
import Flexbox from './Flexbox';
import RestAPI from './RestAPI';

import RegisterPage from './RegisterPage';

AppRegistry.registerComponent(appName, () => RegisterPage);
// AppRegistry.registerComponent(appName, () => RestAPI);
// AppRegistry.registerComponent(appName, () => Flexbox);
// AppRegistry.registerComponent(appName, () => Login);
// AppRegistry.registerComponent(appName, () => Exercise2);
// AppRegistry.registerComponent(appName, () => App);
// AppRegistry.registerComponent(appName, () => App);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportPerformance.now(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportPerformance();

