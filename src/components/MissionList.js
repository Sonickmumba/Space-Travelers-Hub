/* eslint-disable */
import React from "react";
import { useDispatch } from 'react-redux';
import { join, leaveMissions } from '../redux/Missions/mission';
import style from './styles/Mission.module.css';

const Mission = (props) => {
  const { name, id, description, reserved } = props;
  const dispatch = useDispatch();

  const joinmission = (e) => {
    e.preventDefault();
    dispatch(join(e.target.parentNode.parentNode.id));
  };

  const leavemission = (e) => {
    e.preventDefault();
    dispatch(leaveMissions(e.target.parentNode.parentNode.id));
  };

  return (
      <tr id={id} className={style.missionContainer}>
        <td className={style.tdata}>{name}</td>
        <td className={style.tdata}>{description}</td>
        <td className={style.tdata}>
          {reserved && <button type="button" className={style.buttonActive}>Active Member</button>}
          {!reserved && <button type="button" className={style.buttonNotMember}>NOT A MEMBER</button>}
        </td>
        <td className={style.tdata}>
          {reserved && (<button type="button" id={id} className={style.buttonLeave} onClick={leavemission}>leave Mission</button>)}
          {!reserved && (<button type="button" id={id} className={style.button} onClick={joinmission}>join Mission</button>)}
        </td>
      </tr>
  );
};

export default Mission;