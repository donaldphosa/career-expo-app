import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';
import Ionicons from '@expo/vector-icons/Ionicons';

const CourseInfo = () => {
  return (
    <SafeAreaProvider>
        <SafeAreaView>
            <View style={styles.container}>
                <View style={styles.search}>
                    <Text style={{alignSelf:'center',fontSize:20,fontWeight:'bold',color:'#A0BEF8'}}>Course Info</Text>
                </View>
                <View style={{backgroundColor:'#A0BEF8',padding:20,alignItems:'center',marginVertical:35,borderRadius:10}}>
                    <Text style={{fontSize:18,marginBottom:15}}>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                         when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                          It has survived not only five centuries, but also the leap into electronic typesetting, 
                          remaining essentially unchanged. 

                         </Text>
                         <Text style={{fontSize:18,marginBottom:15}}>
                          It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
                           and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                    </Text>
                   
                </View>
                <Pressable style={styles.button}>
                    <Text style={{fontSize:16,fontWeight:'bold'}}>Apply</Text>
                </Pressable>
            </View>
        </SafeAreaView>
    </SafeAreaProvider>
  )
}

export default CourseInfo

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
        borderColor:'#A0BEF8'
    },
    button:{
        alignSelf:'flex-start',
        paddingVertical:10,
        backgroundColor:'#A0BEF8',
        borderRadius:20,
        paddingHorizontal:25
    }
})