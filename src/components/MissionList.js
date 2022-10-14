/* eslint-disable */
import React from "react";
import styles from './styles/MissionList.module.css'
import { useDispatch } from "react-redux";
import { book, leave } from "../redux/Missions/mission";

const Mission = ({props}) => {
const { name, id, description, reserved } = props

const dispatch = useDispatch();

const missionReserve = (e) => {
  const { id } = e.target;
  dispatch(book(id));
};

const missionCancel= (e) => {
  const { id } = e.target;
  dispatch(leave(id));
};

  return (
    <tr>
      <td className={styles.name}>{name}</td>
      <td className={styles.description}>{description}</td>
      <td className={styles.active}>
        <button type="button" className={styles.activeBtn}>
          Active Member
        </button>
      </td>
      <td className={styles.mission}>
        <button type="button" className={styles.missionBtn}>
          Join Mission
        </button>
      </td>
    </tr>
  );
};

export default Mission