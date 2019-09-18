import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import { Database } from '@nozbe/watermelondb'
import LokiJSAdapter from '@nozbe/watermelondb/adapters/lokijs'
import schema from './model/schema'
import Website from './model/Website'
import User from './model/User'

const adapter = new LokiJSAdapter({
    schema,
  })
  
// Then, make a Watermelon database from it!
const database = new Database({
  adapter,
  modelClasses: [Website, User],
  actionsEnabled: true,
})


ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
