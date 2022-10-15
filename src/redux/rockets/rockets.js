import { createAsyncThunk } from '@reduxjs/toolkit';

// api
const api = 'https://api.spacexdata.com/v3/rockets';

// actions
const CANCEL_RESERVE = 'SPACE-TRAVELERS-HUB/rockets/CANCEL_RESERVE';
const ROCKET_RESERVE = 'SPACE-TRAVELERS-HUB/rockets/ROCKET_RESERVE';
const FETCH_ROCKETS = 'SPACE-TRAVELERS-HUB/books/FETCH_ROCKETS';

// INITIAL STATE
const initialState = [];

// get books from API
export const getRocketsFromApi = createAsyncThunk(
  FETCH_ROCKETS,
  async (args, { dispatch }) => {
    const response = await fetch(api);
    const rocketData = await response.json();
    const rockets = [];
    rocketData.map((res) => {
      rockets.push(
        {
          id: res.rocket_id,
          name: res.rocket_name,
          description: res.description,
          image: res.flickr_images[0],
          reserved: false,
        },
      );
      return res;
    });
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
      return [...action.payload];
    case ROCKET_RESERVE:
      return state.map((state) => {
        if (state.id !== action.payload) {
          return state;
        }
        return { ...state, reserved: true };
      });
    case CANCEL_RESERVE:
      return state.map((state) => {
        if (state.id !== action.payload) {
          return state;
        }
        return { ...state, reserved: false };
      });
    default:
      return state;
  }
};

export const rocketReserve = (id) => ({
  type: ROCKET_RESERVE,
  payload: id,
});

export const rocketCancelReserve = (id) => ({
  type: CANCEL_RESERVE,
  payload: id,
});

export default rocketReducer;
