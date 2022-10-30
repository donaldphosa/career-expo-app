import { Image, Pressable, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';
import Ionicons from '@expo/vector-icons/Ionicons';

const Faculties = ({navigation}) => {
  return (
    <SafeAreaProvider>
        <SafeAreaView>
            <View style={styles.container}>
            <View style={styles.search}>
                <Ionicons name='search' size={18} color='#000'/>
                <TextInput placeholderTextColor={'#A0BEF8'} placeholder='faculty/college'/>
            </View>

                <ScrollView style={{width:'100%',marginTop:40}}>
                    <Faculty navigation={navigation}/>
                    <Faculty navigation={navigation}/>
                    <Faculty navigation={navigation}/>
                    <Faculty navigation={navigation}/>
                    <Faculty navigation={navigation}/>
                    <Faculty navigation={navigation}/>
                    
                </ScrollView>
            </View>
        </SafeAreaView>
    </SafeAreaProvider>
  )
}

export default Faculties

const Faculty = ({navigation})=>{
    return(
        <Pressable onPress={()=>navigation.navigate('CourseInfo')} style={styles.fuc}>
            <Image style={{width:50,height:50,borderRadius:100}} source={require('./assets/universities/UJ.jpg')}/>
            <Text style={{marginLeft:15,fontSize:16}}>College of Business and Economics</Text>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    container:{
        width:'100%',
        height:'100%',
        alignItems:'center',
        paddingTop:20,
        paddingHorizontal:10
    },
    search:{
        width:'100%',
        alignItems:'center',
        borderWidth:2,
        borderRadius:15,
        padding:10,
        borderColor:'#A0BEF8',
        flexDirection:'row'
    },
    fuc:{
        alignItems:'center',
        flexDirection:'row',
        backgroundColor:'#A0BEF8',
        padding:10,
        borderRadius:5,
        width:'100%',
        marginBottom:15
    }
})