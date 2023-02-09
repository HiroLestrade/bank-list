import {createStackNavigator} from '@react-navigation/stack';
import {useSelector} from 'react-redux';
import HomeHeader from '../components/HomeHeader';
import BankScreen from '../screens/BankScreen';
import TabNavigator from './TabNavigator';
import {getTheme} from '../features/theme/themeSlice';

const Stack = createStackNavigator();

const StackNavigator = () => {
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
            <Stack.Screen name="HomeScreen" component={TabNavigator} options={homeHeaderConfig} />
            <Stack.Screen name="Bank" component={BankScreen} options={banksHeaderConfig}/>
        </Stack.Navigator>
    );
}

export default StackNavigator;