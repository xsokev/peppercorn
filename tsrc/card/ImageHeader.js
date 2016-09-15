import React, {PropTypes} from 'react';
import {View, Text, Image} from 'react-native';
import {H5} from '../Typography';
import {styles} from '../styles/card';

const ImageHeader = (props) => {
  let _image;
  if(typeof props.image === "string"){
    _image = require(props.image);
  } else {
    _image = props.image;
  }
  return (
    <Image {...props} source={_image} style={[styles.imageHeader, props.style]} resizeMode={props.mode}>
      <H5 style={[styles.imageHeaderText, props.textStyle]}>{props.caption}</H5>
    </Image>
  );
}
ImageHeader.propTypes = {
  image: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.any
  ]),
  mode: PropTypes.string,
  caption: PropTypes.string,
  style: PropTypes.object,
  textStyle: PropTypes.object
};
ImageHeader.defaultProps = {
  mode: "cover"
};

export default ImageHeader;
