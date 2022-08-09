import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Text } from'react-native';
import { Appbar } from 'react-native-paper';
import { collection, getDocs, getFirestore } from 'firebase/firestore';


export default function HomeScreen({navigation}: any) {
  console.log("Home Screen...");

  const getCrossings = async () => {
    try{
      console.log("Getting Crossings....");
      const documents = [];
      const db = getFirestore();
      
      const querySnapshot = await getDocs(collection(db, "crossings"));
      querySnapshot.forEach((doc) => {
        console.log(doc.id, " => ", doc.data());
        const docData = doc.data();
        documents.push(docData);
      });

    }catch(error){
      console.log("Something Went Wrong..");
    }
  }

  useEffect(
    ()=>{
      getCrossings();
    },[]);

  console.log("Getting Crossings....");
  return (

      <View style={styles.container}>
        <Text>Welcome to Home</Text>
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
     },
     button: {
      height: 35,
      width: 70,
      backgroundColor: '#F3CC09',
      justifyContent: 'center',
      alignContent: 'center',
      margin: 5,
      textAlign: 'center',
      borderRadius: 5
     }
  
  });
  