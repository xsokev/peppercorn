"use strict";
var react_1 = require('react');
var react_native_1 = require('react-native');
var Icon_1 = require('./Icon');
var themes_1 = require('./themes');
var styles_1 = require('./styles');
var FloatButton = function (props) {
    var icon = props.icon, mini = props.mini, position = props.position, depth = props.depth, offset = props.offset, active = props.active, disabled = props.disabled, style = props.style;
    var tc = themes_1.default.color(props, active);
    var bc = tc.backgroundColor;
    var onPress = disabled ? null : props.onPress;
    var _icon;
    if (icon) {
        if (typeof icon === 'string') {
            _icon = (react_1.default.createElement(Icon_1.default, {name: icon, color: tc.textColor, size: 24, style: [styles_1.floatbuttonStyles.buttonIcon]}));
        }
        else {
            _icon = (react_1.default.createElement(Icon_1.default, {name: icon.icon, set: icon.set, color: icon.theme && themes_1.default[icon.theme] || tc.textColor, size: icon.size || 24, style: [styles_1.floatbuttonStyles.buttonIcon, icon.style]}));
        }
    }
    return ((react_native_1.Platform.OS === 'android') ?
        react_1.default.createElement(react_native_1.TouchableNativeFeedback, {onPress: onPress, background: react_native_1.TouchableNativeFeedback.Ripple(tc.activeColor, false), style: [
            { backgroundColor: bc, borderRadius: styles_1.floatRadius / 2 },
            styles_1.floatbuttonStyles.container,
            position && themes_1.default.position(position, (mini ? { w: styles_1.floatRadiusMini, h: styles_1.floatRadiusMini } : { w: styles_1.floatRadius, h: styles_1.floatRadius }), offset)
        ]}, react_1.default.createElement(react_native_1.View, {shadowColor: styles_1.floatShadow.color, shadowOffset: styles_1.floatShadow.offset, shadowOpacity: styles_1.floatShadow.opacity, shadowRadius: props.depth, style: [
            styles_1.floatbuttonStyles.button,
            { backgroundColor: bc },
            mini && styles_1.floatbuttonStyles.mini,
            disabled && styles_1.floatbuttonStyles.disabled,
            style
        ]}, _icon)) :
        react_1.default.createElement(react_native_1.TouchableHighlight, {onPress: onPress, underlayColor: tc.activeColor, style: [
            { backgroundColor: bc, borderRadius: styles_1.floatRadius / 2 },
            styles_1.floatbuttonStyles.container,
            position && themes_1.default.position(position, (mini ? { w: styles_1.floatRadiusMini, h: styles_1.floatRadiusMini } : { w: styles_1.floatRadius, h: styles_1.floatRadius }), offset)
        ]}, react_1.default.createElement(react_native_1.View, {shadowColor: styles_1.floatShadow.color, shadowOffset: styles_1.floatShadow.offset, shadowOpacity: props.depth === 0 ? 0 : styles_1.floatShadow.opacity, shadowRadius: props.depth, style: [
            styles_1.floatbuttonStyles.button,
            { backgroundColor: bc },
            mini && styles_1.floatbuttonStyles.mini,
            disabled && styles_1.floatbuttonStyles.disabled,
            style
        ]}, _icon)));
};
FloatButton.propTypes = {
    onPress: react_1.PropTypes.func,
    icon: react_1.PropTypes.string,
    mini: react_1.PropTypes.bool,
    depth: react_1.PropTypes.number,
    position: react_1.PropTypes.oneOf(['TL', 'T', 'TR', 'ML', 'M', 'MR', 'BL', 'B', 'BR',]),
    offset: react_1.PropTypes.shape({ h: react_1.PropTypes.number, v: react_1.PropTypes.number }),
    active: react_1.PropTypes.bool,
    disabled: react_1.PropTypes.bool,
    color: react_1.PropTypes.string,
    style: react_1.PropTypes.any
};
FloatButton.defaultProps = {
    depth: react_native_1.Platform.OS === 'android' ? 2 : 0,
    offset: { h: 0, v: 0 }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = FloatButton;
