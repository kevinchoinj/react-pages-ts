import {
  TOGGLE_MENU,
  TOGGLE_MAIN_MENU,
} from 'actions/menu';

const DEFAULT_STATE={
  menuDisplay: null,
  mainMenuDisplay: false,
};

export default(state=DEFAULT_STATE, payload)=>
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
