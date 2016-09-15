"use strict";
var react_1 = require('react');
var react_native_1 = require('react-native');
var Icon_1 = require('../Icon');
var themes_1 = require('../themes');
var styles_1 = require('../styles');
var colors = themes_1.default.colors, color = themes_1.default.color, margin = themes_1.default.margin;
var ActionItem = function (props) {
    var tc = color(props);
    var contents = props.children;
    if (props.children) {
        content = (react_1.default.createElement(react_native_1.View, null, props.children));
    }
    else {
        var _icon = void 0, _label = void 0;
        if (props.icon) {
            if (typeof props.icon === 'string') {
                _icon = (react_1.default.createElement(Icon_1.default, {name: props.icon, color: tc.textColor, size: props.icon.size || 38, style: [styles_1.actionbarStyles.actionItemIcon, props.icon.style]}));
            }
            else {
                _icon = (react_1.default.createElement(Icon_1.default, {name: props.icon.icon, set: props.icon.set, color: props.icon.theme && themes_1.default[props.icon.theme] || tc.textColor, size: props.icon.size || 38, style: [styles_1.actionbarStyles.actionItemIcon, props.icon.style]}));
            }
        }
        if (props.label) {
            if (typeof props.label === 'string') {
                _label = (react_1.default.createElement(react_native_1.Text, {style: [styles_1.actionbarStyles.actionItemText, { color: tc.textColor }]}, props.label));
            }
            else {
                _label = (react_1.default.createElement(react_native_1.Text, {style: [styles_1.actionbarStyles.actionItemText, { color: props.label.theme && colors[props.label.theme] || tc.textColor }]}, props.label.text));
            }
        }
        contents = (react_1.default.createElement(react_native_1.View, {style: [
            styles_1.actionbarStyles.actionItem,
            props.disabled && styles_1.actionbarStyles.disabled,
            { backgroundColor: tc.backgroundColor },
            props.style
        ]}, _icon, _label));
        var action = props.disabled ? null : props.action;
    }
    return (react_1.default.createElement(react_native_1.TouchableOpacity, {style: [{ marginHorizontal: margin, backgroundColor: 'rgba(0,0,0,0.3)' }], onPress: action}, contents));
};
ActionItem.propTypes = {
    children: react_1.PropTypes.oneOfType([
        react_1.PropTypes.arrayOf(react_1.PropTypes.node),
        react_1.PropTypes.node
    ]),
    label: react_1.PropTypes.oneOfType([
        react_1.PropTypes.shape({
            text: react_1.default.PropTypes.string,
            theme: react_1.default.PropTypes.string
        }),
        react_1.PropTypes.string
    ]),
    icon: react_1.PropTypes.oneOfType([
        react_1.PropTypes.object,
        react_1.PropTypes.string
    ]),
    action: react_1.PropTypes.func,
    disabled: react_1.PropTypes.bool,
    style: react_1.PropTypes.any
};
ActionItem.defaultProps = {
    action: function () { }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = ActionItem;
