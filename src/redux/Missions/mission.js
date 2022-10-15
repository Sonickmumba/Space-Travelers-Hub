const READ = 'spaceTravel/missions/READ';
const JOIN_MISSION = 'SPACE-TRAVELERS-HUB/mission/JOIN_MISSION';
const LEAVE_MISSION = 'SPACE-TRAVELERS-HUB/mission/LEAVE_MISSION';

export const read = (missions) => ({
  type: READ,
  payload: missions,
});

export const join = (id) => ({
  type: JOIN_MISSION,
  payload: id,
});

export const leaveMissions = (id) => ({
  type: LEAVE_MISSION,
  payload: id,
});

const missionsReducer = (state = [], action) => {
  switch (action.type) {
    case READ:
      return action.payload;
    case JOIN_MISSION:
      return state.map((state) => {
        if (state.mission_id === action.payload) {
          return {
            ...state,
            reserved: true,
          };
        }
        return state;
      });
    case LEAVE_MISSION:
      return state.map((state) => {
        if (state.mission_id === action.payload) {
          return {
            ...state,
            reserved: false,
          };
        }
        return state;
      });
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
