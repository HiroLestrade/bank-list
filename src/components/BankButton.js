import {TouchableOpacity, Text} from 'react-native';
import {useSelector} from 'react-redux';
import {getTheme} from '../features/theme/themeSlice';
import styles from '../styles/BankButton.style';

const BankButton = ({name, onPress}) => {    
    const theme = useSelector(getTheme);

    return(
        <TouchableOpacity style={styles(theme).button} onPress={onPress}>
          <Text style={styles(theme).buttonText}>
            {name}
          </Text>
        </TouchableOpacity>
    );
}

export default BankButton;