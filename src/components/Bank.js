import {View, Text, Image} from 'react-native';
import {useSelector} from 'react-redux';
import {getTheme} from '../features/theme/themeSlice';
import styles from '../styles/Banks.style';

const Bank = ({bankName, url, age, description}) => {
    const theme = useSelector(getTheme);

    return(
        <View style={styles(theme).container}>
            <View style={styles(theme).card} >
                <Image source={{uri: url}} style={styles(theme).image} />
                <Text style={styles(theme).age}>Age: {age}</Text>
                <Text style={styles(theme).bankName}>{bankName}</Text>
                <Text style={styles(theme).description}>{description}</Text>
            </View>
        </View>
    );
};

export default Bank;