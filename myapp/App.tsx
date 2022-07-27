import { StatusBar } from "expo-status-bar";
import { Component, useEffect, useState } from "react";
import { Button, FlatList, StyleSheet, Text, View , Image} from 'react-native';









// Functional Component
export default function App() {

  const url = 'https://newsapi.org/v2/top-headlines?country=in&apiKey=e3b47176c4de496985d4f116bf34a16c'
  const [news, setNews] = useState([]);

  const getNewFromNewsAPI = async () =>{

    try {
      const responseFromAPI = await fetch(url);
      console.log("responseFromAPI:");
      console.log(responseFromAPI);

      // Convert the Raw Response into JSON
      const jsonData = await responseFromAPI.json();
      console.log("jsonData");
      console.log(jsonData);


      const articles = jsonData['articles'];
      console.log("articles");
      console.log(articles);


      setNews(articles);
      
      
      
      
      
      
    } catch (error) {
      console.error("Something Went Wrong: "+error);
      
      
    }
  }

  useEffect(() => {
    getNewFromNewsAPI(), []
  })

  // List Item Layout
const Item = (itemData:any) => (
  <View style={styles.item}>
    
    
         <Image  
          source = {{uri: itemData.urlToImage}}></Image>
     <Text style={styles.title} >{itemData.title}</Text>


  </View>
);

// Specified to execute renderItem function and create Item Views
const renderItem = (item:any) => Item(item);

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Text>Welcome To News APP</Text>
      
      <FlatList data={news} renderItem={renderItem}/>
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