import {StyleSheet} from 'react-native';
import {theme, margin, padding, width, toolbarHeight} from './';

export const styles = StyleSheet.create({
  toolbar: {
    height: toolbarHeight,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  toolbarHeader: {
    height: toolbarHeight+20,
    paddingTop: 20
  },
  toolbarFooter: {
    // stuff
  },
  toolbarTitle: {
    fontWeight: '600',
    fontSize: 20
  },
  toolbarLeft: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    overflow: 'hidden',
    paddingRight: padding,
    paddingVertical: padding
  },
  toolbarRight: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    overflow: 'hidden',
    paddingLeft: padding,
    paddingVertical: padding
  }
});
