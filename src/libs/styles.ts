import { StyleSheet } from 'react-native';
import fonts from './fonts';

export default StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 30,
    },
    title: {
        fontFamily: fonts.heading
    }
})