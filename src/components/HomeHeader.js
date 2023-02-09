import {Switch, View, Text} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {getTheme, toggleTheme, getLightTheme} from '../features/theme/themeSlice';
import styles from '../styles/HomeHeader.style';

const HomeHeader = () => {
    const theme = useSelector(getTheme);
    const lightTheme = useSelector(getLightTheme);
    const dispatch = useDispatch();

    return(
        <View style={styles(theme).headerContainer}>
            <Text style={styles(theme).text}>Bank List</Text>
            <Switch 
                style={styles(theme).switch}
                onValueChange={() => {dispatch(toggleTheme())}}
                value={lightTheme}
            />
        </View>
    );
};

export default HomeHeader;