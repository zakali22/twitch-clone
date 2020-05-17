import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.scss';
import App from './App';
import {BrowserRouter} from "react-router-dom"
import {createStore, applyMiddleware, compose} from "redux"
import reduxThunk from "redux-thunk"
import rootReducer from "./reducers"
import {Provider} from "react-redux"

let middlewares = [reduxThunk];

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
let store = createStore(rootReducer, composeEnhancers(applyMiddleware(...middlewares)))

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);
