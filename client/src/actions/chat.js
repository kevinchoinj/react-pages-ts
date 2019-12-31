export const RECEIVE_MESSAGE = Symbol('RECEIVE_MESSAGE');
export const USER_HAS_CONNECTED = Symbol('USER_HAS_CONNECTED');
export const USER_HAS_DISCONNECTED = Symbol('USER_HAS_DISCONNECTED');

export const receiveMessage = (message) => {
  return{
    type: RECEIVE_MESSAGE,
    message,
  };
};
export const userHasConnected = (message) => {
  return{
    type: USER_HAS_CONNECTED,
    message,
  };
};
export const userHasDisconnected = (message) => {
  return{
    type: USER_HAS_DISCONNECTED,
    message,
  };
};

