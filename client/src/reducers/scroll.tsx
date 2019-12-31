import {
  CHECK_SCROLL,
  CHECK_SCROLL_PERCENT,
  SET_SKEW,
} from 'actions/scroll';

interface IScrollState {
  scrollAmount: number,
  scrollPercent: number,
  skew: number,
}
const DEFAULT_STATE: IScrollState = {
  scrollAmount: 0,
  scrollPercent: 0,
  skew: 0
};
type PayloadActionTypes = { 
  type: symbol,
  scrollAmount: number,
  payload: number,
 };

export default(state=DEFAULT_STATE, payload: PayloadActionTypes)=>
{
  switch(payload.type){
  case CHECK_SCROLL:
    state = {
      ...state,
      scrollAmount: payload.scrollAmount,
    };
    return state;
  case CHECK_SCROLL_PERCENT:
    state = {
      ...state,
      scrollPercent: payload.scrollAmount,
    };
    return state;
  case SET_SKEW:
    state = {
      ...state,
      skew: payload.payload,
    };
    return state;
  default:
    return state;
  }
};
