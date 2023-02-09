import {TouchableOpacity, View, Text, Linking} from 'react-native';
import {AntDesign} from '@expo/vector-icons';
import {getTheme} from '../features/theme/themeSlice';
import {useSelector} from 'react-redux';
import styles from '../styles/Info.style';
import {GITHUB_LINK} from '../constants/urls';

const Info = () => {
    const theme = useSelector(getTheme);

    const handlePress = async() => await Linking.openURL(GITHUB_LINK);

    return(
        <View style={styles(theme).container}>
            <AntDesign name="github" size={60} color={theme.emph} style={styles(theme).logo}/>
            <Text style={styles(theme).text}>
                Made by: Hiro Lestrade
            </Text>
            <TouchableOpacity onPress={handlePress}>
                <Text style={styles(theme).link}>
                    github.com/HiroLestrade/bank-list
                </Text>
            </TouchableOpacity>
        </View>
    );
}

export default Info;