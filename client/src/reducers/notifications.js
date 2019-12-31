import {
  TOGGLE_NOTIFICATION,
} from 'actions/notifications';

const DEFAULT_STATE={
  notificationDisplay: true,
};

export default(state=DEFAULT_STATE, payload)=>
{
  switch(payload.type){
  case TOGGLE_NOTIFICATION:
    return state = {
      ...state,
      notificationDisplay: payload.value,
    };
  default:
    return state;
  }
};
