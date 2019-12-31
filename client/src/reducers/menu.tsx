import {
  TOGGLE_MENU,
  TOGGLE_MAIN_MENU,
} from 'actions/menu';

interface IMenuState {
  menuDisplay: any,
  mainMenuDisplay: boolean,
}

const DEFAULT_STATE: IMenuState = {
  menuDisplay: null,
  mainMenuDisplay: false,
};

type PayloadActionTypes = { 
  type: symbol,
  menuDisplay: boolean,
  mainMenuDisplay: boolean,
 };

export default(state=DEFAULT_STATE, payload: PayloadActionTypes)=>
{
  switch(payload.type){
  case TOGGLE_MENU:
    return state = {
      ...state,
      menuDisplay:payload.menuDisplay
    };
  case TOGGLE_MAIN_MENU:
    return state = {
      ...state,
      mainMenuDisplay:payload.mainMenuDisplay
    };
  default:
    return state;
  }
};
