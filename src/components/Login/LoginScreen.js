import {React, useEffect, useState} from 'react';
import {UseDispatch, useDispatch, useSelector} from 'react-redux';
import {updateUserName, updateUserPassword} from '../../redux/login/loginSlice';
import {showMessage} from 'react-native-flash-message';
import {showError, showSuccess} from '../../utils/helperFunction';
import validator from '../../utils/validations';
import { registerUser } from '../../redux/login/action/loginAction';
import { loginAsyncSlice } from '../../redux/login/loginAsyncSlice';
import axios from 'axios';
import {
  saveDataInLocalStorage,
  getDataFromLocalStorage,
  clearAsyncStorage,
  clearUserSpecificData
  
} from '../../utils/localStorage';
import {
  StyleSheet,
  SafeAreaView,
  Text,
  Dimensions,
  View,
  TextInput,
  TouchableOpacity,
  Alert,
  Button,
} from 'react-native';
import {apiGet,apiPost} from '../../network/NetworkConfig'
const SCREEN_WIDTH = Dimensions.get('window').width;

const LoginScreen = () => {
  //dispatch(registerUser())
  let ACCESS_TOKEN = '';
  let dispatch = useDispatch();
  let userData = useSelector(state => {
    return state.loginRedux.userData;
  });
  let asyncData = useSelector(state=>{
    return state.authSlice
  })
   let[data,setData]=useState()
  let userName = userData.userName;
  let passWord = userData.passWord;
  
  
  const isValidData = () => {
    console.log('clicked:::')
    const error = validator({
      userName,
      passWord,
    });
   console.log('ERROR:::',error)
    if (error) {
      showError(error);
      return false;
    } else {
      showSuccess('Success123');
      return true;
    }
  };

  const onLoginPress =async () => {
    console.log('clicked')
    dispatch(registerUser())
    console.log('DATATA123456788llll::::::::::',asyncData)
    //  axios['get']('https://dummyjson.com/products?limit=2').then((result)=>{
    //    console.log('ARZOOO',result.data.images)
    //    setData(JSON.stringify(result.data[1].discountPercentage))
    // })
   
//// For Get Method Call
      // try {
      //           const res = await apiGet('https://dummyjson.com/products?limit=2')
      //           console.log("res==>>>>>", res)
      //           // if(!res.data.emailVerified){
      //           //     alert("Please verify your email")
      //           // }
      //          // updateState({ isLoading: false })
      //       } catch (error) {
      //           console.log("error raised"+error)
      //          // showError(error.message)
      //          // updateState({ isLoading: false })
      //       }

            //// For POST Method Call
    //   try {
    //     const res = await apiPost('https://dummyjson.com/auth/login',{
    //     username: 'kminchelle',
    //     password: '0lelplR',
    //     // expiresInMins: 60, // optional
    //   })
    //     console.log("res==>>>>>", res)
    //     // if(!res.data.emailVerified){
    //     //     alert("Please verify your email")
    //     // }
    //    // updateState({ isLoading: false })
    // } catch (error) {
    //     console.log("error raised"+error)
    //    // showError(error.message)
    //    // updateState({ isLoading: false })
    // }



    ////This is for validation check
    // console.log('VALID_DATA:::',isValidData())
    // if (isValidData()) {
    //   console.log('clicked inside valid data:::')
    // }else{
    //   console.log('outSide valid data')
    // }
  };

  return (
    <SafeAreaView style={styles.mainContainer}>
    <Button
    title='getdata'
    onPress={()=>{
      console.log('DATATA123456788::::::::::',asyncData)
    }}
    ></Button>
      <Text>{JSON.stringify(userData)}</Text>
      <Text>{data}</Text>
      <View style={styles.centerView}>
        <TextInput
          value={userData}
          placeholder="Enter UserName"
          placeholderTextColor="#ffffff"
          onChangeText={text => {
            dispatch(updateUserName(text));
            // setUseData(prevState => {
            //   return {
            //     ...prevState,
            //     userName: text,
            //   };
            // });
          }}
          style={styles.txtInputStyle}></TextInput>
        <TextInput
          value={userData}
          placeholder="Enter Password"
          placeholderTextColor="#ffffff"
          onChangeText={text => {
            dispatch(updateUserPassword(text));
            // setUseData(prevState => {
            //   return {
            //     ...prevState,
            //     passWord: text,
            //   };
            // });
          }}
          style={styles.txtInputStyle}></TextInput>
        <TouchableOpacity onPress={onLoginPress} style={styles.btnStyle}>
          <Text>LOGIN</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  centerView: {
    width: SCREEN_WIDTH - 10,
    height: 400,
    backgroundColor: 'gray',
    margin: 4,
    borderRadius: 8,
  },
  txtInputStyle: {
    width: SCREEN_WIDTH - 20,
    height: 46,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: 'blue',
    marginTop: 30,
    marginLeft: 6,
    paddingLeft: 8,
  },
  btnStyle: {
    width: SCREEN_WIDTH - 20,
    height: 46,
    borderRadius: 4,
    backgroundColor: 'blue',
    marginTop: 30,
    marginLeft: 6,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export default LoginScreen;
