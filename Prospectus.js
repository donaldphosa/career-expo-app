import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';
import Ionicons from '@expo/vector-icons/Ionicons';

const Prospectus = () => {
    
  return (
    <SafeAreaProvider>
        <SafeAreaView>
        <View style={styles.container}>
        <View style={styles.search}> 
                <Text style={{fontSize:20,fontWeight:'bold',color:'#A0BEF8',alignSelf:'center'}}>faculty of ICT</Text>
            </View>
          <Image style={{width:'95%',alignSelf:'center',height:'80%',marginTop:25}} source={require('./assets/PROSPECTUS.png')}/>
        </View>
        </SafeAreaView>
    </SafeAreaProvider>
  )
}

export default Prospectus

const styles = StyleSheet.create({
    container:{
        width:'100%',
        height:'100%',
        alignItems:'center',
        paddingTop:20
    },
    search:{
        width:'95%',
        alignItems:'center',
        borderWidth:2,
        borderRadius:15,
        padding:10,
        borderColor:'#A0BEF8',
        flexDirection:'row',
        justifyContent:'center'
    },
})