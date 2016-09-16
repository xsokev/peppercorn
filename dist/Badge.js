var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
import React, { PropTypes } from 'react';
import { Text, View } from 'react-native';
import theme from './themes';
import { badgeStyles as styles } from './styles';
const Badge = (props) => {
    const tc = theme.color(props, false);
    return (React.createElement(View, __assign({}, props, {style: [styles.badge, props.style, { backgroundColor: tc.backgroundColor }]}), React.createElement(Text, {style: [styles.badgeText, { color: tc.textColor }]}, props.text || props.children || "")));
};
Badge.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ]),
    text: PropTypes.any,
    color: PropTypes.string,
    style: PropTypes.any
};
Badge.defaultProps = {};
export default Badge;
