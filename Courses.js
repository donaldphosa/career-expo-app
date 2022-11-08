import { Image, Pressable, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';
import Ionicons from '@expo/vector-icons/Ionicons';

const Courses = ({navigation,route}) => {
    const item = route.params
   
  return (
    <SafeAreaProvider>
    <SafeAreaView>
        <View style={styles.container}>
        <View style={styles.search}>
            <Ionicons name='search' size={18} color='#1813F3'/>
            <TextInput placeholderTextColor={'#1813F3'} placeholder='faculty/college'/>
        </View>

            <ScrollView style={{width:'100%',marginTop:40}}>
              {
                item.f.courses?.map((f,index)=>{
                    return <SingleCourse key={index} navigation={navigation} item={item} {...f}/>
                })
              }
                
            </ScrollView>
        </View>
    </SafeAreaView>
</SafeAreaProvider>
  )
}

const SingleCourse = ({navigation,name,item})=>{
    return(
        <Pressable onPress={()=>navigation.navigate('CourseInfo',{website:item.website})} style={styles.fuc}>
            <Image style={{width:50,height:50,borderRadius:100}} source={item.image}/>
            <Text style={{marginLeft:15,fontSize:16,color:'#fff'}}>{name}</Text>
        </Pressable>
    )
}

export default Courses

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
        borderColor:'#1813F3',
        flexDirection:'row'
    },
    fuc:{
        alignItems:'center',
        flexDirection:'row',
        backgroundColor:'#1813F3',
        padding:10,
        borderRadius:5,
        width:'100%',
        marginBottom:15
    }
})