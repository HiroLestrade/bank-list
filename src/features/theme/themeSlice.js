import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {DARK, LIGHT} from '../../constants/colors';

const themeSlice = createSlice({
    name: 'themes',
    initialState: {
        theme: LIGHT,
        lightTheme: true,
    },
    reducers: {
        setTheme: (state, action) => {
            return({
                ...state,
                lightTheme: action.payload,
                theme: action.payload ? LIGHT : DARK,
            });
        },
        toggleTheme: (state) => {
            const newTheme = !state.lightTheme;
            AsyncStorage.setItem('@theme', newTheme ? 'LIGHT' : 'DARK');
        
            return({
                ...state,
                lightTheme: newTheme,
                theme: newTheme ? LIGHT : DARK,
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
        await AsyncStorage.setItem('@theme', 'LIGHT');
        thunkAPI.dispatch(setTheme(true));     
     }
    else{
        thunkAPI.dispatch(setTheme(theme === 'LIGHT' ? true : false));
    }
});