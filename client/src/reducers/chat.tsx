import {
  RECEIVE_MESSAGE,
  USER_HAS_CONNECTED,
  USER_HAS_DISCONNECTED,
} from 'actions/chat';

interface IChatState {
  messages: string[],
  userActivity: string[],
}
const DEFAULT_STATE: IChatState = {
  messages: [],
  userActivity: [],
};

type PayloadActionTypes = { 
  type: symbol,
  message: string,
 };

export default(state=DEFAULT_STATE, payload: PayloadActionTypes)=>
{
  switch(payload.type){
  case RECEIVE_MESSAGE:
    return state = {
      ...state,
      messages: state.messages.concat(payload.message),
    };
  case USER_HAS_CONNECTED:
    return state = {
      ...state,
      userActivity: state.userActivity.concat("User has connected."),
    };
  case USER_HAS_DISCONNECTED:
    return state = {
      ...state,
      userActivity: state.userActivity.concat("User has disconnected"),
    };
  default:
    return state;
  }
};
