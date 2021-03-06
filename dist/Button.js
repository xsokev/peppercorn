var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
import React, { Component, PropTypes } from 'react';
import { Platform, Text, View, TouchableNativeFeedback, TouchableHighlight, TouchableOpacity } from 'react-native';
import theme from './themes';
import { buttonStyles as styles } from './styles';
const { buttonRadius } = theme;
class Button extends Component {
    constructor(props) {
        super(props);
        this.state = {
            active: false
        };
        this._highlight = this._highlight.bind(this);
        this._unhighlight = this._unhighlight.bind(this);
    }
    render() {
        const tc = theme.color(this.props, this.state.active);
        const { text, children, size, full, clear, outline, round, color, disabled, style } = this.props;
        const onPress = disabled ? null : this.props.onPress;
        const contents = text || children || "";
        const textContents = (React.createElement(Text, {style: [
            styles.buttonText,
            { color: tc.textColor },
            size && styles["text" + size]]}, contents));
        if (clear) {
            return (React.createElement(TouchableOpacity, __assign({}, this.props, {style: [style, !full && { borderRadius: buttonRadius, marginVertical: theme.margin / 2, marginHorizontal: theme.margin }], onPress: onPress}), React.createElement(View, {style: [
                styles.button, styles.clear,
                size && styles[size],
                full && styles.full,
                disabled && styles.disabled,
                { backgroundColor: tc.backgroundColor }
            ]}, textContents)));
        }
        else if (outline) {
            return ((Platform.OS === 'android') ?
                React.createElement(TouchableNativeFeedback, __assign({}, this.props, {onPress: onPress, background: TouchableNativeFeedback.Ripple(tc.activeColor, false), style: [
                    { backgroundColor: tc.backgroundColor },
                    !full && { borderRadius: buttonRadius, marginVertical: theme.margin / 2, marginHorizontal: theme.margin },
                    round && styles.round,
                    disabled && styles.disabled,
                    style
                ]}), React.createElement(View, {style: [
                    styles.button, styles.outline,
                    size && styles[size],
                    full && styles.full,
                    disabled && styles.disabled,
                    { borderColor: tc.borderColor, backgroundColor: tc.backgroundColor }
                ]}, textContents)) :
                React.createElement(TouchableHighlight, __assign({onPress: onPress, underlayColor: tc.activeColor, activeOpacity: 1, onShowUnderlay: this._highlight, onHideUnderlay: this._unhighlight}, this.props, {style: [
                    { backgroundColor: tc.backgroundColor },
                    !full && { borderRadius: buttonRadius, marginVertical: theme.margin / 2, marginHorizontal: theme.margin },
                    round && styles.round,
                    disabled && styles.disabled,
                    style
                ]}), React.createElement(View, {style: [
                    styles.button, styles.outline,
                    size && styles[size],
                    full && styles.full,
                    disabled && styles.disabled,
                    { borderColor: tc.borderColor, backgroundColor: tc.backgroundColor }
                ]}, textContents)));
        }
        return ((Platform.OS === 'android') ?
            React.createElement(TouchableNativeFeedback, __assign({}, this.props, {onPress: onPress, background: TouchableNativeFeedback.Ripple(tc.activeColor, false), style: [
                { backgroundColor: tc.backgroundColor },
                !full && { borderRadius: buttonRadius, marginVertical: theme.margin / 2, marginHorizontal: theme.margin },
                round && styles.round,
                disabled && styles.disabled,
                style
            ]}), React.createElement(View, {style: [
                styles.button,
                size && styles[size],
                full && styles.full,
                disabled && styles.disabled,
                { backgroundColor: this.state.active ? tc.activeColor : tc.backgroundColor }
            ]}, textContents)) :
            React.createElement(TouchableHighlight, __assign({onPress: onPress, underlayColor: tc.activeColor, activeOpacity: 1, onShowUnderlay: this._highlight, onHideUnderlay: this._unhighlight}, this.props, {style: [
                { backgroundColor: tc.backgroundColor },
                !full && { borderRadius: buttonRadius, marginVertical: theme.margin / 2, marginHorizontal: theme.margin },
                round && styles.round,
                disabled && styles.disabled,
                style
            ]}), React.createElement(View, {style: [
                styles.button,
                size && styles[size],
                full && styles.full,
                disabled && styles.disabled,
                { backgroundColor: this.state.active ? tc.activeColor : tc.backgroundColor }
            ]}, textContents)));
    }
    _highlight() {
        this.setState({ active: true });
    }
    _unhighlight() {
        this.setState({ active: false });
    }
}
Button.propTypes = {
    onPress: PropTypes.func,
    children: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ]),
    text: PropTypes.any,
    size: PropTypes.string,
    full: PropTypes.bool,
    round: PropTypes.bool,
    clear: PropTypes.bool,
    outline: PropTypes.bool,
    color: PropTypes.string,
    disabled: PropTypes.bool,
    style: PropTypes.any
};
Button.defaultProps = {};
export default Button;
