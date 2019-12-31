import {
  SET_PAGE_NAME,
} from '../actions/pages';

const DEFAULT_STATE={
  pageName: '',
};

export default(state=DEFAULT_STATE, payload)=>
{
  switch(payload.type){
  case SET_PAGE_NAME:
    return state = {...state, pageName: payload.pageName};
  default:
    return state;
  }
};
