import setFavicon from '../../utils/setFavicon';
import { CHANGE_THEME } from '../actions/themeActions';

export const initialState = {
  themeIndex: 0,
};

const themeReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case CHANGE_THEME:
      setFavicon(action.theme);
      return {
        ...state,
        themeIndex: action.theme,
      };

    default:
      return state;
  }
};

export default themeReducer;
