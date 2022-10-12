import { configureStore, applyMiddleware } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { rocketReducer } from './rockets/rockets';

const allReducers = combineReducers({
  rockets: rocketReducer,
  // add mission reducer here
});

const store = configureStore({ reducer: allReducers }, applyMiddleware(thunk));

export default store;
