import {StyleSheet} from "react-native";
import {Colors} from '../constants/colors';

const styles = (theme) => StyleSheet.create({
    headerContainer: {
        height: 100,
        width: '100%',
        paddingHorizontal: 30,
        paddingTop: 50,
        justifyContent: 'flex-end',
        alignItems: 'center',
        flexDirection: 'row',
        borderBottomWidth: 5,
        backgroundColor: theme.primary, 
        borderColor: theme.secondary,
    },
    text: {
        flex: 8,
        fontSize: 30,
        fontWeight: 'bold',
        color: Colors.title,
    },
    switch:{
        flex: 4,
    }
});

export default styles;