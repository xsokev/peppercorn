import {StyleSheet} from 'react-native';
import {theme, margin, padding, width, toolbarHeight} from './';

const sideWidth = 50;
export const styles = StyleSheet.create({
  toolbar: {
    height: toolbarHeight,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  toolbarHeader: {
    position: 'relative',
    top: 0, left: 0, right: 0,
    height: toolbarHeight+20,
    paddingTop: 20
  },
  toolbarFooter: {
    alignSelf: 'flex-end',
    width: width,
    height: toolbarHeight
  },
  actionItem: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    borderWidth: 0,
    backgroundColor: theme.clear
  },
  actionItemText: {
    flex: 1,
    fontSize: 17
  },
  actionItemIcon: {
    flex: 0,
    marginRight: margin/2
  },
  actionBarItem: {
    flexDirection: 'row',
    backgroundColor: theme.clear
  },
  actionBarCenter: {
    flex: 1,
    backgroundColor: theme.clear
  },
  actionBarTitle: {
    flex: 1,
    textAlign: 'center',
    fontWeight: '600',
    fontSize: 17
  },
  actionBarLeft: {
    width: sideWidth,
    justifyContent: 'flex-start',
    paddingVertical: 0,
  },
  actionBarRight: {
    width: sideWidth,
    justifyContent: 'flex-end',
    paddingLeft: padding
  }
});
