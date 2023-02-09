import {StyleSheet} from 'react-native';
import {globalStyles} from '../styles/global';

const styles = (theme) => StyleSheet.create({
    container:{
        ...globalStyles.screenContainer, 
        backgroundColor: theme.base,
    },
    logo:{
        marginBottom: 10
    },
    text:{
        ...globalStyles.text, 
        color:theme.emph,
    },
    link:{
        ...globalStyles.link, 
        color:theme.secondary
    }
});

export default styles;