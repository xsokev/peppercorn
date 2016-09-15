import React, {PropTypes} from 'react';
import {TouchableOpacity, View, Text} from 'react-native';
import Icon from '../Icon';
import theme from '../themes';
import {styles} from '../styles/actionbar';

const {colors, color, margin} = theme;

const ActionItem = (props) => {
  const tc = color(props);
  let contents = props.children;
  if(props.children){
    content = (
      <View>{props.children}</View>
    )
  } else {
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
        _label = (<Text style={[styles.actionItemText, {color: props.label.theme && colors[props.label.theme] || tc.textColor}]}>{props.label.text}</Text>);
      }
    }
    contents = (
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
    );
    const action = props.disabled ? null : props.action;
  }
  return (
    <TouchableOpacity
      style={[{marginHorizontal: margin, backgroundColor: 'rgba(0,0,0,0.3)'}]}
      onPress={action}>
      {contents}
    </TouchableOpacity>
  );
}
ActionItem.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]),
  label: PropTypes.oneOfType([
    PropTypes.shape({
      text: React.PropTypes.string,
      theme: React.PropTypes.string
    }),
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
  action: function(){}
};
export default ActionItem;
