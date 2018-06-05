import React from 'react';
import ReactDOM from 'react-dom';
import 'semantic-ui-css/semantic.min.css'
import Root from './components/root.js';
import registerServiceWorker from './registerServiceWorker';
import reducers from "./reducers"
import ReduxThunk from 'redux-thunk'
import { createStore, applyMiddleware } from 'redux'

const store = createStore(reducers, {}, applyMiddleware(ReduxThunk))

ReactDOM.render(<Root store={store} />, document.getElementById('root'));
registerServiceWorker();
