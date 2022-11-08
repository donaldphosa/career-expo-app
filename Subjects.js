import { Alert, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useState, useRef } from 'react'
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';
import SelectDropdown from 'react-native-select-dropdown'
import { AntDesign } from '@expo/vector-icons'
import { addDoc, collection } from 'firebase/firestore';
import { db } from './firebase';
import Spinner from 'react-native-loading-spinner-overlay/lib';



const Subjects = ({navigation,userId}) => {
    const subRef = useRef()
    const percentRef = useRef()
    const [metricSubs,setMetricSubs] = useState([])
    const [tempSub,setTempSub] = useState('')
    const [tempPercent,setTempPercent] = useState(0)
    const [spin,setSpin] = useState(false)
    const [subjects,setSubjects] = useState([
       ' Economics ',
        'Physical Sciences',
        'Life Sciences', 
        'Agricultural Sciences', 
        'Business Studies',
        'Accounting',
        'History', 
        'Geography', 
        'Religious Studie',
        'English Home Language',
        'English First Additional Language',
        'Afrikaans Huistaal',
        'Afrikaans Eerste Additionele Taal',
        'Sesotho Home Language',
        'Siswati Home Language',
        'Setswana Home Language',
        'isiZulu Home Language',
        'isiXhosa Home Language',
        'isiNdebele Home Language',
        'Sepedi Home Language',
        'Xitsonga Home Language',
        'Tshivenda Home Language',
        'Mathematics',
        'Mathematical Literacy',
        'Life Orientation'
    ])
    const percentages = [
        30,40,50,60,70,80,90,100
    ]
    const subjectsRef = collection(db,'subjects')

    const saveSubjects = async()=>{
        try{
            if(metricSubs&&metricSubs.length>=6&&metricSubs.length<=9){
                setSpin(true)
                addDoc(subjectsRef,{metricSubs,id:userId}).then(()=>{
                    setSpin(false)
                    navigation.navigate('Tabs')
                })
            }else{
                setSpin(false)
                Alert.alert('subjects should atleast be 6')
            }
        }catch(errer){
            setSpin(false)
            Alert.alert(errer.message)
        }
    }
  return (
    <SafeAreaProvider>
        <SafeAreaView>
            <Spinner visible={spin}/>
        <View style={styles.container}>
            <Text style={styles.header}>Add metric subjects</Text> 
            <View style={styles.dropdownCont}>
                <SelectDropdown
                    ref={subRef}
                    data={subjects}
                    onSelect={(selectedItem, index) => {
                        setTempSub(selectedItem)
                    }}
                    defaultButtonText='subjects'
                    buttonStyle={{
                        borderWidth:1,
                        borderColor:'#56CCF2',
                        height:30,
                        width:'30%',
                        margin:20
                    }}
                    renderDropdownIcon={()=>{
                        return <AntDesign name='down' color={'#000'} size={18}/>
                    }}
                    dropdownStyle={{
                        width:'80%'
                    }}
                />
                <SelectDropdown
                ref={percentRef}
                data={percentages}
                 onSelect={(selectedItem, index) => {
                    setTempPercent(selectedItem)
                }}
                defaultButtonText='percentage(%)'
                buttonStyle={{
                    borderWidth:1,
                    borderColor:'#56CCF2',
                    height:30,
                    width:'45%',
                    margin:20
                }}
                renderDropdownIcon={()=>{
                    return <AntDesign name='down' color={'#000'} size={18}/>
                }}
                />
            </View>
            <Pressable 
                style={styles.addBtn}
                onPress={()=>{
                    if(tempSub&&tempPercent!==0){
                    setMetricSubs(pre=>{
                        return [...pre,{
                            name:tempSub,
                            percent:tempPercent
                        }]
                    })
                    setSubjects(prev=>{
                        return prev.filter(s=>s!==tempSub)
                    })
                    setTempPercent(0)
                    setTempSub('')
                    subRef.current.reset()
                    percentRef.current.reset()
                }else{
                    Alert.alert('chose subject and marks!!')
                }
                }}
             >
                <Text style={{color:'#fff',fontWeight:'bold'}}>Add</Text>
            </Pressable>
            <View>
                <ScrollView>
                    {
                        metricSubs.map((sub,index)=>{
                            return<View key={index} style={styles.addedSub}>
                                <Text style={{width:150}}>{sub.name}</Text>
                                <Text>{sub.percent} %</Text>
                                <Pressable 
                                    onPress={()=>{
                                        setMetricSubs(prev=>{
                                            return prev.filter(s=>s.name !== sub.name)
                                        })
                                        setSubjects(prev=>[...prev,sub.name])
                                    }}
                                style={styles.btn}>
                                    <Text style={{color:'red',fontWeight:'bold'}}>X</Text>
                                </Pressable>
                            </View>
                        })
                    }
                </ScrollView>
            </View>
            <Pressable 
                onPress={saveSubjects}
                style={[styles.addBtn,{position:'absolute',bottom:20,right:20}]}>
                <Text style={{color:'#fff',fontWeight:'bold'}}>Submit</Text>
            </Pressable>
        </View>
        </SafeAreaView>
    </SafeAreaProvider>
  )
}

export default Subjects

const styles = StyleSheet.create({
    header:{
        width:'100%',
        backgroundColor:'#56CCF2',
        padding:8,
        fontSize:18,
        fontWeight:'bold',
        color:'#fff',
        marginTop:5
    },
    container:{
        width:'100%',
        height:'100%',
        paddingVertical:20,
        
    },
    dropdownCont:{
        marginTop:10,
        width:'100%',
        flexDirection:'row',

    },
    addBtn:{
        alignSelf:'flex-end',
        width:90,
        height:40,
        backgroundColor:'#56CCF2',
        alignItems:'center',
        justifyContent:'center',
        borderRadius:5,
        marginRight:20
    },
    addedSub:{
        flexDirection:'row',
        alignItems:'center',
        backgroundColor:'#ccc',
        padding:5,
        justifyContent:'space-between',
        margin:10
    },
    btn:{
        marginRight:20,
        backgroundColor:'black',
        paddingHorizontal:10
    }
})