import {StyleSheet} from 'react-native';

const styles = (theme) => StyleSheet.create({
    button: {
      width: "100%",
      height: 55,
      padding: 10,
      margin: 10,
      borderRadius: 10,
      borderWidth: 0,
      alignItems: "center",
      justifyContent: "center",
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
    
    buttonText: {
      fontSize: 16,
      fontWeight: "bold",
      color: theme.emph,
    },
  });

  export default styles;
