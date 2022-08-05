import React from 'react';
import { StyleSheet, Text, View, Dimensions, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './src/functional-comps/home'
import ProfileScreen from './src/functional-comps/profile'
import OrdersScreen from './src/functional-comps/orders'
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { color } from 'react-native-reanimated';
import ClassComponent from './src/tutorials/ClassComponentQuotes';
import NewsApp from './src/tutorials/NewsAPI';
import LinkedIn from './src/tutorials/LinkedInJobsUi';
import SignInScreen from './src/screens/SignInScreen';
import { initializeApp } from "firebase/app";
import { firebaseConfig } from './src/helper/Constants';
import RegisterScreen from './src/screens/RegisterScreen';
import ViewBoxesWithColorAndText from './src/tutorials/UIPractice';

// Install: 
// npm install @react-navigation/native
// npm install @react-navigation/native-stack
// npm install react-native-screens react-native-safe-area-context


// Create the Object of Stack
const Stack = createNativeStackNavigator();

const Drawer = createDrawerNavigator();

const Tab = createMaterialTopTabNavigator();

// return (
//   <NavigationContainer>
//     <Stack.Navigator initialRouteName='Home'>
//       <Stack.Screen name='Home' component={HomeScreen}/>
//       <Stack.Screen name='Profile' component={ProfileScreen}/>
//       <Stack.Screen name='Orders' component={OrdersScreen}/>
//     </Stack.Navigator>
//   </NavigationContainer>
// );
// }*/

// export default function App() {

//   return (
//     <NavigationContainer>
//       <Drawer.Navigator screenOptions={{
//         drawerStyle: {
//           backgroundColor: '#c6cbef',
//           width: 240,

//     },
//   }}
//   initialRouteName = 'Home'
// >

//         <Drawer.Screen name='Home' component={HomeScreen} />
//         <Drawer.Screen name='Profile' component={ProfileScreen}/>
//         <Drawer.Screen name='Orders' component={OrdersScreen}/>
//       </Drawer.Navigator>
//     </NavigationContainer>
//   );
// }



// export default function App() {

//   // Initialize Firebase
// const app = initializeApp(firebaseConfig);

//   return (
//     <NavigationContainer>
//       <Tab.Navigator screenOptions={{
//         tabBarStyle : {
          
//         }


//   }}
//   initialRouteName = 'Home'
// >



//         <Tab.Screen name='Sign In' component={SignInScreen} />
//         <Tab.Screen name='Register' component={RegisterScreen} />
//         <Tab.Screen name='Profile' component={ProfileScreen}/>
//         <Tab.Screen name='Orders' component={OrdersScreen}/>
//         <Tab.Screen name='Class Component' component={ClassComponent}/>
//         <Tab.Screen name='LinkedIn' component={LinkedIn}/> */}
//         {/* {/* <Tab.Screen name='News' component={NewsApp}/> */}
//       </Tab.Navigator>
//     </NavigationContainer>
//   );
// }


export default function App() {

  initializeApp(firebaseConfig);

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='SignInScreen' >
        <Stack.Screen name='SignInScreen' component={SignInScreen}/>
        <Stack.Screen name='RegisterScreen' component={RegisterScreen}/>
        <Stack.Screen name='UI Attempt' component={ViewBoxesWithColorAndText}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

