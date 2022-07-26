import { StatusBar } from "expo-status-bar";
import { Component, useState } from "react";
import { Button, FlatList, StyleSheet, Text, View } from 'react-native';



const LinkedInJobs = [
  {
    name: "Training Program",
    company: "Coincent.ai",
    location: "Mumbai",
    type: "Remote",
    logo: "https://coincent.ai/images/Coincent_PNG.png"
  },

  {
    name: "Web Development Intern",
    company: "Corizo",
    location: "Delhi",
    type: "On Site",
    logo: "https://corizo.in/wp-content/uploads/2021/12/cropped-Corizo-2-1-316x190.png"
  },

  {
    name: "Data Science Intern",
    company: "Sabudh Foundation",
    location: "Ludhiana",
    type: "On Site",
    logo: "https://sabudh.org/wp-content/themes/hello-theme-child-master/images/logo.png"
  },
  {
    name: "Graphic Design Intern",
    company: "Alchemial",
    location: "Bangalore",
    type: "Remote",
    logo: "https://alchemial.com/images-duplicate/logo-white.png"
  },
  {
    name: "Flutter Developer",
    company: "Accenture",
    location: "Chandigarh",
    type: "On Site",
    logo: "https://www.accenture.com/t20180820T081710Z__w__/in-en/_acnmedia/Accenture/Dev/Redesign/Acc_Logo_Black_Purple_RGB.PNG"
  },

]


// List Item Layout
const Item = (itemData:any) => (
  <View style={styles.item}>
    
         <img   style={{
            height: 50,
            width: 120,
            flexDirection: "row"
          }}
          src= {itemData.logo}></img>
     <Text style={styles.title} >{itemData.name}</Text>
     <Text style={styles.subTitle} >{itemData.company}</Text>
     <Text style={styles.small} >{itemData.location}</Text>
     <Text style={styles.small} >{itemData.type}</Text>

  </View>
);

// Specified to execute renderItem function and create Item Views
const renderItem = ({item}:any) => Item(item);

// Functional Component
export default function App() {

  return (
    <View style={styles.background}>
      <StatusBar style="auto" />
      <FlatList data={LinkedInJobs} renderItem={renderItem}/>
    </View>
  );

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
   
    alignItems: 'center',
    justifyContent: 'center',
  },

  textStyle:{
    fontSize: 24,
    color: "#f00",
    marginBottom: 20
  },

  background:{
    
    fontSize: 24,
    marginBottom: 20,
    margin: 20,
    alignContent: "center"
  
  },

  item: {
    borderColor: 'grey',
    borderWidth: 5,
    backgroundColor: '#fff',
    padding: 8,
    margin: 6,
    width: 300,
    alignContent: "center",
    justifyContent: 'center'
    
  },

  title: {
    fontSize: 16,
    color: '#000000',
    flexDirection: "row"
  },

  subTitle: {
    fontSize: 12,
    color: 'grey'
  },

  small : {
    fontSize: 10,
    color: 'grey'
  }

});