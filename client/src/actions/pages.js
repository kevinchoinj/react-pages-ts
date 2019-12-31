export const SET_PAGE_NAME = Symbol('SET_PAGE_NAME');

export const setPageName = (pageName) => {
  return{
    type: SET_PAGE_NAME,
    pageName,
  };
};

