import { StyleSheet } from 'react-native';
import theme from '../themes';
const { colors, margin, padding, width } = theme;
const styles = StyleSheet.create({
    range: {
        flex: 0,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: padding,
        paddingVertical: padding / 2
    },
    slider: {
        flex: 1,
        height: 10,
        margin: margin
    },
    text: {
        flex: 0,
        color: colors.black,
        fontWeight: '400',
        fontSize: 12,
        paddingHorizontal: padding / 2,
        justifyContent: 'flex-start'
    },
    textRight: {
        textAlign: 'left',
        fontSize: 14,
        justifyContent: 'flex-end'
    },
    icon: {
        justifyContent: 'flex-start'
    },
    iconRight: {
        justifyContent: 'flex-end'
    }
});
export default styles;
