// authActions.js
import axios from 'axios'
import { createAsyncThunk } from '@reduxjs/toolkit'
import { apiPost } from '../../../network/NetworkConfig'

const BASE_URL = 'https://dummyjson.com'
const LOGIN_API='/auth/login'

export const registerUser = createAsyncThunk(
    LOGIN_API,
  async (data, { rejectWithValue }) => {


    try {
        const res = await apiPost(BASE_URL+LOGIN_API,{
        username: 'kminchelle',
        password: '0lelplR',
        // expiresInMins: 60, // optional
      })
        console.log("resuu==>>>>>", res)
        // if(!res.data.emailVerified){
        //     alert("Please verify your email")
        // }
       // updateState({ isLoading: false })
       return res;
    } catch (error) {
        if (error.response && error.response.data.message) {
            return rejectWithValue(error.response.data.message)
          } else {
            return rejectWithValue(error.message)
          }
    }






    // try {
    //   const config = {
    //     headers: {
    //       'Content-Type': 'application/json',
    //     },
    //   }
    //   await axios.post(
    //     BASE_URL+LOGIN_API,
    //     data,
    //     config
    //   )
    // } catch (error) {
    // // return custom error message from backend if present
    //   if (error.response && error.response.data.message) {
    //     return rejectWithValue(error.response.data.message)
    //   } else {
    //     return rejectWithValue(error.message)
    //   }
    // }
  }
)