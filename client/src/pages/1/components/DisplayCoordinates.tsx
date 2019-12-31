import React from 'react';
import {connect} from 'react-redux';
import {
  selectCurrentMousePosition,
  selectBoundMousePosition,
} from 'reducers';
import styled from 'styled-components';

const StyledText = styled.div`
  position: absolute;
  left: 5px;
  top: 5px;
  font-size: 17px;
  pointer-events: none;
`;

type MousePositionProps = {
  xValue: Number,
  yValue: Number,
}
type DisplayCoordinatesProps = { 
  mousePosition: MousePositionProps,
  boundMousePosition: MousePositionProps,
 };

const DisplayCoordinates: React.FC<DisplayCoordinatesProps>  = ({mousePosition, boundMousePosition}) => {
  return(
    <StyledText>
      {mousePosition.xValue}, {mousePosition.yValue}
      <br/>
      {boundMousePosition.xValue}, {boundMousePosition.yValue}
    </StyledText>
  );
};

const mapStateToProps = (state: Object) => {
  return {
    mousePosition: selectCurrentMousePosition(state),
    boundMousePosition: selectBoundMousePosition(state),
  };
};

export default connect (mapStateToProps, null)(DisplayCoordinates);