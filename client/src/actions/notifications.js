export const TOGGLE_NOTIFICATION = Symbol('TOGGLE_NOTIFICATION');

export const toggleNotification = (value) => {
  return{
    type: TOGGLE_NOTIFICATION,
    value,
  };
};
