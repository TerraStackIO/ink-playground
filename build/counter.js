"use strict";

var _react = _interopRequireWildcard(require("react"));

var _ink = require("ink");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

class Counter extends _react.Component {
  constructor() {
    super();
    this.state = {
      i: 0
    };
  }

  render() {
    return _react.default.createElement(_ink.Text, {
      underline: true
    }, _react.default.createElement(_ink.Color, {
      green: true
    }, this.state.i, " tests passed"));
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

(0, _ink.render)(_react.default.createElement(_ink.Box, {
  paddingBottom: 2
}, _react.default.createElement(_ink.Box, null, _react.default.createElement(Counter, null))));