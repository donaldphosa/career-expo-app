import { Alert, Image, Pressable, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native'
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';
import React, { useState } from 'react'
import Ionicons from '@expo/vector-icons/Ionicons';
import {Dimensions} from 'react-native';
import { collection, addDoc } from 'firebase/firestore'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { auth, db } from './firebase';
import Spinner from 'react-native-loading-spinner-overlay/lib';

const Signup = ({navigation,setUserId}) => {
    const{width,height} = Dimensions.get('window');
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const [mobile,setMobile] = useState('')
    const [username,setUsername] = useState('')
    const [confrimPassword,setConfrimPassword] = useState('')
    const userRef = collection(db,'users')
    const [spin,setSpin] = useState(false)
    const createUser = async()=>{
     try{
      if(password && confrimPassword === password && email && mobile){
        setSpin(true)
        await createUserWithEmailAndPassword(auth,email,password).then((user)=>{
           addDoc(userRef,{
            name:username,
            email:email,
            id:user.user.uid
          })
          setUserId(user.user.uid)
        }).then(()=>{
          setSpin(false)
          navigation.navigate('Welcome')
        })
      }else{
        setSpin(false)
        Alert.alert('make sure password match and all field are filled')
      }
     }catch(error){
      setSpin(false)
      Alert.alert(error.message)
     }
    }

  return (
    <SafeAreaProvider>
      <SafeAreaView>
        <Spinner visible={spin}/>
            <ScrollView>
        <View style={[styles.container,{height:height*0.965}]}>
         <View style={[styles.upperPrt,{height:height*0.35}]}>
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
          <Text style={{fontSize:24,fontWeight:'bold',color:'#000',marginTop:15}}>Sign up</Text>
         </View>
         <View style={[styles.bottomPrt,{height:height*0.65}]}>
          <TextInput onChangeText={text=>setEmail(text)} placeholderTextColor={'white'} style={styles.input} placeholder='enter your Email'/>
          <TextInput keyboardType='numeric' onChangeText={text=>setMobile(text)} placeholderTextColor={'white'} style={styles.input} placeholder='enter your mobile number'/>
          <TextInput onChangeText={text=>setPassword(text)} placeholderTextColor={'white'} style={styles.input} placeholder='enter your password'/>
          <TextInput onChangeText={text=>setConfrimPassword(text)} placeholderTextColor={'white'} style={styles.input} placeholder='enter your confirm password'/>
          <View style={{alignItems:'center',flexDirection:'row',marginBottom:30}}>
            <Text style={{color:'#c7c7c0',fontSize:14,marginRight:5}}>Already have an account?</Text>
            <Pressable onPress={()=>navigation.navigate('Login')}>
              <Text style={{color:'#56CCF2'}}>login</Text>
            </Pressable>
          </View>
        
          <Pressable onPress={createUser} style={styles.button}>
            <Text style={{color:'#fff',fontWeight:'bold'}}>Sign up</Text>
          </Pressable>
         </View>
        </View>
        </ScrollView>
      </SafeAreaView>
    </SafeAreaProvider>
  )
}

export default Signup

const styles = StyleSheet.create({
container:{
  width:'100%',
  
},
upperPrt:{
  alignItems:'center',
  justifyContent:'center',
  width:'100%',
},
bottomPrt:{

  width:'100%',
  borderTopRightRadius:175,
  backgroundColor:'#1813F3',
  paddingTop:20,
  overflow:'hidden',
  paddingLeft:20
},
input:{
  marginBottom:15,
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
  marginTop:10
}
})