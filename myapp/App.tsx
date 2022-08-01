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


// Install: 
// npm install @react-navigation/native
// npm install @react-navigation/native-stack
// npm install react-native-screens react-native-safe-area-context


// Create the Object of Stack
const Stack = createNativeStackNavigator();

// const Drawer = createDrawerNavigator();

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

const Tab = createMaterialTopTabNavigator();

export default function App() {

  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={{
        tabBarStyle : {
          
        }


  }}
  initialRouteName = 'Home'
>

        <Tab.Screen name='Home' component={HomeScreen} />
        <Tab.Screen name='Profile' component={ProfileScreen}/>
        <Tab.Screen name='Orders' component={OrdersScreen}/>
        <Tab.Screen name='Class Component' component={ClassComponent}/>
        <Tab.Screen name='LinkedIn' component={LinkedIn}/>
        {/* <Tab.Screen name='News' component={NewsApp}/> */}
      </Tab.Navigator>
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