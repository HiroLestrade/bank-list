import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-async-storage/async-storage';

const bankSlice = createSlice({
    name: 'banks',
    initialState: [],
    reducers: {
        setBanks: (state, action) => {
            state.push(...action.payload);
        }
    }
});

export default bankSlice.reducer;

export const {setBanks} = bankSlice.actions;

export const getBanks = (state) => state.banks;

export const fetchBanks = createAsyncThunk('banks/fetchBanks', async (url, thunkAPI) => {
    const banks = await AsyncStorage.getItem('@banks');
    if(banks === null){        
        console.log('fetch');
        const res = await fetch(url);
        const resJSON = await res.json();
        await AsyncStorage.setItem('@banks', JSON.stringify(resJSON));
        thunkAPI.dispatch(setBanks(resJSON));     
     }
    else{
        console.log('local storage');
        thunkAPI.dispatch(setBanks(JSON.parse(banks)));
    }
});