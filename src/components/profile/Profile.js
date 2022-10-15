import React from 'react';
import { useSelector } from 'react-redux';

const Profile = () => {
  const rockets = useSelector((state) => state.rockets);
  const reservedRockets = rockets.filter((rocket) => rocket.reserved === true);

  const missions = useSelector((state) => state.missions);
  const reservedMissions = missions.filter(
    (mission) => mission.reserved === true,
  );
  return (
    <>
      <div className="profile-container">
        <div className="rocket-container">
          <h2>My Missions</h2>
          {reservedMissions.lenght === 0 ? (
            <div>No reservations made</div>
          ) : (
            <div className="reservedContainer">
              {reservedMissions.map((item) => (
                <div key={item.mission_id} className="reserved">
                  {item.name}
                </div>
              ))}
            </div>
          )}
        </div>
        <div className="rocket-container">
          <h2>My Rockets</h2>
          {reservedRockets.length === 0 ? (
            <div>No reservations made yet</div>
          ) : (
            <div className="reservedContainer">
              {reservedRockets.map((item) => (
                <div key={item.id} className="reserved">
                  {item.name}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Profile;
