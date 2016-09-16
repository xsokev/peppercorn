import React, { PropTypes } from 'react';
import { View, Text } from 'react-native';
import theme from '../themes/index';
import { actionBarStyles as styles } from '../styles/index';
const { color } = theme;
const ActionItemCenter = ({ children }) => (React.createElement(View, {style: [styles.actionBarItem, styles.actionBarCenter]}, children));
const ActionItemLeft = ({ children }) => (React.createElement(View, {style: [styles.actionBarItem, styles.actionBarLeft]}, children));
const ActionItemRight = ({ children }) => (React.createElement(View, {style: [styles.actionBarItem, styles.actionBarRight]}, children));
const ActionBar = (props) => {
    const tc = color(props);
    let center = (React.createElement(ActionItemCenter, null)), left = (React.createElement(ActionItemLeft, null)), right = (React.createElement(ActionItemRight, null));
    if (props.title) {
        if (typeof props.title === 'string') {
            center = (React.createElement(ActionItemCenter, null, React.createElement(Text, {style: [
                styles.actionBarTitle,
                { color: tc.textColor }
            ]}, props.title)));
        }
        else {
            center = (React.createElement(ActionItemCenter, null, props.title));
        }
    }
    if (props.left) {
        left = (React.createElement(ActionItemLeft, null, props.left));
    }
    if (props.right) {
        right = (React.createElement(ActionItemRight, null, props.right));
    }
    return (React.createElement(View, {style: [
        styles.actionbar,
        props.header && styles.actionbarHeader,
        props.footer && styles.actionbarFooter,
        { backgroundColor: tc.backgroundColor },
        props.style
    ]}, left, center, right));
};
ActionBar.propTypes = {
    title: PropTypes.oneOfType([
        PropTypes.instanceOf(PropTypes.node),
        PropTypes.string
    ]),
    left: PropTypes.oneOfType([
        PropTypes.node,
        PropTypes.arrayOf(PropTypes.node)
    ]),
    right: PropTypes.oneOfType([
        PropTypes.node,
        PropTypes.arrayOf(PropTypes.node)
    ]),
    footer: PropTypes.bool,
    header: PropTypes.bool,
    style: PropTypes.any
};
ActionBar.defaultProps = {};
export default ActionBar;
