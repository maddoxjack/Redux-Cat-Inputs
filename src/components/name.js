import React from "react";

import { connect } from "react-redux";
import { changeName } from "../redux/actions/activity";

const mapStateToProps = state => {
  const { catName } = state;
  console.log("catName is ", catName);
  return catName;
};

const mapDispatchToProps = dispatch => {
  console.log("dispatch is ", dispatch);
  return {
    changeName: catName => dispatch(changeName(catName))
  };
};

class SetName extends React.Component {
  constructor(props) {
    super(props);
    this.state = { input: "" };
  }
  updateInput = input => {
    this.setState({ input });
  };

  handleNameChange = () => {
    this.props.changeName(this.state.input);
    this.setState({ input: "" });
  };

  render() {
    return (
      <div>
        <input
          onChange={e => this.updateInput(e.target.value)}
          value={this.state.input}
        />
        <button onClick={this.handleNameChange}>Change the name!</button>
        <h2>Your new name is {this.props.catName} </h2>
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SetName);
