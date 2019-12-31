import {
  SET_PAGE_NAME,
} from '../actions/pages';

interface IPagesState {
  pageName: string,
}
const DEFAULT_STATE: IPagesState = {
  pageName: '',
};

type PayloadActionTypes = { 
  type: symbol,
  pageName: string,
 };

export default(state=DEFAULT_STATE, payload: PayloadActionTypes)=>
{
  switch(payload.type){
  case SET_PAGE_NAME:
    return state = {
      ...state,
      pageName: payload.pageName
    };
  default:
    return state;
  }
};
