// polyfills
//import 'core-js/es/map';
//import 'core-js/es/set';
import 'whatwg-fetch';

// react
import React from 'react';
import ReactDOM from 'react-dom';

// import css to make sure it is generated in the result
import './css/default.less';
import 'openstad-component/src/css/default.less';

// the module
import api from './lib/api/index.js';
import user from './lib/user/index.js';
import localStorage from './lib/local-storage.js';
import sessionStorage from './lib/session-storage.js';

let OpenStadComponentLibs = {
  api,
  user,
  localStorage,
  sessionStorage,
}
export default OpenStadComponentLibs;

