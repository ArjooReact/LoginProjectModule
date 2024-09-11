import {React, useEffect, useState} from 'react';
import {UseDispatch, useDispatch, useSelector} from 'react-redux';
import {updateUserName, updateUserPassword} from '../../redux/login/loginSlice';
import {showMessage} from 'react-native-flash-message';
import {showError, showSuccess} from '../../utils/helperFunction';
import validator from '../../utils/validations';
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
const SCREEN_WIDTH = Dimensions.get('window').width;

const LoginScreen = () => {
  let ACCESS_TOKEN = '';
  let dispatch = useDispatch();
  let userData = useSelector(state => {
    return state.loginRedux.userData;
  });

  let userName = userData.userName;
  let passWord = userData.passWord;
  // let [userData, setUseData] = useState({userName: '', passWord: ''});
  //saveDataInLocalStorage('UNAME1',{name:'Arjoo',email:'e@g.co'})
  //saveDataInLocalStorage('UNAME1', 'ARJOO');
  const clearSpecificData=()=>{
    clearUserSpecificData('UNAME1')
    console.log('clear')
  }
  const clearData = () => {
    clearAsyncStorage();
    console.log('DATA CLEARED');
  };
  const saveData = () => {
    saveDataInLocalStorage('UNAME5', 'ARJOO555');
    saveDataInLocalStorage('UNAME1', {name: 'Arjoo', email: 'e@g.co'});
  };
  let key = 'UNAME';

  const retriveData = async () => {
    let key = 'UNAME1';

    let localData = await getDataFromLocalStorage(key);
    try {
      if (localData) {
        localData = JSON.parse(localData);
        console.log('ffffff33::::', localData);
        ACCESS_TOKEN = localData.email;
        return localData;
      }
    } catch (error) {
      console.log(localData);
    }
    return localData;
  };

  const isValidData = () => {
    const error = validator({
      userName,
      passWord,
    });

    if (error) {
      showError(error);
      return false;
    } else {
      return true;
    }
  };

  const onLoginPress = () => {
    console.log('ACCESS_TOKEN' + JSON.stringify(ACCESS_TOKEN));
    if (isValidData) {
      showSuccess('Success123');
      // Start Calling LoginApi
    }
  };

  return (
    <SafeAreaView style={styles.mainContainer}>
      <Text>{JSON.stringify(userData)}</Text>
      <Text>{retriveData}</Text>
      <Button title="clearData" onPress={clearSpecificData}></Button>
      <Button title="retriveData" onPress={retriveData}></Button>
      <Button title="saveData" onPress={saveData}></Button>
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
