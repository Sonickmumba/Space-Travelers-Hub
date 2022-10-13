/* eslint-disable */
import React from "react";

const Mission = (props) => {
const { name, id, description } = props
  return (
      <tr>
        <td>{id}</td>
        <td>{name}</td>
        <td>{description}</td>
        <td>
          <button>Active</button>
        </td>
        <td><button>Join Mission</button></td>
      </tr>
  );
};

export default Mission;