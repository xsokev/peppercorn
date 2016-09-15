"use strict";
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var react_1 = require('react');
var react_native_1 = require('react-native');
var styles_1 = require('./styles');
var Container = function (props) {
    var contentStyle = [styles_1.containerStyles.container, props.padding && styles_1.containerStyles.padding, props.style];
    return (react_1.default.createElement(react_native_1.View, __assign({}, props, {style: contentStyle}), props.children));
};
Container.propTypes = {
    children: react_1.PropTypes.oneOfType([
        react_1.PropTypes.arrayOf(react_1.PropTypes.node),
        react_1.PropTypes.node,
    ]),
    padding: react_1.PropTypes.bool,
    style: react_1.PropTypes.any
};
Container.defaultProps = {};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Container;
