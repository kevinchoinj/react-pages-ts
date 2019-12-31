import React from 'react';
import {getMousePosition} from 'actions/mouse';
import {connect} from 'react-redux';

const TrackMouse = props => {
  return(
    <div className="wrapper" onMouseMove={(e) => props.getMousePosition(e)}/>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    getMousePosition: e => dispatch(getMousePosition(
      e.clientX,
      e.clientY,
    )),
  };
};

export default connect (null, mapDispatchToProps)(TrackMouse);