import {
  TOGGLE_NOTIFICATION,
} from 'actions/notifications';

interface INotificationState {
  notificationDisplay: boolean,
}
const DEFAULT_STATE: INotificationState = {
  notificationDisplay: true,
};

type PayloadActionTypes = { 
  type: symbol,
  value: boolean,
 };

export default(state=DEFAULT_STATE, payload: PayloadActionTypes)=>
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
