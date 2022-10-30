import { Image, Pressable, StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';
import Ionicons from '@expo/vector-icons/Ionicons';



const Varsity = ({navigation}) => {
  return (
    <SafeAreaProvider>
        <SafeAreaView>
            <View style={styles.container}>
            <View style={styles.search}>
                <Ionicons name='search' size={18} color='#000'/>
                <TextInput placeholderTextColor={'#A0BEF8'} style={{fontSize:20,marginLeft:15}} placeholder='find institution'/>
            </View>
            <Image style={{width:120,height:120,borderRadius:100,margin:20}} source={require('./assets/universities/UJ.jpg')}/>
            <Pressable onPress={()=>navigation.navigate('Prospectus')} style={styles.button}>
                <Text style={{color:'#fff',fontWeight:'bold',fontSize:16}}>Download Prospectus</Text>
            </Pressable>
            <View style={styles.details}>
                <Text style={styles.text}>Contact Details</Text>
                <Text style={styles.text}>address</Text>
                <Text style={styles.text}>tellphone</Text>
                <Text style={styles.text}>websites</Text>
            </View>
            <Pressable onPress={()=>navigation.navigate('Faculties')} style={styles.button}>
                <Text style={{color:'#fff',fontWeight:'bold',fontSize:16}}>Go to faculty/college</Text>
            </Pressable>
            </View>
        </SafeAreaView>
    </SafeAreaProvider>
  )
}

export default Varsity

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
    button:{
        width:'100%',
        padding:5,
        backgroundColor:'#A0BEF8',
        alignItems:'center',
        marginVertical:10,
        borderRadius:5
    },
    details:{
        width:'100%',
        padding:15,
        backgroundColor:'#A0BEF8',
        marginVertical:10,
        borderRadius:5
    },
    text:{color:'#fff',fontWeight:'700',fontSize:14,marginBottom:15,width:'65%'}
})