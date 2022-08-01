import * as React from 'react';
import MapView, { Marker } from 'react-native-maps';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NativeScreenNavigationContainer } from 'react-native-screens';
import { createNativeStackNavigator } from '@react-navigation/native-stack';



export default function App() {
  return (
    <View style={styles.container}>
      <Text>This Is My App</Text>

    </View>

    
  );
}

function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text>This Is My App</Text>

    </View>
  );
}

function ProfileScreen() {
  return (
    <View style={styles.container}>
      <Text>This Is My App</Text>

    </View>
  );
}

function OrdersScreen() {
  return (
    <View style={styles.container}>
      <Text>This Is My App</Text>

    </View>
  );
}


const Stack = createNativeStackNavigator();

// function MyStack() {
//   return (
//     <Stack.Navigator>
//       <Stack.Screen name="Home" component={HomeScreen} />
//       <Stack.Screen name="Profile" component={ProfileScreen} />
//       <Stack.Screen name="Orders" component={OrdersScreen} />
//     </Stack.Navigator>
//   );
// }


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  map: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
});