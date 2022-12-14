import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
// import { v4 as id4 } from 'uuid';
import RocketDetails from './RocketDetails';
import { getRocketsFromApi } from '../../redux/rockets/rockets';

const RocketContainer = () => {
  const rockets = useSelector((state) => state.rockets);
  const dispatch = useDispatch();

  useEffect(() => {
    if (rockets.length === 0) {
      dispatch(getRocketsFromApi());
    }
  }, [dispatch, rockets.length]);

  const hubContainer = {
    display: 'flex',
    gap: '30px',
    padding: '1.438rem 6.188rem 1.688rem 4.85rem',
  };
  return (
    <>
      <main>
        {rockets.map((rocket) => (
          <div key={rocket.id} style={hubContainer}>
            <RocketDetails rocket={rocket} />
          </div>
        ))}
      </main>
    </>
  );
};

export default RocketContainer;
