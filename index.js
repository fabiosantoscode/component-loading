"use strict";

exports.__esModule = true;

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

/* eslint-disable func-style */

var Loading = (function (_React$Component) {
  _inherits(Loading, _React$Component);

  function Loading() {
    _classCallCheck(this, Loading);

    _React$Component.apply(this, arguments);
  }

  Loading.prototype.render = function render() {
    var extraClassNames = this.props.className ? this.props.className.split(/\s+/g) : [];
    var els = [];
    if (this.props.overlay) {
      els.push(_react2["default"].createElement("div", { className: "loading__overlay", key: "loading__overlay" }));
    }

    els.push(_react2["default"].createElement("div", { className: "loading__inner", key: "loading__inner" }));

    if (this.props.loadingText) {
      els.push(_react2["default"].createElement(
        "div",
        { className: "loading__text", key: "loading__text" },
        _react2["default"].createElement(
          "div",
          { className: "loading__text-inner" },
          this.props.loadingText
        )
      ));
    }

    return _react2["default"].createElement(
      "div",
      { className: ['loading'].concat(extraClassNames).join(' ') },
      els
    );
  };

  _createClass(Loading, null, [{
    key: "propTypes",
    get: function get() {
      return {
        className: _react2["default"].PropTypes.string,
        overlay: _react2["default"].PropTypes.bool,
        loadingText: _react2["default"].PropTypes.string
      };
    }
  }]);

  return Loading;
})(_react2["default"].Component);

exports["default"] = Loading;
module.exports = exports["default"];