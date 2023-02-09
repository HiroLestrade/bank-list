import {createStackNavigator} from '@react-navigation/stack';
import HomeHeader from '../components/HomeHeader';
import BankScreen from '../screens/BankScreen';
import BLTab from './BLTab';
import {getTheme} from '../features/theme/themeSlice';
import {useSelector} from 'react-redux';

const Stack = createStackNavigator();

const BLStack = () => {
    const theme = useSelector(getTheme);

    const homeHeaderConfig = {
        headerTitleAlign: 'start',
        presentation: 'modal',
        header: ({route}) => <HomeHeader title={route.name}/>,
    };
    
    const banksHeaderConfig = {
        headerTitleAlign: 'center',
        headerStyle: {
            backgroundColor: theme.base,
        },
        headerTintColor: theme.emph,
    };

    return(
        <Stack.Navigator >
            <Stack.Screen name="HomeScreen" component={BLTab} options={homeHeaderConfig} />
            <Stack.Screen name="Bank" component={BankScreen} options={banksHeaderConfig}/>
        </Stack.Navigator>
    );
}

export default BLStack;