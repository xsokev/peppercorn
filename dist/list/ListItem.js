var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
import React, { PropTypes } from 'react';
import Item from './Item';
import ItemContent from './ItemContent';
import ItemText from './ItemText';
import ItemIcon from './ItemIcon';
import ItemThumb from './ItemThumb';
const ListItem = (props) => {
    let _thumb, _icon;
    const { text, children, note, icon, badge, accessory, noline, thumb, style, contentStyle, onPress } = props;
    const _content = children || text;
    if (thumb) {
        if (thumb.image) {
            _thumb = (React.createElement(ItemThumb, {image: thumb.image, avatar: thumb.avatar, style: thumb.style}));
        }
        else {
            if (typeof thumb === "string") {
                _thumb = (React.createElement(ItemThumb, {image: require(thumb)}));
            }
            else {
                _thumb = (React.createElement(ItemThumb, {image: thumb}));
            }
        }
    }
    if (icon) {
        if (typeof icon === "string") {
            _icon = (React.createElement(ItemIcon, {name: icon}));
        }
        else {
            _icon = (React.createElement(ItemIcon, {name: icon.icon, set: icon.set, color: icon.color, style: icon.style}));
        }
    }
    return (React.createElement(Item, __assign({}, props, {onPress: onPress, style: style}), _thumb, _icon, React.createElement(ItemContent, {accessory: accessory, note: note, noline: noline, style: contentStyle}, React.createElement(ItemText, null, _content))));
};
ListItem.propTypes = {
    text: PropTypes.string,
    onPress: PropTypes.func,
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ]),
    note: PropTypes.oneOfType([
        PropTypes.node,
        PropTypes.string
    ]),
    icon: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.shape({
            icon: PropTypes.string,
            set: PropTypes.string,
            color: PropTypes.string,
            style: PropTypes.any
        })
    ]),
    badge: PropTypes.string,
    accessory: PropTypes.oneOf(['checkmark', 'disclosure', 'detail']),
    noline: PropTypes.bool,
    thumb: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.any,
        PropTypes.shape({
            image: PropTypes.any,
            avatar: PropTypes.bool,
            style: PropTypes.any
        })
    ]),
    contentStyle: PropTypes.any,
    style: PropTypes.any
};
ListItem.defaultProps = {};
export default ListItem;
