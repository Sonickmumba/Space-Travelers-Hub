import { configureStore, applyMiddleware } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { rocketReducer } from './rockets/rockets';
// import checkStatus from './categories/categories';

const allReducers = combineReducers({
  rockets: rocketReducer,
  // status: checkStatus,
});

const store = configureStore({ reducer: allReducers }, applyMiddleware(thunk));

export default store;
