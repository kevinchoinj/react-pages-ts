import React from 'react';
import TrackBoundMouse from '../components/TrackBoundMouse';
import DisplayCoordinates from '../components/DisplayCoordinates';

const Home = () => {
  return (
    <div>
      <TrackBoundMouse/>
      <DisplayCoordinates/>
    </div>
  );
};

export default Home;