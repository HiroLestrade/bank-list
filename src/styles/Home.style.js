import {StyleSheet} from 'react-native';
import {globalStyles} from '../styles/global';

const styles = (theme) => StyleSheet.create({
    container:{
        ...globalStyles.screenContainer, 
        paddingHorizontal: "20%", 
        backgroundColor: theme.base,
    },
});

export default styles;