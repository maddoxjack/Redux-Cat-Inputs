import { ACTION_NAME } from "../actions/actionTypes";

const initialState = {
  catName: "Guster"
};

const nameReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTION_NAME: {
      const { catName } = action.payload;
      return {
        ...state,
        catName
      };
    }

    default: {
      return state;
    }
  }
};

export default nameReducer;
