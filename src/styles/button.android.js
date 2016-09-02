import {StyleSheet} from 'react-native';
import {theme, padding} from './';

const buttonRadius = 5;
export const styles = StyleSheet.create({
  button: {
    flex: 0,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: padding*2,
    paddingVertical: padding,
    borderRadius: buttonRadius
  },
  buttonText: {
    backgroundColor: theme.clear,
    textAlign: 'center',
    fontSize: 14
  },
  outline: {
    borderWidth: 1
  },
  clear: {
    borderWidth: 0,
    backgroundColor: theme.clear
  },
  round: {
    borderRadius: 50
  },
  full: {
    borderLeftWidth: 0,
    borderRightWidth: 0,
    borderRadius: 0
  },
  xsmall: {
    paddingHorizontal: padding,
    paddingVertical: padding/2
  },
  small: {
    paddingHorizontal: padding,
    paddingVertical: padding
  },
  large: {
    padding: padding*2
  },
  textxsmall: {
    fontSize: 10
  },
  textsmall: {
    fontSize: 12
  },
  textlarge: {
    fontSize: 20
  },
  disabled: {
    opacity: 0.7
  },
  disabledtext: {

  }
});
export {buttonRadius};
