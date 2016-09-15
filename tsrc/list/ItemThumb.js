import React, {PropTypes} from 'react';
import {View, Image} from 'react-native';
import {styles} from '../styles/list';

const ItemThumb = (props) => (
  <View {...props} style={[styles.thumb, props.style]}>
    <Image source={props.image} resizeMode="cover" style={[styles.thumbImage, props.avatar && styles.avatar]} />
  </View>
);

ItemThumb.propTypes = {
  image: PropTypes.any,
  avatar: PropTypes.bool,
  style: PropTypes.any
};
ItemThumb.defaultProps = {};

export default ItemThumb;
