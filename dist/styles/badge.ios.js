import { StyleSheet } from 'react-native';
import theme from '../themes';
const { colors, padding } = theme;
const styles = StyleSheet.create({
    badge: {
        flex: 0,
        paddingHorizontal: padding,
        paddingVertical: 3,
        borderRadius: 50
    },
    badgeText: {
        backgroundColor: colors.clear,
        textAlign: 'center',
        fontWeight: '600',
        fontSize: 14
    }
});
export default styles;
