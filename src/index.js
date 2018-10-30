import React from 'react';
import { render } from 'react-dom';
import secretStore from './store/secretStore';
import Root from './containers/common/Root';
import configureStore from './store/configureStore';
import {loadCss} from './performance-utils/css-loader.js'
import 'babel-polyfill';
const store = configureStore();
const rootElement = document.getElementById('root');
let analytics = require('react-segment');

render( <Root store={store} />, rootElement );
