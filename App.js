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


export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName='Login' screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Signup" component={Signup} />
        <Stack.Screen name="Welcome" component={Welcome} />
        <Stack.Screen name="Profile" component={Profile} />
        <Stack.Screen name="Institutions" component={Institutions} />
        <Stack.Screen name="Varsity" component={Varsity} />
        <Stack.Screen name="Faculties" component={Faculties} />
        <Stack.Screen name="CourseInfo" component={CourseInfo} />
        <Stack.Screen name="HIstory" component={HIstory} />
        <Stack.Screen name="ResumeGuideLines" component={ResumeGuideLines} />
        <Stack.Screen name="Prospectus" component={Prospectus} />
        <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
        <Stack.Screen name="Subjects" component={Subjects} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

