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
var themes_1 = require('./themes');
var styles_1 = require('./styles');
var Badge = function (props) {
    var tc = themes_1.default.color(props, false);
    return (react_1.default.createElement(react_native_1.View, __assign({}, props, {style: [styles_1.badgeStyles.badge, props.style, { backgroundColor: tc.backgroundColor }]}), react_1.default.createElement(react_native_1.Text, {style: [styles_1.badgeStyles.badgeText, { color: tc.textColor }]}, props.text || props.children || "")));
};
Badge.propTypes = {
    children: react_1.PropTypes.oneOfType([
        react_1.PropTypes.string,
        react_1.PropTypes.arrayOf(react_1.PropTypes.node),
        react_1.PropTypes.node
    ]),
    text: react_1.PropTypes.any,
    color: react_1.PropTypes.string,
    style: react_1.PropTypes.any
};
Badge.defaultProps = {};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Badge;
