import React, { Component } from "react";
import { render, Color, Box, Text } from "ink";

class Counter extends Component {
  constructor() {
    super();

    this.state = {
      i: 0
    };
  }

  render() {
    return (
      <Text underline>
        <Color green>{this.state.i} tests passed</Color>
      </Text>
    );
  }

  componentDidMount() {
    this.timer = setInterval(() => {
      this.setState({
        i: this.state.i + 1
      });
    }, 100);
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }
}

render(
  <Box paddingBottom={2}>
    <Box>
      <Counter />
    </Box>
  </Box>
);
