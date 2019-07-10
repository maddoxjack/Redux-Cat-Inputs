import { ACTION_NAP, ACTION_EAT, ACTION_PLAY } from "../actions/actionTypes";

const initialState = {
  activity: "napping"
};

const activityReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTION_NAP: {
      const { activity } = action.payload;
      return {
        ...state,
        activity: activity
      };
    }
    case ACTION_EAT: {
      const { activity } = action.payload;
      return {
        ...state,
        activity: activity
      };
    }
    case ACTION_PLAY: {
      const { activity } = action.payload;
      return {
        ...state,
        activity: activity
      };
    }

    default: {
      return state;
    }
  }
};

export default activityReducer;
