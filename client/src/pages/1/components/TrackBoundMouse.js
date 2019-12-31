import React from 'react';
import {getBoundMousePosition} from 'actions/mouse';
import {connect} from 'react-redux';
import styled from 'styled-components';

import {
  selectBoundMousePosition,
} from 'reducers';

const bindMouse = (e, currentPosition) => {
  let lMouseX = Math.max(-100, Math.min(100, window.innerWidth / 2 - e.clientX));
  let lMouseY = Math.max(-100, Math.min(100, window.innerHeight / 2 - e.clientY));
  let lFollowX = (20 * lMouseX) / 100;
  let lFollowY = (10 * lMouseY) / 100;
  let boundX = currentPosition.xValue;
  let boundY = currentPosition.yValue;
  let friction = 1/30;

  let x = boundX + ((lFollowX - boundX) * friction);
  let y = boundY + ((lFollowY - boundY) * friction);
  return {
    x: x,
    y: y,
  };
};

const StyledWrapper = styled.div`
  height: 100vh;
  width: 100vw;
  position: absolute;
  overflow: hidden;
  background-color: #fff;
`;

const TrackBoundMouse = props => {
  return(
    <StyledWrapper 
      onMouseMove={(e) => props.getBoundMousePosition(
        e,
        props.boundMousePosition,
      )}/>
  );
};

const mapStateToProps = (state) => {
  return {
    boundMousePosition: selectBoundMousePosition(state),
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getBoundMousePosition: (e, currentPosition) => {
      const bound = bindMouse(e, currentPosition);
      dispatch(getBoundMousePosition(
        bound.x,
        bound.y,
      ));
    }
  };
};

export default connect (mapStateToProps, mapDispatchToProps)(TrackBoundMouse);