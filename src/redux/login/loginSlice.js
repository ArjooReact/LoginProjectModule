import {createSlice} from '@reduxjs/toolkit';

let initialState = {
  userData: {
    userName: '',
    passWord: '',
  },
};
const loginSlice = createSlice({
  name: 'loginRedux',
  initialState,
  reducers: {
    updateUserName: (state, action) => {
        state.userData.userName=action.payload
            
       },
       updateUserPassword:(state,action)=>{
        state.userData.passWord=action.payload
       }
    
  },
});

export const {updateUserName,updateUserPassword} = loginSlice.actions;
export default loginSlice.reducer;
