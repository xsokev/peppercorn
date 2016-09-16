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
const ItemHeader = (props) => (React.createElement(View, __assign({}, props, {style: [styles.itemHeader, props.style]}), React.createElement(Text, {style: [styles.itemHeaderText, props.textStyle]}, props.children)));
ItemHeader.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ]),
    style: PropTypes.any,
    textStyle: PropTypes.any
};
ItemHeader.defaultProps = {};
export default ItemHeader;
