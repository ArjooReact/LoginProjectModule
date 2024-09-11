import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
export async function getHeaders() {
  let userData = await AsyncStorage.getItem('userData');
  if (userData) {
    userData = JSON.parse(userData);
    //console.log(userData.accessToken, 'header')
    return {
      authorization: `${userData.access_token}`,
     // Content-Type: 'application/json',
      Accept: 'application/json',
    };
  }
  return {
    'authorization': '',
      'Content-Type': 'application/json',
  };
}

export async function apiReq(
  endPoint,
  data,
  method,
  headers,
  requestOptions = {},
) {
  return new Promise(async (res, rej) => {
    const getTokenHeader = await getHeaders();
    headers = {
      ...getTokenHeader,
      ...headers,
    };

    if (method === 'get' || method === 'delete') {
      data = {
        ...requestOptions,
        ...data,
        headers,
      };
    }
    console.log('HEADER',headers)
   console.log('REQUEST_OPTION:::::',requestOptions)
   console.log('DATA:::::::',data)
   console.log('ENDPOINT:::::::',endPoint)

    axios[method](endPoint, data, {headers})
      .then(result => {
        const {data} = result;
        console.log('POST_DATAAA:::::',result.status)
        if (data.status === false) {
          return rej(data);
        }

        return res(data);
      })
      .catch(error => {
        console.log(error);
        console.log(error && error.response, 'the error respne');
        if (error && error.response && error.response.status === 401) {
          clearUserData();
          // NavigationService.resetNavigation();
          //NavigationService.navigate('loginUsingEmailScreen');
          dispatch({
            type: types.CLEAR_REDUX_STATE,
            payload: {},
          });
          dispatch({
            type: types.NO_INTERNET,
            payload: {internetConnection: true},
          });
        }
        if (error && error.response && error.response.data) {
          if (!error.response.data.message) {
            return rej({
              ...error.response.data,
              msg: error.response.data.message || 'Network Error',
            });
          }
          return rej(error.response.data);
        } else {
          return rej({message: 'Network Error', msg: 'Network Error'});
        }
        return rej(error);
      });
  });
}

export function apiPost(endPoint, data, headers = {}) {
  return apiReq(endPoint, data, 'post', headers);
}

export function apiDelete(endPoint, data, headers = {}) {
  return apiReq(endPoint, data, 'delete', headers);
}

export function apiGet(endPoint, data, headers = {}, requestOptions) {
  return apiReq(endPoint, data, 'get', headers, requestOptions);
}

export function apiPut(endPoint, data, headers = {}) {
  return apiReq(endPoint, data, 'put', headers);
}
