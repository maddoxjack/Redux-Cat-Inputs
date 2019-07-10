import React from "react";

import { connect } from "react-redux";
import { eat, nap, play } from "../redux/actions/activity";

const Activity = ({ activity, eat, nap, play }) => {
  return (
    <div>
      <h1>Guster's Revenge</h1>
      <h2>the cat is: {activity}</h2>
      <button onClick={() => eat()}>Eating</button>
      <button onClick={() => nap()}>Napping</button>
      <button onClick={() => play()}>Playing</button>
    </div>
  );
};

const mapStateToProps = state => {
  const { activity } = state;
  console.log("activity is ", activity);
  return activity;
};

const mapDispatchToProps = dispatch => {
  console.log("dispatch is ", dispatch);
  return {
    eat: () => dispatch(eat()),
    nap: () => dispatch(nap()),
    play: () => dispatch(play())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Activity);
