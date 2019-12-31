import menu from 'reducers/menu';
import mouse from 'reducers/mouse';
import scroll from 'reducers/scroll';
import transition from 'reducers/transition';
import pages from 'reducers/pages';
import keyboard from 'reducers/keyboard';
import notifications from 'reducers/notifications';
import chat from 'reducers/chat';

import {createSelector} from 'reselect';

const reducers={
  menu,
  mouse,
  scroll,
  transition,
  pages,
  keyboard,
  notifications,
  chat,
};

export default reducers;

/* menu */
export const selectMenuDisplay = (state) => state.menu.menuDisplay;
export const selectMainMenuDisplay = (state) => state.menu.mainMenuDisplay;

/* mouse */
export const selectCurrentMousePosition = (state) => state.mouse.mousePosition;
export const selectBoundMousePosition = (state) => state.mouse.boundMousePosition;

/* transition */
export const selectTransitionStatus = (state) => state.transition.transitionStatus;
export const selectLoadedContent = (state) => state.transition.loadedContent;

export const selectTransitionInProgress = createSelector(
  selectTransitionStatus,
  (transitionStatus) => {
    if (transitionStatus === 'start' || transitionStatus === 'end') {
      return true;
    }
    else {
      return false;
    }
  }
);

export const selectLoadedContentHome = createSelector(
  selectLoadedContent,
  (loadedContent) => {
    if (loadedContent === '/') {
      return true;
    }
    else {
      return false;
    }
  }
);

/* scroll */
export const selectScrollSkew = (state) => state.scroll.skew;

/* notification */
export const selectNotificationDisplay = (state) => state.notifications.notificationDisplay;
