import { Image, Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';

const Profile = ({navigation}) => {
  return (
    <SafeAreaProvider>
        <SafeAreaView>
            <View style={styles.container}>
                <Text style={{fontSize:24,fontWeight:'bold',marginVertical:20}}>Welcome</Text>
                <Image style={styles.profileImg} source={require('./assets/profile.jpg')}/>
                <View style={styles.content}>
                    <Text style={{marginBottom:15,color:'#fff',fontSize:24,fontWeight:'bold'}}>Name: Donald</Text>
                    <Text style={{marginBottom:15,color:'#fff',fontSize:24,fontWeight:'bold'}}>Surname: Phosa</Text>
                    <Text style={{marginBottom:15,color:'#fff',fontSize:24,fontWeight:'bold'}}>ID number: 980208111256633</Text>
                    <Text style={{marginBottom:15,color:'#fff',fontSize:24,fontWeight:'bold'}}>Email: donaldbossd@gmail.com</Text>
                    <Text style={{marginBottom:15,color:'#fff',fontSize:24,fontWeight:'bold'}}>Mobile: 0825364205</Text>
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