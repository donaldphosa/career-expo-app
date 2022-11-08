import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';
import Ionicons from '@expo/vector-icons/Ionicons';
import {Dimensions} from 'react-native';

const ResumeGuideLines = () => {
    const{width,height} = Dimensions.get('window');

  return (
    <SafeAreaProvider>
        <SafeAreaView>
        <View style={styles.container}>
            <View style={styles.search}>
                <Ionicons name='time' size={18} color='#A0BEF8'/>
                <Text>Resume Guidelines</Text>
            </View>
            <ScrollView>
                <View style={[styles.guides,{marginBottom:190}]}>
                    

                   <Text style={styles.ResumeGuideLines}>1. Use the right order</Text>
                       <Text style={styles.ResumeGuideLines}>2. There are three main type of resumes</Text>
                           <Text style={[styles.ResumeGuideLines,{marginLeft:20}]}> i. Chronologiical: Focuses on professional experience,
                                                        listed in reverse chronological order. 
                                    Most resumes use this format.</Text>
                       <Text style={[styles.ResumeGuideLines,{marginLeft:20}]}>ii. Functional: Emphasizes a large skills section over work 
                            history.</Text> 
                        <Text style={[styles.ResumeGuideLines,{marginLeft:20}]}>iii. Combination: Gives equal space to your skills and work 
                                    experience sections.</Text>
                       <Text style={styles.ResumeGuideLines}>3. Don’t make it too long:  Submit a one-page resume 
                                                whenever possible so the hiring 
                                                manager can quickly skim your 
                                                qualifications and determine 
                                                you’re hireable.</Text> 
                      <Text style={styles.ResumeGuideLines}>4. Pick readable font: The best fonts for a resume are easy 
                                        to read Here are a few fonts that 
                                        follow resume formatting guidelines
                                        and clearly present your 
                                        qualifications to hiring managers:</Text>
                                       <Text style={[styles.ResumeGuideLines,{marginLeft:20}]}>i. Cambria</Text> 
                                        <Text style={[styles.ResumeGuideLines,{marginLeft:20}]}>ii. Calibri</Text>
                                        <Text style={[styles.ResumeGuideLines,{marginLeft:20}]}>III. Times New Roman</Text>
                       <Text style={styles.ResumeGuideLines}> 5. Feature your name in a header:</Text>
                    <Text style={styles.ResumeGuideLines}> Write your name in extra-
                        large, bold text, and then
                        list your contact
                        information in the same
                        font size you use for the
                        rest of your resume.</Text>

                   
                </View>
            </ScrollView>
            <View style={styles.bottom}>
                <Text style={styles.head}>Free online resume tamplate</Text>
                <Pressable>
                    <Text style={styles.links}>1.	https://www.jobseeker.com/en/resume</Text>
                    <Text style={styles.links}> 2.	https://www.resumenerd.com/ </Text>
                    <Text style={styles.links}> 3.	CV templates & examples to professionally format your CV (cvmaker.com)</Text>
                    <Text style={styles.links}> 4.	Job winning Resume Templates 2022 (Free) · Resume.io</Text>
                </Pressable>
            </View>
        </View>
        </SafeAreaView>
    </SafeAreaProvider>
  )
}

export default ResumeGuideLines

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
    bottom:{
        position:'absolute',
        bottom:0,
        width:'100%',
        backgroundColor:'#184FDA',
        padding:10,
        
    },
    links:{
        color:'#fff',
        marginBottom:5,
        fontSize:14,
        fontWeight:'600'
    },
    head:{
        color:'#fff',
        marginBottom:10,
        fontSize:20,
        fontWeight:'600'
    },
    guides:{
        padding:10,
        paddingTop:20
    },
    ResumeGuideLines:{
        marginBottom:10,
        fontSize:20
    }
})