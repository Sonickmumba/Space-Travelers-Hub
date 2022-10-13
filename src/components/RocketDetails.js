/* eslint-disable camelcase */
/* eslint-disable react/forbid-prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import { PropTypes } from 'prop-types';

const RocketDetails = ({ rocket }) => {
  const {
    description, flickr_images, id, rocket_name,
  } = rocket;
  const imageDivStyle = {
    width: '250px',
    height: '250px',
  };

  const imageStyle = {
    width: '250px',
    height: '250px',
  };

  const buttonStyle = {
    width: '11.5rem',
    height: '2.063rem',
    // margin: '0.75rem 0 0.563rem 3.688rem',
    margin: '0.75rem 0 0.563rem 0',
    padding: '0.438rem 1.188rem 0.5rem 1.375rem',
    borderRadius: '3px',
    backgroundColor: '#0290ff',
    border: '0',
    fontSize: '0.913rem',
    fontWeight: '700',
    letterSpacing: '0.5px',
    textAlign: 'center',
    // opacity: '0.7',
    color: '#fff',
  };
  const titleStyle = {
    fontSize: '1.8rem',
    marginTop: '0',
  };
  const descriptionStyle = {
    fontSize: '1.2rem',
    margin: '1rem 0 1rem 0',
  };
  const reserveStyle = {
    backgroundColor: 'rgb(0, 162, 182)',
    padding: '0.2rem 0.5rem 0.2rem 0.5rem',
    borderRadius: '8px',
    lineHeight: '2.5rem',
    marginRight: '1rem',
    color: '#fff',
    letterSpacing: '0.5px',
  };
  return (
    <>
      <div style={imageDivStyle}>
        <img src={flickr_images} alt="rocket-logo" style={imageStyle} />
      </div>
      <div className="rocket-info">
        <h1 style={titleStyle}>{rocket_name}</h1>
        <div style={descriptionStyle}>
          <span style={reserveStyle}>Reserved</span>
          {description}
        </div>
        <button type="button" style={buttonStyle}>Reserve Rocket</button>
      </div>
    </>
  );
};

RocketDetails.propTypes = {
  rocket: PropTypes.shape({
    id: PropTypes.number.isRequired,
    description: PropTypes.string.isRequired,
    rocket_name: PropTypes.string.isRequired,
    flickr_images: PropTypes.array.isRequired,
  }).isRequired,
};

export default RocketDetails;
