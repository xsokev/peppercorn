var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
import React, { Component, PropTypes } from 'react';
import { View, Text, Slider, Platform } from 'react-native';
import Icon from './Icon';
import theme from './themes';
import { rangeStyles as styles } from './styles';
class Range extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: props.value || 0
        };
    }
    render() {
        const { style, textLeft, textRight, iconLeft, iconRight } = this.props;
        const hasAttachment = textLeft || textRight || iconLeft || iconRight;
        let tint = theme.colors.primary;
        if (theme.hasTheme(this.props)) {
            const tc = theme.color(this.props);
            tint = (() => {
                if (Platform.OS === 'ios') {
                    return tc.backgroundColor;
                }
            })();
        }
        if (hasAttachment) {
            let left, right;
            if (textLeft || iconLeft) {
                if (typeof textLeft === "string") {
                    left = React.createElement(Text, {style: [styles.text, { color: tint }]}, textLeft);
                }
                else if (typeof textLeft === "object") {
                    left = typeof textLeft.text === 'undefined' ? null : React.createElement(Text, {style: [
                        styles.text,
                        { color: tint },
                        textLeft.color && { color: textLeft.color },
                        textLeft.size && { fontSize: textLeft.size },
                        textLeft.style
                    ]}, textLeft.text);
                }
                if (typeof iconLeft === "string") {
                    left = React.createElement(Icon, {style: [styles.icon], name: iconLeft});
                }
                else if (typeof iconLeft === "object") {
                    left = iconLeft.name ? React.createElement(Icon, {style: [styles.icon], name: iconLeft.name, size: iconLeft.size || 18, color: iconLeft.color || tint}) : null;
                }
            }
            if (textRight || iconRight) {
                if (typeof textRight === "string") {
                    right = React.createElement(Text, {style: [styles.text, styles.textRight, { color: tint }]}, textRight);
                }
                else if (typeof textRight === "object") {
                    right = typeof textRight.text === 'undefined' ? null : React.createElement(Text, {style: [
                        styles.text,
                        styles.textRight,
                        { color: tint },
                        textRight.color && { color: textRight.color },
                        textRight.size && { fontSize: textRight.size },
                        textRight.style
                    ]}, textRight.text);
                }
                if (typeof iconRight === "string") {
                    right = React.createElement(Icon, {style: [styles.icon, styles.iconRight], name: iconRight});
                }
                else if (typeof iconRight === "object") {
                    right = iconRight.name ? React.createElement(Icon, {style: [styles.icon, styles.iconRight], name: iconRight.name, size: iconRight.size || 24, color: iconRight.color || tint}) : null;
                }
            }
            return (React.createElement(View, {style: [styles.range]}, left, React.createElement(Slider, __assign({}, this.props, {minimumTrackTintColor: tint, style: [styles.slider, style]})), right));
        }
        else {
            return (React.createElement(Slider, __assign({}, this.props, {minimumTrackTintColor: tint, style: [styles.slider, style]})));
        }
    }
}
Range.propTypes = {
    textLeft: PropTypes.oneOfType([
        PropTypes.shape({ text: PropTypes.string, color: PropTypes.string, size: PropTypes.number }),
        PropTypes.object,
        PropTypes.string
    ]),
    textRight: PropTypes.oneOfType([
        PropTypes.shape({ text: PropTypes.string, color: PropTypes.string, size: PropTypes.number }),
        PropTypes.object,
        PropTypes.string
    ]),
    iconLeft: PropTypes.oneOfType([
        PropTypes.shape({ name: PropTypes.string, color: PropTypes.string, size: PropTypes.number }),
        PropTypes.object,
        PropTypes.string
    ]),
    iconRight: PropTypes.oneOfType([
        PropTypes.shape({ name: PropTypes.string, color: PropTypes.string, size: PropTypes.number }),
        PropTypes.object,
        PropTypes.string
    ]),
    color: PropTypes.string,
    style: PropTypes.any
};
Range.defaultProps = {};
export default Range;
