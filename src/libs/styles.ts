import { StyleSheet } from 'react-native';
import colors from './colors';
import fonts from './fonts';

export default StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 30,
    },
    title: {
        fontFamily: fonts.text,
        textAlign: 'center',
        fontSize: 30,
        marginBottom: 40,
        color: colors.text
    },
    loading: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    result: {
        flex: 1,
        justifyContent: 'center'
    },
    quoteBack: {
        position: 'absolute',
        fontSize: 300,
        color: colors.white,
        opacity: .3,
        fontFamily: fonts.text,
        left: 0,
        top: 70,
    },
    adviceResult: {
        fontFamily: fonts.text,
        fontSize: 40,
        color: colors.white,
    },
    author: {
        marginTop: 20,
        fontFamily: fonts.text,
        fontSize: 20,
        color: colors.white,
    },
    actions: {
        paddingVertical: 40,
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    button: {
        backgroundColor: colors.white,
        width: 50,
        height: 50,
        borderRadius: 25,
        marginHorizontal: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
})