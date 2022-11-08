import { Dimensions, ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';


const CareerGuide = () => {
    const [videos,setVideos] = useState([])
    const{width,height} = Dimensions.get('window');
  return (
    <SafeAreaProvider>
        <SafeAreaView>
        <ScrollView>
            <View style={{height:height*0.965,width:width*1}}>
                {
                    videos.map(()=>{
                        return <Video/>
                    })
                }
            </View>
        </ScrollView>
        </SafeAreaView>
    </SafeAreaProvider>
  )
}

export default CareerGuide

const Video = ()=>{
    return<View>
        
    </View>
}

const styles = StyleSheet.create({

})