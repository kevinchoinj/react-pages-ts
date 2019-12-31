import React from 'react';
import {getMousePosition} from 'actions/mouse';
import {connect} from 'react-redux';

type TrackMouseProps = { 
  getMousePosition: Function,
 };

const TrackMouse: React.FC<TrackMouseProps> = ({getMousePosition}) => {
  return(
    <div
      onMouseMove={(e) => getMousePosition(e)}
    />
  );
};

type MousePositionProps = { 
  clientX: number,
  clientY: number,
 };

const mapDispatchToProps = (dispatch: any) => {
  return {
    getMousePosition: (e: MousePositionProps )=> dispatch(getMousePosition(
      e.clientX,
      e.clientY,
    )),
  };
};

export default connect (null, mapDispatchToProps)(TrackMouse);