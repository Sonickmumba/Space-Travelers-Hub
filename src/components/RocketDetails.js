import React from 'react';
import { PropTypes } from 'prop-types';
import { useDispatch } from 'react-redux';
import styles from './RocketDetails.module.css';
import { rocketReserve } from '../redux/rockets/rockets';

const RocketDetails = ({ rocket }) => {
  const {
    description, image, id, name,
  } = rocket;
  const dispatch = useDispatch();

  const handleReserve = (e) => {
    const { id } = e.target;
    dispatch(rocketReserve(id));
  };

  return (
    <>
      <div className={styles.imageDiv}>
        <img src={image} alt="rocket-logo" className={styles.image} />
      </div>
      <div className="rocket-info">
        <h1 className={styles.title}>{name}</h1>
        <div className={styles.description}>
          <span className={styles.reserve}>Reserved</span>
          {description}
        </div>
        <button type="button" className={styles.button} id={id} onClick={handleReserve}>Reserve Rocket</button>
      </div>
    </>
  );
};

RocketDetails.propTypes = {
  rocket: PropTypes.shape({
    id: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    reserved: PropTypes.bool.isRequired,
  }).isRequired,
};

export default RocketDetails;
