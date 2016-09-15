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
var Icon_1 = require('./Icon');
var themes_1 = require('./themes');
var styles_1 = require('./styles');
var Range = (function (_super) {
    __extends(Range, _super);
    function Range(props) {
        _super.call(this, props);
        this.state = {
            value: props.value || 0
        };
    }
    Range.prototype.render = function () {
        var _a = this.props, style = _a.style, textLeft = _a.textLeft, textRight = _a.textRight, iconLeft = _a.iconLeft, iconRight = _a.iconRight;
        var hasAttachment = textLeft || textRight || iconLeft || iconRight;
        var tint = themes_1.default.colors.primary;
        if (themes_1.default.hasTheme(this.props)) {
            var tc_1 = themes_1.default.color(this.props);
            tint = (function () {
                if (react_native_1.Platform.OS === 'ios') {
                    return tc_1.backgroundColor;
                }
            })();
        }
        if (hasAttachment) {
            var left = void 0, right = void 0;
            if (textLeft || iconLeft) {
                if (typeof textLeft === "string") {
                    left = react_1.default.createElement(react_native_1.Text, {style: [styles_1.rangeStyles.text, { color: tint }]}, textLeft);
                }
                else if (typeof textLeft === "object") {
                    left = typeof textLeft.text === 'undefined' ? null : react_1.default.createElement(react_native_1.Text, {style: [
                        styles_1.rangeStyles.text,
                        { color: tint },
                        textLeft.color && { color: textLeft.color },
                        textLeft.size && { fontSize: textLeft.size },
                        textLeft.style
                    ]}, textLeft.text);
                }
                if (typeof iconLeft === "string") {
                    left = react_1.default.createElement(Icon_1.default, {style: [styles_1.rangeStyles.icon], name: iconLeft});
                }
                else if (typeof iconLeft === "object") {
                    left = iconLeft.name ? react_1.default.createElement(Icon_1.default, {style: [styles_1.rangeStyles.icon], name: iconLeft.name, size: iconLeft.size || 18, color: iconLeft.color || tint}) : null;
                }
            }
            if (textRight || iconRight) {
                if (typeof textRight === "string") {
                    right = react_1.default.createElement(react_native_1.Text, {style: [styles_1.rangeStyles.text, styles_1.rangeStyles.textRight, { color: tint }]}, textRight);
                }
                else if (typeof textRight === "object") {
                    right = typeof textRight.text === 'undefined' ? null : react_1.default.createElement(react_native_1.Text, {style: [
                        styles_1.rangeStyles.text,
                        styles_1.rangeStyles.textRight,
                        { color: tint },
                        textRight.color && { color: textRight.color },
                        textRight.size && { fontSize: textRight.size },
                        textRight.style
                    ]}, textRight.text);
                }
                if (typeof iconRight === "string") {
                    right = react_1.default.createElement(Icon_1.default, {style: [styles_1.rangeStyles.icon, styles_1.rangeStyles.iconRight], name: iconRight});
                }
                else if (typeof iconRight === "object") {
                    right = iconRight.name ? react_1.default.createElement(Icon_1.default, {style: [styles_1.rangeStyles.icon, styles_1.rangeStyles.iconRight], name: iconRight.name, size: iconRight.size || 24, color: iconRight.color || tint}) : null;
                }
            }
            return (react_1.default.createElement(react_native_1.View, {style: [styles_1.rangeStyles.range]}, left, react_1.default.createElement(react_native_1.Slider, __assign({}, this.props, {minimumTrackTintColor: tint, style: [styles_1.rangeStyles.slider, style]})), right));
        }
        else {
            return (react_1.default.createElement(react_native_1.Slider, __assign({}, this.props, {minimumTrackTintColor: tint, style: [styles_1.rangeStyles.slider, style]})));
        }
    };
    return Range;
}(react_1.Component));
Range.propTypes = {
    textLeft: react_1.PropTypes.oneOfType([
        react_1.PropTypes.shape({ text: react_1.PropTypes.string, color: react_1.PropTypes.string, size: react_1.PropTypes.number }),
        react_1.PropTypes.object,
        react_1.PropTypes.string
    ]),
    textRight: react_1.PropTypes.oneOfType([
        react_1.PropTypes.shape({ text: react_1.PropTypes.string, color: react_1.PropTypes.string, size: react_1.PropTypes.number }),
        react_1.PropTypes.object,
        react_1.PropTypes.string
    ]),
    iconLeft: react_1.PropTypes.oneOfType([
        react_1.PropTypes.shape({ name: react_1.PropTypes.string, color: react_1.PropTypes.string, size: react_1.PropTypes.number }),
        react_1.PropTypes.object,
        react_1.PropTypes.string
    ]),
    iconRight: react_1.PropTypes.oneOfType([
        react_1.PropTypes.shape({ name: react_1.PropTypes.string, color: react_1.PropTypes.string, size: react_1.PropTypes.number }),
        react_1.PropTypes.object,
        react_1.PropTypes.string
    ]),
    color: react_1.PropTypes.string,
    style: react_1.PropTypes.any
};
Range.defaultProps = {};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Range;
