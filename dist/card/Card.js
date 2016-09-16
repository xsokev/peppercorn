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
import { H5 } from '../Typography';
import { cardStyles as styles, cardShadow as shadow } from '../styles';
const Card = (props) => {
    let header, footer;
    if (typeof props.header !== 'undefined') {
        if (typeof props.header === 'string') {
            header = (React.createElement(View, {style: styles.header}, React.createElement(H5, {style: styles.headerText}, props.header)));
        }
        else {
            header = props.header;
        }
    }
    if (typeof props.footer !== 'undefined') {
        if (typeof props.footer === 'string') {
            footer = (React.createElement(View, {style: styles.footer}, React.createElement(H5, {style: styles.footerText}, props.footer)));
        }
        else {
            footer = (React.createElement(View, {style: [styles.footer, { padding: 0, paddingBottom: 0 }]}, props.footer));
        }
    }
    return (React.createElement(View, __assign({}, props, {shadowColor: shadow.color, shadowOffset: shadow.offset, shadowOpacity: shadow.opacity, shadowRadius: shadow.radius, style: [styles.card, props.style]}), header, React.createElement(View, {style: props.padding && styles.content}, props.children), footer));
};
Card.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ]),
    header: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.node
    ]),
    footer: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.node
    ]),
    padding: PropTypes.bool,
    style: PropTypes.any
};
Card.defaultProps = {};
export default Card;
