import {React,useState,useEffect} from 'react'
import { StyleSheet,SafeAreaView,Text,View } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack'
import SplashScreen from '../components/Splash/SplashScreen'
import LoginScreen from '../components/Login/LoginScreen'

const Stack=createStackNavigator()
const StackNavigator = ()=>{
    return(
        <Stack.Navigator>
            <Stack.Screen component={SplashScreen} name='SplashScreen'></Stack.Screen>
            <Stack.Screen component={LoginScreen} name='LoginScreen'></Stack.Screen>
    
        </Stack.Navigator>
   )
}

export default StackNavigator