import { Image, ScrollView, StyleSheet, Text, TextInput, View,Pressable } from 'react-native'
import React, { useEffect, useState } from 'react'
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';
import Ionicons from '@expo/vector-icons/Ionicons';
import { FlatGrid } from 'react-native-super-grid';
import universities from './api'
import { onAuthStateChanged } from 'firebase/auth';
import { auth, db } from './firebase';
import { collection, getDocs, query, where } from 'firebase/firestore';
import {Dimensions} from 'react-native';

const Institutions = ({navigation}) => {
  const{width} = Dimensions.get('window');
  const [subjects,setSubjects] = useState('')
  const [aps,setAps] = useState(0)
  const subsRef = collection(db,'subjects')
  const [searchWord,setSearch] = useState('')
  useEffect(()=>{
    const unsubscribe = onAuthStateChanged(auth,(user)=>{
      const q = query(subsRef,where('id','==',user.uid))
      const querySnapShot = getDocs(q).then(doc=>{
        doc.docs.map(doc=>{
          let aps = 0
           doc.data().metricSubs.forEach(s=>{
            if(s.name !== 'Life Orientation'){
              aps = aps +( Math.floor(s.percent/10))-1
            }
          })
          setAps(aps)
        })
      })
    })
    return unsubscribe
  },[])

const [AllPossibleUniversiry,setAllPossibleUniversiry] = useState(universities)
  const search = ()=>{
    setAllPossibleUniversiry(universities.filter(s=>{
        return s.name?.toLowerCase().indexOf(searchWord?.toLowerCase())!==-1
      }))
  }

  const suggestIntitution = async()=>{
    
  }

  return (
    <SafeAreaProvider>
    <SafeAreaView>
        <View style={styles.container}>
            <View style={styles.search}>
                <Ionicons name='search' size={18} color='#1813F3'/>
                <TextInput onChangeText={text=>setSearch(text)} onChange={search} placeholderTextColor={'#1813F3'} style={{fontSize:20,marginLeft:15}} placeholder='find institution'/>
            </View>
            <View style={styles.aps}>
                <Text style={{fontSize:20,fontWeight:'bold',color:'#1813F3'}}>APS Score</Text>
                <Text style={{fontSize:20,fontWeight:'bold',color:'orange'}}>{aps}</Text>
            </View>
            <Text style={{fontSize:20,margin:15,color:'#1813F3'}} >Suggested Institutions</Text>
            <ScrollView>
                 <FlatGrid
                    itemDimension={130}
                    data={
                      AllPossibleUniversiry
                        }
                    renderItem={({item}) =>{
                      return(
                        <Pressable style={{width:width*0.45,height:165,overflow:'hidden',borderRadius:5}} onPress={()=>navigation.navigate('Varsity',{item})}>
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
        borderColor:'#1813F3',
        flexDirection:'row'
    },
    aps:{
        alignItems:'center',
        justifyContent:'center',
        borderWidth:3,
        borderColor:'#1813F3',
        width:130,
        height:100,
        marginTop:20,
        borderRadius:100
    }
})