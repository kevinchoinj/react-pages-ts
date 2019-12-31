export const CHECK_SCROLL = Symbol('CHECK_SCROLL');
export const CHECK_SCROLL_PERCENT = Symbol('CHECK_SCROLL_PERCENT');
export const CHECK_RESIZE = Symbol('CHECK_RESIZE');
export const SET_SKEW = Symbol('SET_SKEW');

export const checkScroll = (scrollAmount) =>{
  return{
    type: CHECK_SCROLL,
    scrollAmount,
  };
};
export const checkScrollPercent = (scrollAmount) =>{
  return{
    type: CHECK_SCROLL_PERCENT,
    scrollAmount,
  };
};
export const checkResize = (resizing) =>{
  return{
    type: CHECK_RESIZE,
    resizing,
  };
};
export const setSkew = (payload) =>{
  return{
    type: SET_SKEW,
    payload,
  };
};
