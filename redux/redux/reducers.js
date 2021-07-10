import { combineReducers } from 'redux'
import Type from "./types";

// INITIAL TIMER STATE
const INITIAL_STATE = {
  smallMenu: false,
};

// COUNTER REDUCER
const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case Type.SET_SMALL_MENU:
      return {
        ...state,
        smallMenu: action.payload
      };
    default:
      return state
  }
};

export default reducer


