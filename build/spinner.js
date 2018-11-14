"use strict";

var _react = _interopRequireWildcard(require("react"));

var _ink = require("ink");

var _cliSpinners = _interopRequireDefault(require("cli-spinners"));

var _boxen = _interopRequireDefault(require("boxen"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

class Boxen extends _react.Component {
  constructor() {
    super();
  }

  render() {
    const {
      children
    } = this.props;
    return (0, _boxen.default)(children, {
      padding: 1
    });
  }

}

class Spinner extends _react.Component {
  constructor(props) {
    super(props);
    this.state = {
      frame: 0
    };
    this.switchFrame = this.switchFrame.bind(this);
  }

  getSpinner() {
    return _cliSpinners.default.dots;
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
    const {
      frame
    } = this.state;
    const spinner = this.getSpinner();
    const isLastFrame = frame === spinner.frames.length - 1;
    const nextFrame = isLastFrame ? 0 : frame + 1;
    this.setState({
      frame: nextFrame
    });
  }

}

(0, _ink.render)(_react.default.createElement(_ink.Box, {
  justifyContent: "flex-start"
}, _react.default.createElement(_ink.Box, {
  padding: 2
}, _react.default.createElement(Spinner, null), " Waiting..."), _react.default.createElement(_ink.Box, {
  padding: 2
}, _react.default.createElement(_ink.Color, {
  green: true
}, _react.default.createElement(Spinner, null), " ", _react.default.createElement(_ink.Text, {
  underline: true
}, "Yeah"), "Foo")), _react.default.createElement(_ink.Box, {
  padding: 2
}, _react.default.createElement(Boxen, null, "Foo"))));