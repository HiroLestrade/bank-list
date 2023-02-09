import {TouchableOpacity, Text} from 'react-native';
import {getTheme} from '../features/theme/themeSlice';
import {useSelector} from 'react-redux';
import styles from '../styles/BLButton.style';

const BLButton = ({name, onPress}) => {    
    const theme = useSelector(getTheme);

    return(
        <TouchableOpacity style={styles(theme).button} onPress={onPress}>
          <Text style={styles(theme).buttonText}>
            {name}
          </Text>
        </TouchableOpacity>
    );
}

export default BLButton;