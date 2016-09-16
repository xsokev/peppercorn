var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
import React, { PropTypes } from 'react';
import { Platform, TouchableNativeFeedback, TouchableHighlight, View } from 'react-native';
import theme from '../themes';
import { listStyles as styles } from '../styles';
const { colors } = theme;
const Item = (props) => ((Platform.OS === 'android') ?
    React.createElement(TouchableNativeFeedback, __assign({}, props, {onPress: props.onPress, background: TouchableNativeFeedback.Ripple(colors.light, false)}), React.createElement(View, {style: [styles.item, props.style]}, props.children)) :
    React.createElement(TouchableHighlight, __assign({}, props, {underlay: colors.light, onPress: props.onPress}), React.createElement(View, {style: [styles.item, props.style]}, props.children)));
Item.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ]),
    onPress: PropTypes.func,
    style: PropTypes.any
};
Item.defaultProps = {};
export default Item;
