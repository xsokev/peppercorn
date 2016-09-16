import { StyleSheet } from 'react-native';
import theme from '../themes';
const { colors, margin, padding, width } = theme;
export const styles = StyleSheet.create({
    card: {
        flexDirection: 'column',
        marginBottom: 2 * margin,
        borderRadius: 2,
        backgroundColor: colors.white
    },
    header: {
        padding: 2 * padding,
        paddingBottom: padding,
        borderBottomWidth: StyleSheet.hairlineWidth,
        borderBottomColor: colors.border
    },
    headerText: {
        color: colors.dark
    },
    content: {
        padding: padding
    },
    footer: {
        padding: 2 * padding,
        paddingBottom: padding,
        borderTopWidth: StyleSheet.hairlineWidth,
        borderTopColor: colors.border
    },
    footerText: {
        color: colors.gray
    },
    imageHeader: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'flex-start',
        height: 200,
        width: width - 2 * margin
    },
    imageHeaderText: {
        backgroundColor: 'rgba(0,0,0,0.5)',
        color: colors.white,
        padding: 10,
        fontSize: 16,
        fontWeight: '600'
    }
});
export const shadow = {
    color: "rgba(0, 0, 0, 0.3)",
    offset: {
        width: 0,
        height: 1
    },
    opacity: 1,
    radius: 2
};
export default styles;
