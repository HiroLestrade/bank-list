import {NavigationContainer} from '@react-navigation/native';
import BLStack from './BLStack';

const RootNavigator = () => {
    return(
        <NavigationContainer >
            <BLStack  />
        </NavigationContainer>
    );
}

export default RootNavigator;