import React, { Component } from "react";
import { MDBAlert } from "mdbreact";

class Alert extends Component {
  state = {
    active: false
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.show === true) {
      this.setState({ active: true });
    } else {
      this.setState({ active: false });
    }
  }

  render() {
    const { message, color } = this.props;
    const { active } = this.state;
    return (
      <MDBAlert color={color} className={`${active ? 'd-block' : 'd-none'}`}>
        {message}
      </MDBAlert>
    );
  }
}

export default Alert;