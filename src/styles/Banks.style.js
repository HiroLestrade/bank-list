import {StyleSheet} from 'react-native';
import {globalStyles} from './global';

const styles = (theme) => {return StyleSheet.create({
    container:{
        width: '100%',
        height: '100%',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: theme.base,
    },
    card: {
        width: "80%",
        height: 500,
        borderRadius: 50,
        padding: 20,
        backgroundColor: theme.primary,
        shadowColor: "#000",
        shadowOffset: { 
            width: 3, 
            height: 1, 
        },
        shadowOpacity: 1.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    image:{
        width: '100%', 
        height: 200, 
        resizeMode: 'contain', 
        borderRadius: 50,
        shadowColor: "#000",
        shadowOffset: { 
          width: 3, 
          height: 1, 
        },
        shadowOpacity: 1.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    age:{
        ...globalStyles.text, 
        color: theme.emph, 
        marginTop: 20, 
        backgroundColor: theme.mid, 
        borderRadius: 10, 
        padding: 10, 
        width: "35%", 
        color: 
        theme.text,
        fontWeight: 'bold',
        shadowColor: "#000",
      shadowOffset: { 
        width: 3, 
        height: 1, 
      },
      shadowOpacity: 1.25,
      shadowRadius: 3.84,
      elevation: 5,
    },
    bankName:{
        ...globalStyles.title, 
        color: theme.emph, 
        fontSize: 40, 
        textAlign: 'left',
    },
    description:{
        ...globalStyles.text, 
        color: theme.text,
        fontWeight: 'bold',
    }
})};

export default styles;