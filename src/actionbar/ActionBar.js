import React, {PropTypes} from 'react';
import {View, Text} from 'react-native';
import {themeColor} from '../styles';
import {styles} from '../styles/toolbar';

const ActionItemCenter = ({children}) => (
  <View style={[styles.actionBarItem, styles.actionBarCenter]}>{children}</View>
)
const ActionItemLeft = ({children}) => (
  <View style={[styles.actionBarItem, styles.actionBarLeft]}>{children}</View>
)
const ActionItemRight = ({children}) => (
  <View style={[styles.actionBarItem, styles.actionBarRight]}>{children}</View>
)

const ActionBar = (props) => {
  const tc = themeColor(props);
  let center = (<ActionItemCenter />),
      left = (<ActionItemLeft />),
      right = (<ActionItemRight />);
  if(props.title){
    if(typeof props.title === 'string'){
      center = (
        <ActionItemCenter>
          <Text style={[
            styles.actionBarTitle,
            {color: tc.textColor}
          ]}>{props.title}</Text>
        </ActionItemCenter>
      );
    } else {
      center = (<ActionItemCenter>{props.title}</ActionItemCenter>);
    }
  }
  if(props.left){
    left = (<ActionItemLeft>{props.left}</ActionItemLeft>);
  }
  if(props.right){
    right = (<ActionItemRight>{props.right}</ActionItemRight>);
  }
  return (
    <View
      style={[
        styles.toolbar,
        props.header && styles.toolbarHeader,
        props.footer && styles.toolbarFooter,
        {backgroundColor: tc.backgroundColor},
        props.style
      ]}>
      {left}
      {center}
      {right}
    </View>
  );
}
ActionBar.propTypes = {
  title: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.string,
    PropTypes.node
  ]),
  left: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]),
  right: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]),
  theme: PropTypes.string,
  footer: PropTypes.bool,
  header: PropTypes.bool,
  style: PropTypes.any
};
ActionBar.defaultProps = {
  theme: 'default'
};
export default ActionBar;
