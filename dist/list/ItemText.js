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
const ItemText = (props) => {
    if (typeof props.children !== 'string' && props.children.length > 1) {
        const mainText = (props.children.length > 0) ?
            (React.createElement(Text, __assign({}, props, {style: [styles.itemMultilinePrimaryText, props.style]}), props.children[0])) :
            null;
        const subText = (props.children.length > 1) ? props.children.slice(1) : null;
        return (React.createElement(View, __assign({}, props, {style: [styles.multilineContainer, props.style]}), mainText, subText));
    }
    return (React.createElement(Text, __assign({}, props, {style: [styles.itemMultilinePrimaryText, props.style]}), props.children));
};
ItemText.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ]),
    style: PropTypes.any
};
ItemText.defaultProps = {};
export default ItemText;
