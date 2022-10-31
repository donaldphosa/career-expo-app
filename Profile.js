import { Image, Pressable, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';
import { onAuthStateChanged } from 'firebase/auth';
import { auth, db } from './firebase';
import { collection, getDocs, query, where } from 'firebase/firestore';

const Profile = ({navigation}) => {
    const [user,setUser] = useState({})
    
    const subsRef = collection(db,'userDetails')
    useEffect(()=>{
      const unsubscribe = onAuthStateChanged(auth,(user)=>{
        const q = query(subsRef,where('id','==',user.uid))
        const querySnapShot = getDocs(q).then(doc=>{
          doc.docs.map(doc=>{
            setUser(doc.data())
          })
        })
      })
      return unsubscribe
    },[])

  return (
    <SafeAreaProvider>
        <SafeAreaView>
            <View style={styles.container}>
                <Text style={{fontSize:24,fontWeight:'bold',marginVertical:20}}>Welcome</Text>
                <Image style={styles.profileImg} source={require('./assets/profile.jpg')}/>
                <View style={styles.content}>
                    <Text style={{marginBottom:15,color:'#fff',fontSize:24,fontWeight:'bold'}}>Name: {user.fullNames}</Text>
                    <Text style={{marginBottom:15,color:'#fff',fontSize:24,fontWeight:'bold'}}>Surname: {user.lastname}</Text>
                    <Text style={{marginBottom:15,color:'#fff',fontSize:24,fontWeight:'bold'}}>ID number: {user.idNumber}</Text>
                    
                    
                    <View style={styles.buttonContainer}>
                        <Pressable onPress={()=>navigation.navigate('Institutions')} style={styles.buttons}>
                            <Text style={{color:'#fff',fontWeight:'bold'}}>Aps</Text>
                        </Pressable>
                        <Pressable onPress={()=>navigation.navigate('ResumeGuideLines')} style={styles.buttons}>
                            <Text style={{color:'#fff',fontWeight:'bold'}}>Resume Guide</Text>
                        </Pressable>
                        <Pressable onPress={()=>navigation.navigate('HIstory')} style={styles.buttons}>
                            <Text style={{color:'#fff',fontWeight:'bold'}}>History</Text>
                        </Pressable>
                    </View>
                </View>
            </View>
        </SafeAreaView>
    </SafeAreaProvider>
  )
}

export default Profile

const styles = StyleSheet.create({
    container:{
        width:'100%',
        height:'100%',
        alignItems:'center'
    },
    profileImg:{
        width:150,
        height:150,
        borderRadius:100
    },
    content:{
        width:'100%',
        height:'60%',
        position:'absolute',
        bottom:0,
        borderTopRightRadius:155,
        backgroundColor:'#1813F3',
        paddingTop:50,
        paddingLeft:10
    },
    buttonContainer:{
        position:'absolute',
        bottom:20,
        flexDirection:'row',
        justifyContent:'space-around',
        alignItems:'center',
        width:'100%'
    },
    buttons:{
        backgroundColor:'#A0BEF8',
        paddingHorizontal:20,
        borderRadius:20,
        paddingVertical:5
    }
})