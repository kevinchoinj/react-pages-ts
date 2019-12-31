import {
  CHECK_SCROLL,
  CHECK_SCROLL_PERCENT,
  SET_SKEW,
} from 'actions/scroll';

const DEFAULT_STATE={
  scrollAmount: 0,
  scrollPercent: 0,
  skew: 0
};

export default(state=DEFAULT_STATE, payload)=>
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
