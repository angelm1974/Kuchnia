import React from 'react';
import { View } from 'react-native';
import {Button, Layout, Text } from '@ui-kitten/components';
import axios from 'axios';
export function HomeScreen({ navigation }) {
 
  // const getDataUsingSimpleGetCall = () => {
  //   // const [dane, setDane] = React.useState(null)
  //   axios.get('https://kuchnia-c703d-default-rtdb.europe-west1.firebasedatabase.app/Categories.json')
  //       .then(response =>
  //         {
  //          setDane(response.data);
  //         }
  //       );
  // }
  return (
    <Layout style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>

      <Text category="h4">Home Screen</Text>
      <Button 
        appearance='outline' 
        status='warning'
        onPress={() => navigation.navigate('Categories')}>
      Przejdź do ekranu szczegółów
    </Button>
    {/* <Button 
        appearance='outline' 
        status='warning'
        onPress={getDataUsingSimpleGetCall}>
      dane
    </Button> */}
    {/* <View>
      {dane.id}
    </View> */}

    </Layout>
  );
}
