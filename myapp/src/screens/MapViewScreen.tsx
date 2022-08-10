
import MapView, { Marker } from 'react-native-maps';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import { collection, doc, DocumentData, getDocs, getFirestore, QueryDocumentSnapshot } from 'firebase/firestore';
import React, { useEffect, useState } from 'react';

export default function MapViewScreen() {



  const [documents1, setDocuments] = useState([])

  const getCrossings = async () => {
    try{
      console.log("Getting Crossings....");
      const documents: any = [];
     const db = getFirestore();
      
      const querySnapshot = await getDocs(collection(db, "crossings"));
      querySnapshot.forEach((doc) => {
        console.log(doc.id, " => ", doc.data());
        const docData = doc.data();
        documents.push(docData);

        setDocuments(documents)
      });

    }catch(error){
      console.log("Something Went Wrong..");
    }
  }

  useEffect(
    ()=>{
      getCrossings();
      

    },documents1);

    const list = documents1.map((element, index)=>{
        
    })

  console.log("Getting Crossings....");
  console.log(documents1);




  return (
    <View style={styles.container}>
      <MapView style={styles.map}
      initialRegion={
        {latitude: 30.9024075,
      longitude:75.8201689,
    latitudeDelta: 0,
  longitudeDelta: 0}
      } >
        
     
      <Marker coordinate={{latitude: documents1[0]["location"]["latitude"], longitude: documents1[0]["location"]["latitude"]}
     }
     title = {list}
     pinColor='pink'
     description='Software Company'>
      
     </Marker>
     </MapView>
    </View>
  );
}

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