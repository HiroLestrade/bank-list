import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../screens/Home';
import Info from '../screens/Info';
import {Octicons} from '@expo/vector-icons';
import {useSelector} from 'react-redux';
import {getTheme} from '../features/theme/themeSlice';

const Tab = createBottomTabNavigator();

export default function BLTab(){
    const theme = useSelector(getTheme);

    const tabOptions = {
        headerShown: false,
        tabBarStyle: {
            height: 85,
        },
    };
    
    const tabIconOptions = (icon) => ({
        tabBarIcon: ({color}) => <Octicons name={icon} size={30} color={color} />,
        tabBarActiveTintColor: theme.emph,
        tabBarInactiveTintColor: theme.base,
        tabBarStyle: {
            backgroundColor: theme.primary,
            height: "10%",
            paddingBottom: "2%",
            paddingTop: 8,
        }
    });

    return(
        <Tab.Navigator
            screenOptions={tabOptions}
        >
            <Tab.Screen 
                name='Home'
                component={Home}
                options={tabIconOptions("home")}
            />
            <Tab.Screen 
                name='Info'
                component={Info}
                options={tabIconOptions("info")}
            />
        </Tab.Navigator>
    );
};
