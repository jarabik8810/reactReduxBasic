//import { createStore } from 'redux';
import { configureStore } from '@reduxjs/toolkit';

import counterSlice from '../store/counter';
import authSlice from '../store/auth';

//export const INCREMENT = 'increment';



const store = configureStore({
    reducer: {
        counter: counterSlice.reducer,
        auth: authSlice.reducer
    }
});




export default store;