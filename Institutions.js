import { Image, ScrollView, StyleSheet, Text, TextInput, View,Pressable } from 'react-native'
import React, { useEffect, useState } from 'react'
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';
import Ionicons from '@expo/vector-icons/Ionicons';
import { FlatGrid } from 'react-native-super-grid';
import universities from './api'
import { onAuthStateChanged } from 'firebase/auth';
import { auth, db } from './firebase';
import { collection, getDocs, query, where } from 'firebase/firestore';

const Institutions = ({navigation}) => {
  const [subjects,setSubjects] = useState('')
  const [aps,setAps] = useState(0)
  const subsRef = collection(db,'subjects')
  useEffect(()=>{
    const unsubscribe = onAuthStateChanged(auth,(user)=>{
      const q = query(subsRef,where('id','==',user.uid))
      const querySnapShot = getDocs(q).then(doc=>{
        doc.docs.map(doc=>{
          setSubjects(doc.data())
        })
      }).then(()=>calculteAps())
    })
    return unsubscribe
  },[])

  const calculteAps = ()=>{
    let aps=0
    subjects.metricSubs.forEach(s=>{
      if(s.name !== 'Life Orientation'){
        aps = aps +( Math.floor(s.percent/10))-1
      }
    })
    setAps(aps)
  }


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
                <Text style={{fontSize:20,fontWeight:'bold',color:'orange'}}>{aps}</Text>
            </View>
            <Text style={{fontSize:20,margin:15,color:'#A0BEF8'}} >Suggested Institutions</Text>
            <ScrollView>
                 <FlatGrid
                    itemDimension={120}
                    data={
                      universities
                        }
                    renderItem={({item}) =>{
                      return(
                        <Pressable onPress={()=>navigation.navigate('Varsity',{item})}>
                          <Image style={{width:165,height:130}} source={item.image}/>
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