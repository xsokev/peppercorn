import { StyleSheet } from 'react-native';
import theme from '../themes';
const { colors, padding } = theme;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.light
    },
    padding: {
        padding: padding
    }
});
export default styles;
