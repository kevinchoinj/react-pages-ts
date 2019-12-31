export const KEY_DOWN = Symbol('KEY_DOWN');

export const keyDown = (key, status) => {
  return{
    type: KEY_DOWN,
    key,
    status,
  };
};