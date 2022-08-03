import React, { useState } from 'react';
import { StyleSheet, Text, View, Dimensions, Button, Touchable, TouchableOpacity ,Image} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { TextInput } from 'react-native-gesture-handler';

// Install: 
// npm install @react-navigation/native
// npm install @react-navigation/native-stack
// npm install react-native-screens react-native-safe-area-context

export default function SignInScreen({navigation}:any) {

  function signIn(){
    console.log("Sign In.....");
    
  }


  function navigateToRegisterScreen(){
    console.log("Navigating...");
    
  }

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')


  return (
    <View style={styles.container}>
    <Image source = {require('./assets/ghex-icon.png')} height = {10} width = {20}></Image>
      <TextInput style = {styles.input} placeholder ='Email Id'></TextInput>
      <TextInput style = {styles.input} placeholder = 'Password' secureTextEntry></TextInput>
      <Button title='Sign In' onPress={signIn}/>
      <Text>   </Text>

      <TouchableOpacity  onPress = {navigateToRegisterScreen}>
      <Text style = {styles.text}>New User? Register Here!</Text>

      </TouchableOpacity>

      


    </View>
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 12,
    margin: 12
  },

  input:{
    borderColor: 'grey',
    width: '100%',
    padding: 12,
    margin: 12,
    borderWidth: 1,
    borderRadius: 5


  },
  text: {
    color: 'blue'
  },
  center: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
});

