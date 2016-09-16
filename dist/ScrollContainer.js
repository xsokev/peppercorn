var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
import React, { PropTypes } from 'react';
import { ScrollView } from 'react-native';
import { containerStyles as styles } from './styles';
const ScrollContainer = (props) => {
    const contentStyle = [props.padding && styles.padding, props.style];
    return (React.createElement(ScrollView, __assign({}, props, {style: styles.container, contentContainerStyle: contentStyle}), props.children));
};
ScrollContainer.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node,
    ]),
    padding: PropTypes.bool,
    style: PropTypes.any
};
ScrollContainer.defaultProps = {};
export default ScrollContainer;
