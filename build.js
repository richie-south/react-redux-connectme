'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.addActionCreators = undefined;

var _redux = require('redux');

var _reactRedux = require('react-redux');

var globalActionCreators = null;

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return (0, _redux.bindActionCreators)(globalActionCreators, dispatch);
};

exports.default = function (Element, stateToProps) {
  return (0, _reactRedux.connect)(stateToProps, mapDispatchToProps)(Element);
};

var addActionCreators = exports.addActionCreators = function addActionCreators(actionsCreators) {
  return globalActionCreators = actionsCreators;
};