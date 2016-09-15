"use strict";
var react_1 = require('react');
var react_native_1 = require('react-native');
var themes_1 = require('./themes');
var styles_1 = require('./styles');
var Icon = function (props) {
    var IconSet = (function (set) {
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
                return (react_native_1.Platform.OS === 'ios') ?
                    require('react-native-vector-icons/FontAwesome') :
                    require('react-native-vector-icons/MaterialIcons');
        }
    })(props.set);
    var tc = themes_1.default.color(props);
    return (react_1.default.createElement(IconSet, {name: props.name, size: props.size, color: tc.backgroundColor, style: [styles_1.iconStyles.icon, props.style]}));
};
Icon.propTypes = {
    name: react_1.PropTypes.string,
    set: react_1.PropTypes.string,
    size: react_1.PropTypes.number,
    color: react_1.PropTypes.string,
    style: react_1.PropTypes.any
};
Icon.defaultProps = {
    set: (react_native_1.Platform.OS === 'ios') ? 'FontAwesome' : 'MaterialIcons',
    size: 24,
    black: true
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Icon;
