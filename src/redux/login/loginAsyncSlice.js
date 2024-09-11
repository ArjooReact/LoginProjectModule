import {createAsyncThunk,createSlice} from '@reduxjs/toolkit'
import { apiPost } from '../../network/NetworkConfig'
import { registerUser } from './action/loginAction'


//https://dev.to/ravics09/redux-toolkit-react-counter-app-nmm
 const initialState={
    isLoading:false,
    data:[],
    isError:false
}
export const loginAsyncSlice = createSlice({
    name:'authSlice',
    initialState,
    reducers:{
      
    },
    // extraReducers:{
    // [registerUser.fulfilled]:(state,payload)=>{
    //     console.warn('arzooo',payload)
    //     state.data = payload
    // },
    // [registerUser.pending]:(state,payload)=>{
    //    state.isLoading= true
    // },[registerUser.rejected]:(action,payload)=>{
    //     state.isLoading= false,
    //     state.isError = true
    // }
    
    // },
    extraReducers: (builder) => {
        builder
        .addCase(registerUser.fulfilled, (state, action) => {
            // Add user to the state array
            console.warn('arzooo123',action.payload)
            //console.log('girrafe:',state)
            state.data = action.payload
           // state.entities.push(action.payload)
          })
          builder.addCase(registerUser.pending, (state, action) => {
            //state.value = action.payload
          });
          builder.addCase(registerUser.rejected, (state, action) => {
            //change error to true for app slice something like (state.app.error = true)
            //change error_msg to action.payload for app slice 
            //something like (state.app.error_msg = action.payload)
          });
      },
})

export default loginAsyncSlice.reducer;