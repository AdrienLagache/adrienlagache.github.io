import { CHANGE_INPUT_TEXT } from '../actions/layoutActions';

export const initialState = {
  inputText: '',
};

const layoutReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case CHANGE_INPUT_TEXT:
      return {
        ...state,
        inputText: action.text,
      };

    default:
      return state;
  }
};

export default layoutReducer;
