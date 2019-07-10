import {
  ACTION_NAP,
  ACTION_EAT,
  ACTION_PLAY,
  ACTION_NAME
} from "./actionTypes";

export const eat = () => {
  return {
    type: ACTION_EAT,
    payload: {
      activity: "eating"
    }
  };
};

export const nap = () => {
  return {
    type: ACTION_NAP,
    payload: {
      activity: "napping"
    }
  };
};

export const play = () => {
  return {
    type: ACTION_PLAY,
    payload: {
      activity: "playing"
    }
  };
};

export const changeName = catName => {
  return {
    type: ACTION_NAME,
    payload: {
      catName
    }
  };
};
