const READ = 'spaceTravel/missions/READ';
const BOOK = "spaceTravel/missions/BOOK";
const LEAVE = 'spaceTravel/missions/LEAVE';

export const read = (missions) => ({
  type: READ,
  payload: missions,
});

export const book = (id) => ({
  type: BOOK,
  payload: id
});

export const leave = (id) => ({
  type: LEAVE,
  payload: id,
});

const missionsReducer = (state = [], action) => {
  switch (action.type) {
    case READ:
      return action.payload;
    case BOOK:
      newState = state.map((item) => {
        if (item.mission_id !== action.payload) return item;
        return { ...item, reserved: true };
      });
      return newState
    case LEAVE:
         newState = state.map((item) => {
        if (item.mission_id !== action.payload) return item;
        return { ...item, reserved: false };
      });
      return newState;
    default:
      return state;
  }
};
export const joinMissions = () => async (dispatch) => {
  await fetch('https://api.spacexdata.com/v3/missions')
    .then((res) => res.json())
    .then((missions) => {
      const missionsList = [];
      Object.keys(missions).map((key) => {
        missionsList.push({
          mission_id: missions[key].mission_id,
          name: missions[key].mission_name,
          description: missions[key].description,
          reserved: false,
        });
        return missionsList;
      });
      dispatch(read(missionsList));
    });
};

export default missionsReducer;
