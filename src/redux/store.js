import { configureStore}  from '@reduxjs/toolkit';
import todoslice from './slices/todolist';


const Store =  configureStore ({
    reducer:{
        mytodos: todoslice.reducer
    },
  
})

export default Store
