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
      <thead className={style.theader}>
        <tr className={style.header}>
          <th className={style.titles}>Mission</th>
          <th className={style.titles}>Description</th>
          <th className={style.titles}>Status</th>
          <th className={style.titles}> </th>
        </tr>

        {missions.map((mission) => (
          <Mission
            key={mission.mission_id}
            name={mission.name}
            description={mission.description}
            id={mission.mission_id}
            reserved={mission.reserved}
          />
        ))}
      </thead>
    </table>
  );
};
export default MissionLists;
