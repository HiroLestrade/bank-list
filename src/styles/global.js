import { StyleSheet } from 'react-native';

export const globalStyles = StyleSheet.create({
    screenContainer: {
        height: '100%',
        width: '100%',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    title:{
        fontSize: 30,
        fontWeight: 'bold',
        marginVertical: 10,
        textAlign: "center",
    },
    text: {
        fontSize: 20,
        marginVertical: 5,
        textAlign: "left",
    },
    link: {
        fontSize: 20,
        marginVertical: 10,
        fontWeight: 'bold',
    }
});