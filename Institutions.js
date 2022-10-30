import { Image, ScrollView, StyleSheet, Text, TextInput, View,Pressable } from 'react-native'
import React from 'react'
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';
import Ionicons from '@expo/vector-icons/Ionicons';
import { FlatGrid } from 'react-native-super-grid';

const Institutions = ({navigation}) => {
    const institution = [
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
          {image: require('./assets/universities/Wits.jpg'),
            name: 'University of Witwatersrand',
            address:'1 Jan Smuts Ave, Braamfontein, Johannesburg, 2000',
            tel:'011 717 1000',
            website:'https://www.wits.ac.za/'
          },
          {image: require('./assets/universities/UMP.jpg'),
            name:'University of Mpumalanga',
            address:'Cnr R40 and D725 Roads, Mbombela, 1200',
            tel:'013 002 0001',
            website:'https://www.ump.ac.za/'
           },
          {image: require('./assets/universities/UL.jpg'),
            name: 'University of Limpopo',
            address:'Polokwane, 0727',
            tel:'012 521 4058',
            website:'https://www.ul.ac.za/'
          },
          {image:require('./assets/universities/UP.jpg'),
            name: 'University of Pretoria',
            address:'Lynnwood Rd, Hatfield, Pretoria, 0002',
            tel:'012 420 4111',
            website:'https://www.up.ac.za/'
          },
          {image: require('./assets/universities/NWU.jpg'),
            name: 'Univerrsity of North West',
            address:'North West University, Universiteit St, Potchefstroom, 2520',
            tel:'0860 169 698',
            website:'https://www.nwu.ac.za/'
          }
    ]

  return (
    <SafeAreaProvider>
    <SafeAreaView>
        <View style={styles.container}>
            <View style={styles.search}>
                <Ionicons name='search' size={18} color='#000'/>
                <TextInput placeholderTextColor={'#A0BEF8'} style={{fontSize:20,marginLeft:15}} placeholder='find institution'/>
            </View>
            <View style={styles.aps}>
                <Text style={{fontSize:20,fontWeight:'bold',color:'black'}}>APS Score</Text>
                <Text style={{fontSize:20,fontWeight:'bold',color:'orange'}}>32</Text>
            </View>
            <Text style={{fontSize:20,margin:15,color:'#A0BEF8'}} >SUggested Institutions</Text>
            <ScrollView>
                 <FlatGrid
                    itemDimension={80}
                    data={
                            institution
                        }
                    renderItem={({item}) =>{
                                    return(
                                     <Pressable onPress={()=>navigation.navigate('Varsity')}>
                                        <Image style={{width:105,height:130}} source={item.image}/>
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

export default Institutions

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
        flexDirection:'row'
    },
    aps:{
        alignItems:'center',
        justifyContent:'center',
        borderWidth:3,
        borderColor:'#000',
        width:130,
        height:100,
        marginTop:20,
        borderRadius:100
    }
})