import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './Login';
import Signup from './Signup'
import Welcome from './Welcome';
import Profile from './Profile'
import Institutions from './Institutions';
import Varsity from './Varsity';
import Faculties from './Faculties';
import CourseInfo from './CourseInfo';
import HIstory from './HIstory';
import ResumeGuideLines from './ResumeGuideLines';
import Prospectus from './Prospectus';
import ForgotPassword from './ForgotPassword'
import Subjects from './Subjects';
import { useEffect, useState } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './firebase';
import Spinner from 'react-native-loading-spinner-overlay/lib';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Courses from './Courses';
import CareerGuide from './CareerGuide';

const Tab = createMaterialBottomTabNavigator();


import Ionicons from '@expo/vector-icons/Ionicons';



const Tabs = ()=>{
  const Tab = createMaterialBottomTabNavigator();
  return(
    <Tab.Navigator
      labeled={false}
      activeColor="#1813F3"
     inactiveColor="#B9E0FF"
     barStyle={{
      backgroundColor:'#f4f4f4',
      borderTopWidth:1,
      borderColor:'#ccc',
     position:'absolute'
      
     }}
    >
     <Tab.Screen 
     options={{
      tabBarIcon:({color})=>{
        return <Ionicons name='book' color={color} size={25}/>
      }
     }}
     name='Institutions' component={Institutions}/>
     <Tab.Screen 
       options={{
        tabBarIcon:({color})=>{
          return <Ionicons name='videocam' color={color} size={25}/>
        }
       }}
     name='CareerGuide' component={CareerGuide}/>
     <Tab.Screen 
       options={{
        tabBarIcon:({color})=>{
          return <Ionicons name='bulb' color={color} size={25}/>
        }
       }}
     name='ResumeGuideLines' component={ResumeGuideLines}/>
     <Tab.Screen 
       options={{
        tabBarIcon:({color})=>{
          return <Ionicons name='time' color={color} size={25}/>
        }
       }}
     name='HIstory' component={HIstory}/>
     <Tab.Screen
     options={{
      tabBarIcon:({color})=>{
        return <Ionicons name='person' color={color} size={25}/>
      }
     }}
     name='Profile' component={Profile}/>
     
    </Tab.Navigator>
  );
}




const Splash = ({navigation})=>{
  const [spin,setSpin] = useState(true)
  useEffect(()=>{
    const subscribe = onAuthStateChanged(auth,(user)=>{
      if(user){
        setSpin(false)
        navigation.navigate('Tabs')
      }else if(user === null){
        setSpin(false)
        navigation.navigate('Login')
      }
    })
    return subscribe;
  },[])
  return <Spinner visible={spin} />
}



export default function App() {
  const Stack = createNativeStackNavigator();
  const [userId,setUserId] = useState('')

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName='Splash' screenOptions={{
          headerShown: false,
        }}
      >
        
        <Stack.Screen name="Splash" component={Splash} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Signup">
          {
            ({navigation})=>{
              return <Signup navigation={navigation} setUserId={setUserId}/>
            }
          }
        </Stack.Screen>
        <Stack.Screen name="Welcome" >
          {
            ({navigation})=>{
              return <Welcome userId={userId} navigation={navigation}/>
            }
          }
        </Stack.Screen>
        <Stack.Screen name="Tabs" component={Tabs} />
        <Stack.Screen name="Varsity" component={Varsity} />
        <Stack.Screen name="Faculties" component={Faculties} />
        <Stack.Screen name="CourseInfo" component={CourseInfo} />
        <Stack.Screen name="Prospectus" component={Prospectus} />
        <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
        <Stack.Screen name="Courses" component={Courses} />
        <Stack.Screen name="Subjects">
          {
            ({navigation})=>{
              return <Subjects userId={userId} navigation={navigation}/>
            }
          }
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}





