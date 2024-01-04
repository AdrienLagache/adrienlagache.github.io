import { CHANGE_THEME } from '../actions/themeActions';

export const initialState = {
  themeIndex: 0,
};

const themeReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case CHANGE_THEME:
      return {
        ...state,
        themeIndex: action.theme,
      };

    default:
      return state;
  }
};

export default themeReducer;
