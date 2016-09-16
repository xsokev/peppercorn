import React, { PropTypes } from 'react';
import { Platform } from 'react-native';
import theme from './themes';
import { iconStyles as styles } from './styles';
const Icon = (props) => {
    const IconSet = ((set) => {
        switch (set) {
            case 'Entypo':
                return require('react-native-vector-icons/Entypo');
            case 'EvilIcons':
                return require('react-native-vector-icons/EvilIcons');
            case 'Foundation':
                return require('react-native-vector-icons/Foundation');
            case 'Ionicons':
                return require('react-native-vector-icons/Ionicons');
            case 'MaterialIcons':
                return require('react-native-vector-icons/MaterialIcons');
            case 'Octicons':
                return require('react-native-vector-icons/Octicons');
            case 'Zocial':
                return require('react-native-vector-icons/Zocial');
            case 'FontAwesome':
                return require('react-native-vector-icons/FontAwesome');
            default:
                return (Platform.OS === 'ios') ?
                    require('react-native-vector-icons/FontAwesome') :
                    require('react-native-vector-icons/MaterialIcons');
        }
    })(props.set);
    const tc = theme.color(props);
    return (React.createElement(IconSet, {name: props.name, size: props.size, color: tc.backgroundColor, style: [styles.icon, props.style]}));
};
Icon.propTypes = {
    name: PropTypes.string,
    set: PropTypes.string,
    size: PropTypes.number,
    color: PropTypes.string,
    style: PropTypes.any
};
Icon.defaultProps = {
    set: (Platform.OS === 'ios') ? 'FontAwesome' : 'MaterialIcons',
    size: 24,
    black: true
};
export default Icon;
