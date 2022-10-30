import { Image, Pressable, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native'
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';
import React from 'react'
import Ionicons from '@expo/vector-icons/Ionicons';
import {Dimensions} from 'react-native';

const Login = ({navigation}) => {
  const{width,height} = Dimensions.get('window');
  return (
    <SafeAreaProvider>
      <SafeAreaView>
        <View style={styles.container}>
          <ScrollView>
    <View style={{height:height*0.965}}>

         <View style={styles.upperPrt}>
          <Image style={{position:'absolute',bottom:40,left:50}} source={require('./assets/btm.png')}/>
          <Image style={{position:'absolute',top:40,left:50}} source={require('./assets/upper.png')}/>
          <Image style={{position:'absolute',bottom:'50%',right:50}} source={require('./assets/right.png')}/>
          <View style={{width:140,height:140,backgroundColor:'#A0BEF8',borderRadius:100,alignItems:'center',justifyContent:'center'}}> 
            <View style={{width:130,height:130,backgroundColor:'#1813F3',borderRadius:100,alignItems:'center',justifyContent:'center'}}>
              <View style={{width:100,height:100,borderRadius:1000,alignItems:'center',justifyContent:'center',backgroundColor:'white'}}>
                <Ionicons name='book' size={70} color='#000'/>
              </View>
            </View>
          </View>
          <Text style={{fontSize:24,fontWeight:'bold',color:'#000',marginTop:15}}>Login</Text>
         </View>
         <View style={styles.bottomPrt}>
          <TextInput placeholderTextColor={'white'} style={styles.input} placeholder='enter your Email'/>
          <TextInput placeholderTextColor={'white'} style={styles.input} placeholder='enter your password'/>
          <View style={{alignItems:'center',flexDirection:'row',marginBottom:30}}>
            <Text style={{color:'#c7c7c0',fontSize:14,marginRight:5}}>heaven't registered yet</Text>
            <Pressable onPress={()=>navigation.navigate('Signup')}>
              <Text style={{color:'#56CCF2'}}>register now</Text>
            </Pressable>
          </View>
          <View style={{alignItems:'center',flexDirection:'row',marginBottom:30}}>
          <Text  style={{color:'#c7c7c0',fontSize:14,marginRight:5}}>forgot password</Text>
            <Pressable onPress={()=>navigation.navigate('ForgotPassword')}>
              <Text style={{color:'#56CCF2'}}>click here</Text>
            </Pressable>
          </View>
          <Pressable onPress={()=>navigation.navigate('Profile')} style={styles.button}>
            <Text style={{color:'#fff',fontWeight:'bold'}}>Login</Text>
          </Pressable>
         </View>
                </View>
          </ScrollView>
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  )
}

export default Login

const styles = StyleSheet.create({
container:{
  width:'100%',
},
upperPrt:{
  alignItems:'center',
  justifyContent:'center',
  width:'100%',
  height:'35%'
},
bottomPrt:{
  height:'65%',
  width:'100%',
  borderTopRightRadius:175,
  backgroundColor:'#1813F3',
  paddingTop:50,
  overflow:'hidden',
  paddingLeft:20
},
input:{
  marginBottom:30,
  borderBottomWidth:3,
  borderColor:'#A0BEF8',
  width:'70%',
  fontSize:16,
  fontWeight:'bold',
  padding:5
  
},
button:{
  alignSelf:'center',
  alignItems:'center',
  justifyContent:'center',
  backgroundColor:'#A0BEF8',
  paddingHorizontal:60,
  paddingVertical:15,
  borderRadius:30,
  marginTop:20
}
})