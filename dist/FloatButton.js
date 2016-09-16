import React, { PropTypes } from 'react';
import { Platform, View, TouchableNativeFeedback, TouchableHighlight } from 'react-native';
import Icon from './Icon';
import theme from './themes';
import { floatbuttonStyles as styles, floatShadow as shadow, floatRadius as radius, floatRadiusMini as radiusMini } from './styles';
const FloatButton = (props) => {
    const { icon, mini, position, depth, offset, active, disabled, style } = props;
    const tc = theme.color(props, active);
    const bc = tc.backgroundColor;
    const onPress = disabled ? null : props.onPress;
    let _icon;
    if (icon) {
        if (typeof icon === 'string') {
            _icon = (React.createElement(Icon, {name: icon, color: tc.textColor, size: 24, style: [styles.buttonIcon]}));
        }
        else {
            _icon = (React.createElement(Icon, {name: icon.icon, set: icon.set, color: icon.theme && theme[icon.theme] || tc.textColor, size: icon.size || 24, style: [styles.buttonIcon, icon.style]}));
        }
    }
    return ((Platform.OS === 'android') ?
        React.createElement(TouchableNativeFeedback, {onPress: onPress, background: TouchableNativeFeedback.Ripple(tc.activeColor, false), style: [
            { backgroundColor: bc, borderRadius: radius / 2 },
            styles.container,
            position && theme.position(position, (mini ? { w: radiusMini, h: radiusMini } : { w: radius, h: radius }), offset)
        ]}, React.createElement(View, {shadowColor: shadow.color, shadowOffset: shadow.offset, shadowOpacity: shadow.opacity, shadowRadius: props.depth, style: [
            styles.button,
            { backgroundColor: bc },
            mini && styles.mini,
            disabled && styles.disabled,
            style
        ]}, _icon)) :
        React.createElement(TouchableHighlight, {onPress: onPress, underlayColor: tc.activeColor, style: [
            { backgroundColor: bc, borderRadius: radius / 2 },
            styles.container,
            position && theme.position(position, (mini ? { w: radiusMini, h: radiusMini } : { w: radius, h: radius }), offset)
        ]}, React.createElement(View, {shadowColor: shadow.color, shadowOffset: shadow.offset, shadowOpacity: props.depth === 0 ? 0 : shadow.opacity, shadowRadius: props.depth, style: [
            styles.button,
            { backgroundColor: bc },
            mini && styles.mini,
            disabled && styles.disabled,
            style
        ]}, _icon)));
};
FloatButton.propTypes = {
    onPress: PropTypes.func,
    icon: PropTypes.string,
    mini: PropTypes.bool,
    depth: PropTypes.number,
    position: PropTypes.oneOf(['TL', 'T', 'TR', 'ML', 'M', 'MR', 'BL', 'B', 'BR',]),
    offset: PropTypes.shape({ h: PropTypes.number, v: PropTypes.number }),
    active: PropTypes.bool,
    disabled: PropTypes.bool,
    color: PropTypes.string,
    style: PropTypes.any
};
FloatButton.defaultProps = {
    depth: Platform.OS === 'android' ? 2 : 0,
    offset: { h: 0, v: 0 }
};
export default FloatButton;
