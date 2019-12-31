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
const DisplayCoordinates  = props => {
  const {
    mousePosition,
    boundMousePosition,
  } = props;
  return(
    <StyledText>
      {mousePosition.xValue}, {mousePosition.yValue}
      <br/>
      {boundMousePosition.xValue}, {boundMousePosition.yValue}
    </StyledText>
  );
};

const mapStateToProps = (state) => {
  return {
    mousePosition: selectCurrentMousePosition(state),
    boundMousePosition: selectBoundMousePosition(state),
  };
};

export default connect (mapStateToProps, null)(DisplayCoordinates);