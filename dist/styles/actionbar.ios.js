import { StyleSheet } from 'react-native';
import theme from '../themes';
const { colors, margin, padding, width, actionbarHeight } = theme;
const sideWidth = 50;
const statusbarHeight = 20;
const styles = StyleSheet.create({
    actionbar: {
        height: actionbarHeight,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    actionbarHeader: {
        position: 'relative',
        top: 0, left: 0, right: 0,
        height: actionbarHeight + statusbarHeight,
        paddingTop: statusbarHeight
    },
    actionbarFooter: {
        alignSelf: 'flex-end',
        width: width,
        height: actionbarHeight
    },
    actionItem: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        borderWidth: 0,
        backgroundColor: colors.clear
    },
    actionItemText: {
        flex: 1,
        fontSize: 17
    },
    actionItemIcon: {
        flex: 0,
        marginRight: margin / 2
    },
    actionBarItem: {
        flexDirection: 'row',
        backgroundColor: colors.clear
    },
    actionBarCenter: {
        flex: 1,
        backgroundColor: colors.clear
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
export default styles;
