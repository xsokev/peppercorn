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
import { containerStyles as styles } from './styles';
const Container = (props) => {
    const contentStyle = [styles.container, props.padding && styles.padding, props.style];
    return (React.createElement(View, __assign({}, props, {style: contentStyle}), props.children));
};
Container.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node,
    ]),
    padding: PropTypes.bool,
    style: PropTypes.any
};
Container.defaultProps = {};
export default Container;
