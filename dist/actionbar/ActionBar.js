"use strict";
var react_1 = require('react');
var react_native_1 = require('react-native');
var ActionItem_1 = require('./ActionItem');
var themes_1 = require('../themes');
var styles_1 = require('../styles');
var color = themes_1.default.color;
var ActionItemCenter = function (_a) {
    var children = _a.children;
    return (react_1.default.createElement(react_native_1.View, {style: [styles_1.actionbarStyles.actionBarItem, styles_1.actionbarStyles.actionBarCenter]}, children));
};
var ActionItemLeft = function (_a) {
    var children = _a.children;
    return (react_1.default.createElement(react_native_1.View, {style: [styles_1.actionbarStyles.actionBarItem, styles_1.actionbarStyles.actionBarLeft]}, children));
};
var ActionItemRight = function (_a) {
    var children = _a.children;
    return (react_1.default.createElement(react_native_1.View, {style: [styles_1.actionbarStyles.actionBarItem, styles_1.actionbarStyles.actionBarRight]}, children));
};
var ActionBar = function (props) {
    var tc = color(props);
    var center = (react_1.default.createElement(ActionItemCenter, null)), left = (react_1.default.createElement(ActionItemLeft, null)), right = (react_1.default.createElement(ActionItemRight, null));
    if (props.title) {
        if (typeof props.title === 'string') {
            center = (react_1.default.createElement(ActionItemCenter, null, react_1.default.createElement(react_native_1.Text, {style: [
                styles_1.actionbarStyles.actionBarTitle,
                { color: tc.textColor }
            ]}, props.title)));
        }
        else {
            center = (react_1.default.createElement(ActionItemCenter, null, props.title));
        }
    }
    if (props.left) {
        left = (react_1.default.createElement(ActionItemLeft, null, props.left));
    }
    if (props.right) {
        right = (react_1.default.createElement(ActionItemRight, null, props.right));
    }
    return (react_1.default.createElement(react_native_1.View, {style: [
        styles_1.actionbarStyles.actionbar,
        props.header && styles_1.actionbarStyles.actionbarHeader,
        props.footer && styles_1.actionbarStyles.actionbarFooter,
        { backgroundColor: tc.backgroundColor },
        props.style
    ]}, left, center, right));
};
ActionBar.propTypes = {
    title: react_1.PropTypes.oneOfType([
        react_1.PropTypes.instanceOf(ActionItem_1.default),
        react_1.PropTypes.string
    ]),
    left: react_1.PropTypes.instanceOf(ActionItem_1.default),
    right: react_1.PropTypes.instanceOf(ActionItem_1.default),
    footer: react_1.PropTypes.bool,
    header: react_1.PropTypes.bool,
    style: react_1.PropTypes.any
};
ActionBar.defaultProps = {};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = ActionBar;
