import { configureStore, applyMiddleware } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { rocketReducer } from './rockets/rockets';
import missionsReducer from './Missions/mission';

const allReducers = combineReducers({
  rockets: rocketReducer,
  missions: missionsReducer,
});

const store = configureStore({ reducer: allReducers }, applyMiddleware(thunk));

export default store;
