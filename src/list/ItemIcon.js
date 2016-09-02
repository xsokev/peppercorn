import React, {PropTypes} from 'react';
import {View} from 'react-native';
import Icon from '../Icon';
import {styles} from '../styles/list';

const ItemIcon = (props) => {
  return (
    <View style={[styles.icon, props.style, props.right && styles.iconRight]}>
      <Icon {...props} />
    </View>
  );
}
ItemIcon.propTypes = {
  name: PropTypes.string,
  set: PropTypes.string,
  size: PropTypes.number,
  theme: PropTypes.string,
  color: PropTypes.string,
  right: PropTypes.bool,
  style: PropTypes.any
};

export default ItemIcon;
