import React, {PropTypes} from 'react';
import {View, Text} from 'react-native';
import {styles} from '../styles/list';

const ItemText = (props) => {
  if(typeof props.children!=='string' && props.children.length > 1){
    const mainText = (props.children.length > 0) ?
      (<Text {...props} style={[styles.itemMultilinePrimaryText, props.style]}>{props.children[0]}</Text>) :
      null;
    const subText = (props.children.length > 1) ? props.children.slice(1) : null;
    return (
      <View {...props} style={[styles.multilineContainer, props.style]}>
        {mainText}
        {subText}
      </View>
    )
  }
  return (
    <Text {...props} style={[styles.itemMultilinePrimaryText, props.style]}>
      {props.children}
    </Text>
  )
}
ItemText.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]),
  style: PropTypes.any
};
ItemText.defaultProps = {};

export default ItemText;
