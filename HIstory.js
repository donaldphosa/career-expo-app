import { Image, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';
import Ionicons from '@expo/vector-icons/Ionicons';
import { FlatGrid } from 'react-native-super-grid';
import {Dimensions} from 'react-native';
import universities from './api';


const HIstory = ({navigation}) => {
    
    const{width,height} = Dimensions.get('window');
  return (
    <SafeAreaProvider>
        <SafeAreaView>
            <View style={styles.container}>
                <View style={styles.search}>
                    <Ionicons name='time' size={18} color='#1813F3'/>
                    <Text style={{fontSize:20,fontWeight:'bold',color:'#1813F3',justifyContent:'center',marginLeft:10}}>History</Text>
                </View>
                <ScrollView>
                    <FlatGrid
                    itemDimension={130}
                    data={
                      universities
                    }
                    renderItem={({item}) =>{
                        return(
                            <Pressable style={{width:width*0.45,height:165,overflow:'hidden',borderRadius:5}} onPress={()=>navigation.navigate('Varsity')}>
                            <Image resizeMode='cover' style={{width:'100%',height:'100%'}} source={item.image}/>
                            </Pressable>
                        );
                    }}
                    />
                </ScrollView>
            </View>
        </SafeAreaView>
    </SafeAreaProvider>
  )
}

export default HIstory

const styles = StyleSheet.create({
    container:{
        width:'100%',
        height:'100%',
        alignItems:'center',
        paddingTop:20,
        
    },
    search:{
        width:'95%',
        alignItems:'center',
        borderWidth:2,
        borderRadius:15,
        padding:10,
        borderColor:'#1813F3',
        flexDirection:'row',
        marginBottom:20
    },
})