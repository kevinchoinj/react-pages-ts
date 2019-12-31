import {
  GET_MOUSE_POSITION,
  GET_BOUND_MOUSE_POSITION,
  SET_MOBILE,
  HOVER_IMAGE,
} from 'actions/mouse';

type MousePositionProps = {
  xValue: number, 
  yValue: number,
}
interface IMouseState {
  mousePosition: MousePositionProps
  boundMousePosition: MousePositionProps,
  hoveredImage: string | boolean,
  isMobile: boolean,
}
const DEFAULT_STATE: IMouseState = {
  mousePosition: {xValue: 0, yValue: 0},
  boundMousePosition: {xValue: 0, yValue: 0},
  hoveredImage: false,
  isMobile: true,
};
type PayloadActionTypes = { 
  type: symbol,
  xValue: number,
  yValue: number,
  payload: boolean,
  image: string | boolean,
 };

export default(state=DEFAULT_STATE, payload: PayloadActionTypes)=>
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
