import React, { useState } from 'react';
import { StyleSheet, Text, View, Dimensions, Button, Touchable, TouchableOpacity ,Image} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { TextInput } from 'react-native-gesture-handler';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { color } from 'react-native-reanimated';
//import {  } from "../../assets/app.png";

// Install: 
// npm install @react-navigation/native
// npm install @react-navigation/native-stack
// npm install react-native-screens react-native-safe-area-context

export default function SignInScreen({navigation}:any) {

  function signIn(){
    console.log("Email: "+email+"Password: "+password);
    
    
    const auth = getAuth();
   signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    console.log("User Logged In.."+user.uid);
    
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log("Error Occurred..."+errorCode+" "+errorMessage);
    
  });

  
    
  }


  function navigateToRegisterScreen(){
    console.log("Navigating...");
    
  }

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')


  return (
    <View style={styles.container}>
    <Image source = {require("../../assets/train.png")} style = {styles.img}></Image>
    <Text style = {styles.title}>Phatak Status</Text>
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
  },
   img: {
    height: 150,
    width: 150,
    padding: 6,
    margin: 6
   },

   title: {
    //fontFamily: 'serif',
    fontSize: 24,
    //fontWeight: 'bold',
    color: '#2E5984'
   }

});

