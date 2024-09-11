import {React,useEffect,useState} from 'react'
import { SafeAreaView, StyleSheet,Text,Dimensions, View} from 'react-native'

const SCREEN_WIDTH=Dimensions.get('window').width
const SplashScreen=(props)=>{
    
    useEffect(()=>{
        setTimeout(()=>{
         props.navigation.navigate('LoginScreen')
        },[3000])
       },[])
    return(<SafeAreaView>
        <View style={styles.mainContainer}></View>
     </SafeAreaView>)
}
const styles=StyleSheet.create({
    mainContainer:{
       flex:1,
       justifyContent:'center',
       alignItems:'center'
    }
})

export default SplashScreen