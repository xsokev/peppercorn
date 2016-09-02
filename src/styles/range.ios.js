import {StyleSheet} from 'react-native';
import {theme, margin, padding, width} from './index';

export const styles = StyleSheet.create({
  range: {
    flex: 0,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 5,
    paddingVertical: 2
  },
  slider: {
    flex: 1,
    height: 10,
    margin: 10
  },
  text: {
    flex: 0,
    color: theme.black,
    fontWeight: '400',
    fontSize: 12,
    paddingHorizontal: padding/2,
    textAlign: 'right',
  },
  textright: {
    textAlign: 'left',
    fontSize: 16
  },
  icon: {
    
  }
});
