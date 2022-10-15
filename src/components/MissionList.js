/* eslint-disable */
import React from "react";
import styles from './styles/MissionList.module.css'
import { useDispatch } from "react-redux";
import { book, leave } from "../redux/Missions/mission";
import Badge from "react-bootstrap/Badge";

const Mission = (props) => {
const { name, id, description, reserved } = props

const dispatch = useDispatch();

const missionReserve = (e) => {
  e.preventDefault();
  dispatch(book(id));
};

const missionCancel= (e) => {
  e.preventDefault();
  dispatch(leave(id));
};

const buttonStyle = {
  width: "100%",
  border: "solid 1px",
  padding: "10px",
};

  return (
    <tr>
      <td className={styles.name}>{name}</td>
      <td className={styles.description}>{description}</td>
      <td className={styles.active}>
        <div>
          {reserved ? (
            <Badge bg="info">Active Member</Badge>
          ) : (
            <Badge bg="secondary">Not A Member</Badge>
          )}
        </div>
      </td>
      <td className={styles.mission}>
        <button
          style={buttonStyle}
          type="button"
          onClick={missionReserve}
          className={reserved ? "join hide" : "join show"}
        >
          Join Mission
        </button>
        <button
          style={buttonStyle}
          type="button"
          onClick={missionCancel}
          className={reserved ? "leave show" : "leave hide"}
        >
          Leave Mission
        </button>
      </td>
    </tr>
  );
};

export default Mission