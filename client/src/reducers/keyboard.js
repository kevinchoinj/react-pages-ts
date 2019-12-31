import {
  KEY_DOWN,
} from 'actions/keyboard';

const DEFAULT_STATE={
  keyDown: {},
};

export default(state=DEFAULT_STATE, payload)=>
{
  switch(payload.type){
  case KEY_DOWN:
    return {
      ...state,
      keyDown: {
        ...state.keyDown,
        [payload.key]: payload.status,
      }
    };
  default:
    return state;
  }
};
