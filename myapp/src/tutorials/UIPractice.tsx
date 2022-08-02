import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

export default function LinkedIn() {

    return (
      <View style={styles.container}>
        <StatusBar style="auto" />
        <Text>      </Text>
        <Button title='SORT' ></Button>
      </View>
    );
  
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      color: 'black'
    },
  
    textStyle:{
      fontSize: 24,
      color: "#f00",
      marginBottom: 20,
      alignContent: "center",
      justifyContent: 'center'
    },
  
    background:{
      
      fontSize: 24,
      marginBottom: 20,
      margin: 20,
      alignContent: "center",
      justifyContent: 'center'
    
    },
  
    item: {
      borderColor: 'grey',
      borderWidth: 0.5,
      backgroundColor: '#fff',
      padding: 8,
      margin: 6,
      width: 300,
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