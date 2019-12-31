export const TOGGLE_MENU = Symbol('TOGGLE_MENU');
export const TOGGLE_MAIN_MENU = Symbol('TOGGLE_MAIN_MENU');

export const toggleMenu = (menuDisplay) => {
  return{
    type: TOGGLE_MENU,
    menuDisplay
  };
};
export const toggleMainMenu = (mainMenuDisplay) =>{
  return{
    type: TOGGLE_MAIN_MENU,
    mainMenuDisplay
  };
};