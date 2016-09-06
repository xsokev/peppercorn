import {StyleSheet} from 'react-native';
import {theme, margin, padding, width, actionbarHeight} from './';

export const styles = StyleSheet.create({
  actionbar: {
    height: actionbarHeight,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  actionbarHeader: {
    height: actionbarHeight+20,
    paddingTop: 20
  },
  actionbarFooter: {
    // stuff
  },
  actionbarTitle: {
    fontWeight: '600',
    fontSize: 20
  },
  actionbarLeft: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    overflow: 'hidden',
    paddingRight: padding,
    paddingVertical: padding
  },
  actionbarRight: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    overflow: 'hidden',
    paddingLeft: padding,
    paddingVertical: padding
  }
});
