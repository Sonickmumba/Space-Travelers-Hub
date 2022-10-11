import React from 'react';

const RocketDetails = () => {
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
        <img src="https://imgur.com/DaCfMsj.jpg" alt="rocket-logo" style={imageStyle} />
      </div>
      <div className="rocket-info">
        <h1 style={titleStyle}>Falcon 1</h1>
        <div style={descriptionStyle}>
          <span style={reserveStyle}>Reserved</span>
          The Falcon 1 was an expendable launch system privately developed
          and manufactured by SpaceX during 2006-2009. On 28 September 2008,
          Falcon 1 became the first
          privately-developed liquid-fuel launch vehicle to go into orbit around the Earth.
        </div>
        <button type="button" style={buttonStyle}>Reserve Rocket</button>
      </div>
    </>
  );
};

export default RocketDetails;
