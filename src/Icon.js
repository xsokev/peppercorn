import React, {PropTypes} from 'react';
import {Platform, View} from 'react-native';
import {theme} from './styles';
import {styles} from './styles/icon';

const Icon = (props) => {
  const IconSet = ((set) => {
    switch(set){
      case 'Entypo':
        return require('react-native-vector-icons/Entypo');
      break;
      case 'EvilIcons':
        return require('react-native-vector-icons/EvilIcons');
      break;
      case 'Foundation':
        return require('react-native-vector-icons/Foundation');
      break;
      case 'Ionicons':
        return require('react-native-vector-icons/Ionicons');
      break;
      case 'MaterialIcons':
        return require('react-native-vector-icons/MaterialIcons');
      break;
      case 'Octicons':
        return require('react-native-vector-icons/Octicons');
      break;
      case 'Zocial':
        return require('react-native-vector-icons/Zocial');
      break;
      case 'FontAwesome':
        return require('react-native-vector-icons/FontAwesome');
      break;
      default:
        return (Platform.OS === 'ios') ?
          require('react-native-vector-icons/FontAwesome') :
          require('react-native-vector-icons/MaterialIcons');
    }
  })(props.set);
  const color = theme[props.theme] || props.color || theme.black;
  return (
	   <IconSet name={props.name} size={props.size} color={color} style={[styles.icon, props.style]} />
  );
}

Icon.propTypes = {
  name: PropTypes.string,
  set: PropTypes.string,
  size: PropTypes.number,
  theme: PropTypes.string,
  color: PropTypes.string,
  style: PropTypes.any
};
Icon.defaultProps = {
  set: (Platform.OS === 'ios') ? 'FontAwesome' : 'MaterialIcons',
  size: 24
};

export default Icon;
