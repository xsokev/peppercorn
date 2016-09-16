var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
import React, { PropTypes } from 'react';
import { View, Text } from 'react-native';
import { listStyles as styles } from '../styles';
const ItemDivider = (props) => (React.createElement(View, __assign({}, props, {style: [styles.itemDivider, props.style]}), React.createElement(Text, {style: [styles.itemDividerText, props.textStyle]}, (props.text || props.children || "").toUpperCase())));
ItemDivider.propTypes = {
    children: PropTypes.string,
    text: PropTypes.string,
    style: PropTypes.any,
    textStyle: PropTypes.any
};
ItemDivider.defaultProps = {};
export default ItemDivider;
