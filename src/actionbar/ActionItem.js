import React, {PropTypes} from 'react';
import {TouchableOpacity, View, Text} from 'react-native';
import Icon from '../Icon';
import {theme, themeColor, margin} from '../styles';
import {styles} from '../styles/toolbar';

const ActionItem = (props) => {
  const tc = themeColor(props);
  let _icon, _label;
  if(props.icon){
    if(typeof props.icon === 'string'){
      _icon = (<Icon name={props.icon} color={tc.textColor} size={props.icon.size || 38} style={[styles.actionItemIcon, props.icon.style]} />);
    } else {
      _icon = (<Icon name={props.icon.icon} set={props.icon.set} color={props.icon.theme && theme[props.icon.theme] || tc.textColor} size={props.icon.size || 38} style={[styles.actionItemIcon, props.icon.style]} />);
    }
  }
  if(props.label){
    if(typeof props.label === 'string'){
      _label = (<Text style={[styles.actionItemText, {color: tc.textColor}]}>{props.label}</Text>);
    } else {
      _label = (<Text style={[styles.actionItemText, {color: props.label.theme && theme[props.label.theme] || tc.textColor}]}>{props.label.text}</Text>);
    }
  }
  return (
    <TouchableOpacity
      style={[{marginHorizontal: margin, backgroundColor: 'rgba(0,0,0,0.3)'}]}
      onPress={props.action}>
      <View
        style={[
          styles.actionItem,
          props.disabled && styles.disabled,
          {backgroundColor: tc.backgroundColor},
          props.style
        ]}>
        {_icon}
        {_label}
      </View>
    </TouchableOpacity>
  );
}
ActionItem.propTypes = {
  theme: PropTypes.string,
  label: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.string
  ]),
  icon: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.string
  ]),
  action: PropTypes.func,
  disabled: PropTypes.bool,
  style: PropTypes.any
};
ActionItem.defaultProps = {
  theme: 'default',
  action: function(){}
};
export default ActionItem;
