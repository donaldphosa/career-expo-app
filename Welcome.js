import { Image, Pressable, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native'
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';
import React from 'react'
import {Dimensions} from 'react-native';

const Welcome = ({navigation}) => {
    const{width,height} = Dimensions.get('window');
  return (
    <SafeAreaProvider>
        <SafeAreaView>
        <ScrollView>
            <View style={{width:width*1,height:height*0.965}}>
                <Image style={{width:'100%',height:'35%'}} source={require('./assets/banner.png')}/>
                <View style={styles.content}>
                  <ScrollView>

                  <Text style={styles.header}>Personal Information</Text>  
                  <View style={styles.input}>
                    <Text style={styles.estaric}>*</Text>
                    <Text style={{fontSize:20,fontWeight:'bold',width:'30%'}}>full name(s)</Text>
                    <TextInput placeholderTextColor={'#000'} style={styles.field}/>
                  </View>
                  <View style={styles.input}>
                    <Text style={styles.estaric}>*</Text>
                    <Text style={{fontSize:20,fontWeight:'bold',width:'30%'}}>lastname</Text>
                    <TextInput placeholderTextColor={'#000'} style={styles.field}/>
                  </View>
                  <View style={styles.input}>
                    <Text style={styles.estaric}>*</Text>
                    <Text style={{fontSize:20,fontWeight:'bold',width:'30%'}}>Date of Birth</Text>
                    <TextInput placeholderTextColor={'#000'} style={styles.field}/>
                  </View>
                  <View style={styles.input}>
                    <Text style={styles.estaric}>*</Text>
                    <Text style={{fontSize:20,fontWeight:'bold',width:'30%'}}>ID number</Text>
                    <TextInput placeholderTextColor={'#000'} style={styles.field}/>
                  </View>
                  <View style={styles.input}>
                    <Text style={styles.estaric}>*</Text>
                    <Text style={{fontSize:20,fontWeight:'bold',width:'30%'}}>Gender</Text>
                    <TextInput placeholderTextColor={'#000'} style={styles.field}/>
                  </View>
                  <View style={styles.input}>
                    <Text style={styles.estaric}>*</Text>
                    <Text style={{fontSize:20,fontWeight:'bold',width:'30%'}}>Nationality</Text>
                    <TextInput placeholderTextColor={'#000'} style={styles.field}/>
                  </View>
                  <Text style={styles.header}>Educational Information</Text> 
                  <View style={styles.input}>
                    <Text style={styles.estaric}>*</Text>
                    <Text style={{fontSize:20,fontWeight:'bold',width:'30%'}}>Heighest Grade</Text>
                    <TextInput placeholderTextColor={'#000'} style={styles.field}/>
                  </View>
                  <View style={styles.input}>
                    <Text style={styles.estaric}>*</Text>
                    <Text style={{fontSize:20,fontWeight:'bold',width:'30%'}}>Year passed</Text>
                    <TextInput placeholderTextColor={'#000'} style={styles.field}/>
                  </View>
                  <View style={styles.input}>
                    <Text style={styles.estaric}>*</Text>
                    <Text style={{fontSize:20,fontWeight:'bold',width:'30%'}}>Heighest Qualification</Text>
                    <TextInput placeholderTextColor={'#000'} style={styles.field}/>
                  </View>
                  <View style={styles.input}>
                    <Text style={styles.estaric}>*</Text>
                    <Text style={{fontSize:20,fontWeight:'bold',width:'30%'}}>Qualification year passed</Text>
                    <TextInput placeholderTextColor={'#000'} style={styles.field}/>
                  </View>
                  <Pressable onPress={()=>navigation.navigate('Subjects')} style={styles.button}>
                    <Text style={{color:'white',fontWeight:'bold'}}>Next</Text>
                  </Pressable>
                  </ScrollView>
                </View>
            </View>
        </ScrollView>
        </SafeAreaView>
    </SafeAreaProvider>
  )
}

export default Welcome

const styles = StyleSheet.create({
    content:{
        height:'80%',
        width:'100%',
        borderTopRightRadius:25,
        borderTopLeftRadius:25,
        backgroundColor:'#fff',
        position:'absolute',
        bottom:0,
        paddingTop:20,
        paddingHorizontal:2
    },
    header:{
        width:'100%',
        backgroundColor:'#56CCF2',
        padding:8,
        fontSize:18,
        fontWeight:'bold',
        color:'#fff',
        marginTop:5
    },
    input:{
        flexDirection:'row',
        alignItems:'center',
        marginTop:6
    },
    estaric:{
        color:'red',
        fontSize:20,
        fontWeight:'bold',
        marginRight:2
    },
    field:{
        borderWidth:2,
        borderColor:'#56CCF2',
        width:'60%',
        marginLeft:20,
        height:25,
        color:'#000',
        padding:2
    },
    button:{
        alignSelf:'flex-end',
        paddingVertical:10,
        backgroundColor:'#56CCF2',
        borderRadius:20,
        paddingHorizontal:25,
        marginRight:10,
        marginTop:10
    }
})