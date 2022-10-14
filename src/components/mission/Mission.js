import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Mission from '../MissionList';
import { joinMissions } from '../../redux/Missions/mission';
import style from '../styles/Mission.module.css';

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
          <th className={style.mission}>Mission</th>
          <th className={style.description}>Description</th>
          <th className={style.status}>Status</th>
        </tr>
        {missions.map((mission) => (
          <Mission
            key={mission.mission_id}
            name={mission.name}
            description={mission.description}
            reserved={mission.reserved}
            mission_id={mission.mission_id}
          />
        ))}
      </thead>
    </table>
  );
};
export default MissionLists;
