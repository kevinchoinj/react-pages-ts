import {
  GET_MOUSE_POSITION,
  GET_BOUND_MOUSE_POSITION,
  SET_MOBILE,
  HOVER_IMAGE,
} from 'actions/mouse';

const DEFAULT_STATE={
  mousePosition: {xValue: 0, yValue: 0},
  boundMousePosition: {xValue: 0, yValue: 0},
  hoveredImage: false,
  isMobile: true,
};

export default(state=DEFAULT_STATE, payload)=>
{
  switch(payload.type){

  case GET_MOUSE_POSITION:
    return state = {
      ...state,
      mousePosition: {
        xValue: payload.xValue,
        yValue: payload.yValue,
      },
    };

  case GET_BOUND_MOUSE_POSITION:
    return state = {
      ...state,
      boundMousePosition: {
        xValue: payload.xValue,
        yValue: payload.yValue,
      },
    };
  case SET_MOBILE:
    return state = {
      ...state,
      isMobile: payload.payload
    };
  case HOVER_IMAGE:
    return state = {
      ...state,
      hoveredImage: payload.image,
    };
  default:
    return state;
  }
};
