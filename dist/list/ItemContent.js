var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
import React, { PropTypes } from 'react';
import { Platform, View, Text } from 'react-native';
import Icon from '../Icon';
import Badge from '../Badge';
import { listStyles as styles } from '../styles';
const ItemRight = ({ children }) => (React.createElement(View, {style: [styles.itemRight]}, children));
const ItemContent = (props) => {
    // check Platform and use
    let accessory;
    if (typeof props.accessory !== 'undefined') {
        if (props.accessory === 'checkmark') {
            accessory = (React.createElement(Icon, {name: "check", style: styles.accessory, right: true, primary: true}));
        }
        else if (props.accessory === 'disclosure') {
            accessory = (React.createElement(Icon, {name: Platform.OS === 'android' ? 'md-arrow-forward' : 'ios-arrow-forward', set: "Ionicons", style: styles.accessory, right: true, gray: true}));
        }
        else if (props.accessory === 'detail') {
        }
    }
    const noline = (typeof props.noline !== 'undefined');
    let note;
    if (typeof props.note !== 'undefined') {
        if (typeof props.note === 'string') {
            note = (React.createElement(Text, {style: styles.noteText}, props.note));
        }
        else {
            note = props.note;
        }
    }
    else if (typeof props.badge !== 'undefined') {
        if (typeof props.badge === 'string') {
            note = (React.createElement(Badge, {style: styles.badgeText, text: props.badge}));
        }
        else {
            note = props.badge;
        }
    }
    return (React.createElement(View, __assign({}, props, {style: [styles.itemContent, noline && styles.itemNoLine, props.style]}), React.createElement(View, {style: styles.itemText}, props.children), React.createElement(View, {style: [styles.itemRight]}, note, accessory)));
};
ItemContent.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ]),
    note: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node,
        PropTypes.string
    ]),
    badge: PropTypes.oneOfType([
        PropTypes.string,
        React.PropTypes.instanceOf(Badge)
    ]),
    accessory: PropTypes.oneOf(['checkmark', 'disclosure', 'detail']),
    noline: PropTypes.bool,
    style: PropTypes.any
};
ItemContent.defaultProps = {};
export default ItemContent;
