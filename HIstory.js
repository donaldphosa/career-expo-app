import { Image, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';
import Ionicons from '@expo/vector-icons/Ionicons';
import { FlatGrid } from 'react-native-super-grid';


const HIstory = ({navigation}) => {
    const history= [
        {image:require('./assets/universities/Ukzn.jpg'),
        name: 'University of Kwa-Zulu-Natal',
        address: '238 Mazisi Kunene Rd, Glenwood, Durban, 4041',
        tel: '031 260 1111',
        website:'https://www.ukzn.ac.za/'
      },
      {image: require('./assets/universities/UJ.jpg'),
        name: 'University of Johannesburg',
        address: 'Physical Cnr Kingsway & University Roads, Auckland Park Johannesburg, 2092',
        tel: '011 559 4555',
        website:'https://www.uj.ac.za/'
      },
      {image:  require('./assets/universities/UFS.jpg'),
        name: 'University of Free State',
        address:'205 Nelson Mandela Dr, Park West, Bloemfontein, 9301',
        tel:'051 401 9111',
        website:'https://www.ufs.ac.za/'
      },
      {image: require('./assets/universities/Univen.jpg'),
        name: 'University of Venda',
        address:'University Rd, Thohoyandou, 0950',
        tel:'015 962 8000',
        website:'https://www.univen.ac.za/'
      },
    ]
  return (
    <SafeAreaProvider>
        <SafeAreaView>
            <View style={styles.container}>
                <View style={styles.search}>
                    <Ionicons name='time' size={18} color='#A0BEF8'/>
                    <Text style={{fontSize:20,fontWeight:'bold',color:'#A0BEF8',justifyContent:'center',marginLeft:10}}>History</Text>
                </View>
                <ScrollView>
                    <FlatGrid
                    itemDimension={120}
                    data={
                        history
                    }
                    renderItem={({item}) =>{
                        return(
                            <Pressable onPress={()=>navigation.navigate('Varsity')}>
                            <Image style={{width:165,height:165}} source={item.image}/>
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
        borderColor:'#A0BEF8',
        flexDirection:'row',
        marginBottom:20
    },
})