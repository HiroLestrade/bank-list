import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {Dark, Light} from '../../constants/colors';

const themeSlice = createSlice({
    name: 'themes',
    initialState: {
        theme: Light,
        lightTheme: true,
    },
    reducers: {
        setTheme: (state, action) => {
            return({
                ...state,
                lightTheme: action.payload,
                theme: action.payload ? Light : Dark,
            });
        },
        toggleTheme: (state) => {
            const newTheme = !state.lightTheme;
            AsyncStorage.setItem('@theme', newTheme ? 'light' : 'dark');
        
            return({
                ...state,
                lightTheme: newTheme,
                theme: newTheme ? Light : Dark,
            });
        }
    }
});

export default themeSlice.reducer;

export const {setTheme, toggleTheme} = themeSlice.actions;

export const getTheme = (state) => state.theme.theme;

export const getLightTheme = (state) => state.theme.lightTheme;

export const setInitialTheme = createAsyncThunk('themes/setInitialTheme', async (data, thunkAPI) => {
    const theme = await AsyncStorage.getItem('@theme');
    if(theme === null){        
        await AsyncStorage.setItem('@theme', 'light');
        thunkAPI.dispatch(setTheme(true));     
     }
    else{
        thunkAPI.dispatch(setTheme(theme === 'light' ? true : false));
    }
});