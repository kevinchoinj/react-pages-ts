import React from 'react';
import TrackBoundMouse from '../components/TrackBoundMouse';
import DisplayCoordinates from '../components/DisplayCoordinates';

const Home = () => {
  return (
    <div className="page_one">
      <TrackBoundMouse/>
      <DisplayCoordinates/>
    </div>
  );
};

export default Home;