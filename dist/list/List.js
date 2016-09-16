var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
import React, { PropTypes } from 'react';
import { ScrollView, View } from 'react-native';
import { listStyles as styles } from '../styles';
const List = (props) => {
    const { inset, noscroll, children, stickyHeader } = props;
    let stickyIndices = [];
    children.forEach((child, i) => {
        if (stickyHeader) {
            if (child && (child.type.name === "ItemDivider" || child.type.name === "ItemHeader")) {
                stickyIndices.push(i);
            }
        }
        if (i === children.length - 1 && child && child.type && child.type.name === "Item") {
        }
    });
    const contentStyle = [styles.list, inset && styles.listMargin, props.style];
    if (noscroll) {
        return (React.createElement(View, __assign({}, props, {style: contentStyle}), children));
    }
    return (React.createElement(ScrollView, __assign({}, props, {style: contentStyle, stickyHeaderIndices: stickyIndices}), props.children));
};
List.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ]),
    inset: PropTypes.bool,
    noscroll: PropTypes.bool,
    stickyHeader: PropTypes.bool,
    style: PropTypes.any
};
List.defaultProps = {};
export default List;
