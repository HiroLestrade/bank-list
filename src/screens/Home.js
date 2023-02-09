import {useSelector} from 'react-redux';
import {View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {getBanks} from '../features/banks/banksSlice';
import BankButton from '../components/BankButton';
import {getTheme} from '../features/theme/themeSlice';
import styles from '../styles/Home.style';


const Home = () => {
    const theme = useSelector(getTheme);
    const banks = useSelector(getBanks);
    const navigation = useNavigation();

    return (
        <View style={styles(theme).container}>
            {banks.map((bank) => (
                <BankButton 
                    key={Math.random()} 
                    name={bank.bankName} 
                    onPress={() => navigation.navigate("Bank", bank)}
                />    
            ))}
        </View>
    );
}

export default Home;
