import React, { Component } from "react";
import { render, Color, Box, Text } from "ink";
import spinners from "cli-spinners";
import boxen from "boxen";

class Boxen extends Component {
  constructor() {
    super();
  }

  render() {
    const { children } = this.props;
    return boxen(children, { padding: 1 });
  }
}

class Spinner extends Component {
  constructor(props) {
    super(props);

    this.state = { frame: 0 };
    this.switchFrame = this.switchFrame.bind(this);
  }

  getSpinner() {
    return spinners.dots;
  }

  render() {
    const spinner = this.getSpinner();
    return spinner.frames[this.state.frame];
  }

  componentDidMount() {
    const spinner = this.getSpinner();

    this.timer = setInterval(this.switchFrame, spinner.interval);
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  switchFrame() {
    const { frame } = this.state;

    const spinner = this.getSpinner();
    const isLastFrame = frame === spinner.frames.length - 1;
    const nextFrame = isLastFrame ? 0 : frame + 1;

    this.setState({
      frame: nextFrame
    });
  }
}

render(
  <Box justifyContent="flex-start">
    <Box padding={2}>
      <Spinner /> Waiting...
    </Box>

    <Box padding={2}>
      <Color green>
        <Spinner /> <Text underline>Yeah</Text>Foo
      </Color>
    </Box>
    <Box padding={2}>
      <Boxen>
        {/* <Spinner /> Can't provide components. render2string breaks as well*/}
        Foo
      </Boxen>
    </Box>
  </Box>
);
