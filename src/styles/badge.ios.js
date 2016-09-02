import {StyleSheet} from 'react-native';
import {theme} from './index';

export const styles = StyleSheet.create({
  badge: {
    flex: 0,
    paddingHorizontal: 10,
    paddingVertical: 3,
    borderRadius: 50
  },
  badgeText: {
    backgroundColor: theme.clear,
    textAlign: 'center',
    fontWeight: '600',
    fontSize: 14
  }
});
