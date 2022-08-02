// import React from 'react';
// import { StyleSheet, Text, View, Dimensions, Button } from 'react-native';
// import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import HomeScreen from './src/functional-comps/home'
// import ProfileScreen from './src/functional-comps/profile'
// import OrdersScreen from './src/functional-comps/orders'
// import { createDrawerNavigator } from '@react-navigation/drawer';
// import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
// import { color } from 'react-native-reanimated';
// import ClassComponent from './src/tutorials/ClassComponentQuotes';
// import NewsApp from './src/tutorials/NewsAPI';
// import LinkedIn from './src/tutorials/LinkedInJobsUi';


// // Install: 
// // npm install @react-navigation/native
// // npm install @react-navigation/native-stack
// // npm install react-native-screens react-native-safe-area-context


// // Create the Object of Stack
// const Stack = createNativeStackNavigator();

// // const Drawer = createDrawerNavigator();

// // export default function App() {

// //   return (
// //     <NavigationContainer>
// //       <Drawer.Navigator screenOptions={{
// //         drawerStyle: {
// //           backgroundColor: '#c6cbef',
// //           width: 240,

// //     },
// //   }}
// //   initialRouteName = 'Home'
// // >

// //         <Drawer.Screen name='Home' component={HomeScreen} />
// //         <Drawer.Screen name='Profile' component={ProfileScreen}/>
// //         <Drawer.Screen name='Orders' component={OrdersScreen}/>
// //       </Drawer.Navigator>
// //     </NavigationContainer>
// //   );
// // }

// const Tab = createMaterialTopTabNavigator();

// export default function App() {

//   return (
//     <NavigationContainer>
//       <Tab.Navigator screenOptions={{
//         tabBarStyle : {
          
//         }


//   }}
//   initialRouteName = 'Home'
// >

//         <Tab.Screen name='Home' component={HomeScreen} />
//         <Tab.Screen name='Profile' component={ProfileScreen}/>
//         <Tab.Screen name='Orders' component={OrdersScreen}/>
//         <Tab.Screen name='Class Component' component={ClassComponent}/>
//         <Tab.Screen name='LinkedIn' component={LinkedIn}/>
//         {/* <Tab.Screen name='News' component={NewsApp}/> */}
//       </Tab.Navigator>
//     </NavigationContainer>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });

import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

//export default function LinkedIn() {

  const ViewBoxesWithColorAndText = () => {
    return (
      <View
        style= {styles.container}
      >
        <View style = {styles.space}></View>
        <View style = {styles.list}>
        <View style = {styles.item}></View>
        {/* <Text style = {styles.textStyle}>hello</Text> */}
        </View>

      </View>
    );
      }
  
 export default ViewBoxesWithColorAndText;
  const styles = StyleSheet.create({

    space: {
      height: 100

    },

    container: {
      flex: 1,

      backgroundColor: 'black',

    },
  
    textStyle:{
      fontSize: 24,
      color: "white",
      marginBottom: 20,
      alignContent: "center",
      justifyContent: 'center'
    },
  
    list:{
      
      //fontSize: 24,
      //marginBottom: 20,
      //margin: 20,
      alignContent: "center",
      justifyContent: 'center',
      color: 'black'
    
    },
  
    item: {
      borderColor: '#37383a',
      borderWidth: 0.5,
      backgroundColor: '#37383a',
      padding: 20,
      margin: 6,
      width: 200,
      height: 120,
      alignContent: "center",
      justifyContent: 'center',
      borderRadius: 10,
      shadowColor: '#171717',
      shadowOffset: {width: -2, height: 4},
      shadowOpacity: 0.2,
      shadowRadius: 3,

    },
  
    title: {
      fontSize: 16,
      color: '#000000',
      flexDirection: "row",
      alignContent: "center",
      justifyContent: 'center'
    },
  
    subTitle: {
      fontSize: 12,
      color: 'grey',
      alignContent: "center",
      justifyContent: 'center'
    },
  
    small : {
      fontSize: 10,
      color: 'grey',
      alignContent: "center",
      justifyContent: 'center'
    }
  
  });
