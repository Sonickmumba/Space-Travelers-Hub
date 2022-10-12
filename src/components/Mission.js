import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Mission from './MissionList';
import { joinMissions } from '../redux/Missions/mission';
import style from './styles/Mission.module.css';

const MissionLists = () => {
  const missions = useSelector((state) => state.missions);
  const dispatch = useDispatch();

  useEffect(() => {
    if (missions.length === 0) dispatch(joinMissions());
  });
  return (
    <table className={style.table}>
      <thead>
        <tr>
          <th>Mission</th>
          <th>Description</th>
          <th>Status</th>
        </tr>
        {missions.map((mission) => (
          <Mission
            key={mission.mission_id}
            name={mission.name}
            description={mission.description}
          />
        ))}
      </thead>
    </table>
  );
};
export default MissionLists;
