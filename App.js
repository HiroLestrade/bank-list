import { useEffect } from 'react';
import { Provider, useDispatch} from 'react-redux';
import store from './src/app/store';
import { fetchBanks} from './src/features/banks/banksSlice';
import RootNavigator from './src/navigation/RootNavigator';
import {setInitialTheme} from './src/features/theme/themeSlice';
import { API_BANK } from './src/constants/urls';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setInitialTheme());
    dispatch(fetchBanks(API_BANK));
  }, []);

  return (
    <RootNavigator />
  );
}

const Wrapper = () => {
  return(
    <Provider store={store}>
      <App />
    </Provider>
  );
}

export default Wrapper;
