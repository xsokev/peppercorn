var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
import React, { PropTypes } from 'react';
import { View } from 'react-native';
import Icon from '../Icon';
import { listStyles as styles } from '../styles';
const ItemIcon = (props) => {
    return (React.createElement(View, {style: [styles.icon, props.style, props.right && styles.iconRight]}, React.createElement(Icon, __assign({}, props))));
};
ItemIcon.propTypes = {
    name: PropTypes.string,
    set: PropTypes.string,
    size: PropTypes.number,
    color: PropTypes.string,
    right: PropTypes.bool,
    style: PropTypes.any
};
export default ItemIcon;
