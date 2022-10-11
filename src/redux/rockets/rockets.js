import { createAsyncThunk } from '@reduxjs/toolkit';

// api
const api = 'https://api.spacexdata.com/v3/rockets';

// actions
// const ADD = 'SPACE-TRAVELERS-HUB/rockets/ADD';
// const DELETE = 'SPACE-TRAVELERS-HUB/rockets/DELETE';
const FETCH_ROCKETS = 'SPACE-TRAVELERS-HUB/books/FETCH_ROCKETS';

// INITIAL STATE
export const initialState = {
  rockets: [],
};

// get books from API
export const getRocketsFromApi = createAsyncThunk(
  FETCH_ROCKETS,
  async (args, { dispatch }) => {
    const response = await fetch(api);
    const rocketData = await response.json();
    const rockets = rocketData.map((rocket) => ({
      ...rocket,
    }));
    dispatch({
      type: FETCH_ROCKETS,
      payload: rockets,
    });
    return rockets;
  },
);

// BOOK REDUCER
export const rocketReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ROCKETS:
      return {
        ...state, rockets: action.payload,
      };
    default:
      return state;
  }
};

export default rocketReducer;
