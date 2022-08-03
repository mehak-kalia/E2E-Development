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