"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
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
var buttonRadius = themes_1.default.buttonRadius;
var Button = (function (_super) {
    __extends(Button, _super);
    function Button(props) {
        _super.call(this, props);
        this.state = {
            active: false
        };
        this._highlight = this._highlight.bind(this);
        this._unhighlight = this._unhighlight.bind(this);
    }
    Button.prototype.render = function () {
        var tc = themes_1.default.color(this.props, this.state.active);
        var _a = this.props, text = _a.text, children = _a.children, size = _a.size, full = _a.full, clear = _a.clear, outline = _a.outline, round = _a.round, color = _a.color, disabled = _a.disabled, style = _a.style;
        var onPress = disabled ? null : this.props.onPress;
        var contents = text || children || "";
        var textContents = (react_1.default.createElement(react_native_1.Text, {style: [
            styles_1.buttonStyles.buttonText,
            { color: tc.textColor },
            size && styles_1.buttonStyles["text" + size]]}, contents));
        if (clear) {
            return (react_1.default.createElement(react_native_1.TouchableOpacity, __assign({}, this.props, {style: [style, !full && { borderRadius: buttonRadius, marginVertical: themes_1.default.margin / 2, marginHorizontal: themes_1.default.margin }], onPress: onPress}), react_1.default.createElement(react_native_1.View, {style: [
                styles_1.buttonStyles.button, styles_1.buttonStyles.clear,
                size && styles_1.buttonStyles[size],
                full && styles_1.buttonStyles.full,
                disabled && styles_1.buttonStyles.disabled,
                { backgroundColor: tc.backgroundColor }
            ]}, textContents)));
        }
        else if (outline) {
            return ((react_native_1.Platform.OS === 'android') ?
                react_1.default.createElement(react_native_1.TouchableNativeFeedback, __assign({}, this.props, {onPress: onPress, background: react_native_1.TouchableNativeFeedback.Ripple(tc.activeColor, false), style: [
                    { backgroundColor: tc.backgroundColor },
                    !full && { borderRadius: buttonRadius, marginVertical: themes_1.default.margin / 2, marginHorizontal: themes_1.default.margin },
                    round && styles_1.buttonStyles.round,
                    disabled && styles_1.buttonStyles.disabled,
                    style
                ]}), react_1.default.createElement(react_native_1.View, {style: [
                    styles_1.buttonStyles.button, styles_1.buttonStyles.outline,
                    size && styles_1.buttonStyles[size],
                    full && styles_1.buttonStyles.full,
                    disabled && styles_1.buttonStyles.disabled,
                    { borderColor: tc.borderColor, backgroundColor: tc.backgroundColor }
                ]}, textContents)) :
                react_1.default.createElement(react_native_1.TouchableHighlight, __assign({onPress: onPress, underlayColor: tc.activeColor, activeOpacity: 1, onShowUnderlay: this._highlight, onHideUnderlay: this._unhighlight}, this.props, {style: [
                    { backgroundColor: tc.backgroundColor },
                    !full && { borderRadius: buttonRadius, marginVertical: themes_1.default.margin / 2, marginHorizontal: themes_1.default.margin },
                    round && styles_1.buttonStyles.round,
                    disabled && styles_1.buttonStyles.disabled,
                    style
                ]}), react_1.default.createElement(react_native_1.View, {style: [
                    styles_1.buttonStyles.button, styles_1.buttonStyles.outline,
                    size && styles_1.buttonStyles[size],
                    full && styles_1.buttonStyles.full,
                    disabled && styles_1.buttonStyles.disabled,
                    { borderColor: tc.borderColor, backgroundColor: tc.backgroundColor }
                ]}, textContents)));
        }
        return ((react_native_1.Platform.OS === 'android') ?
            react_1.default.createElement(react_native_1.TouchableNativeFeedback, __assign({}, this.props, {onPress: onPress, background: react_native_1.TouchableNativeFeedback.Ripple(tc.activeColor, false), style: [
                { backgroundColor: tc.backgroundColor },
                !full && { borderRadius: buttonRadius, marginVertical: themes_1.default.margin / 2, marginHorizontal: themes_1.default.margin },
                round && styles_1.buttonStyles.round,
                disabled && styles_1.buttonStyles.disabled,
                style
            ]}), react_1.default.createElement(react_native_1.View, {style: [
                styles_1.buttonStyles.button,
                size && styles_1.buttonStyles[size],
                full && styles_1.buttonStyles.full,
                disabled && styles_1.buttonStyles.disabled,
                { backgroundColor: this.state.active ? tc.activeColor : tc.backgroundColor }
            ]}, textContents)) :
            react_1.default.createElement(react_native_1.TouchableHighlight, __assign({onPress: onPress, underlayColor: tc.activeColor, activeOpacity: 1, onShowUnderlay: this._highlight, onHideUnderlay: this._unhighlight}, this.props, {style: [
                { backgroundColor: tc.backgroundColor },
                !full && { borderRadius: buttonRadius, marginVertical: themes_1.default.margin / 2, marginHorizontal: themes_1.default.margin },
                round && styles_1.buttonStyles.round,
                disabled && styles_1.buttonStyles.disabled,
                style
            ]}), react_1.default.createElement(react_native_1.View, {style: [
                styles_1.buttonStyles.button,
                size && styles_1.buttonStyles[size],
                full && styles_1.buttonStyles.full,
                disabled && styles_1.buttonStyles.disabled,
                { backgroundColor: this.state.active ? tc.activeColor : tc.backgroundColor }
            ]}, textContents)));
    };
    Button.prototype._highlight = function () {
        this.setState({ active: true });
    };
    Button.prototype._unhighlight = function () {
        this.setState({ active: false });
    };
    return Button;
}(react_1.Component));
Button.propTypes = {
    onPress: react_1.PropTypes.func,
    children: react_1.PropTypes.oneOfType([
        react_1.PropTypes.string,
        react_1.PropTypes.arrayOf(react_1.PropTypes.node),
        react_1.PropTypes.node
    ]),
    text: react_1.PropTypes.any,
    size: react_1.PropTypes.string,
    full: react_1.PropTypes.bool,
    round: react_1.PropTypes.bool,
    clear: react_1.PropTypes.bool,
    outline: react_1.PropTypes.bool,
    color: react_1.PropTypes.string,
    disabled: react_1.PropTypes.bool,
    style: react_1.PropTypes.any
};
Button.defaultProps = {};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Button;
