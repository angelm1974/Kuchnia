import React from 'react';
import { View } from 'react-native';
import {Button, Layout, Text } from '@ui-kitten/components';
export function HomeScreen({ navigation }) {
  return (
    <Layout style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>

      <Text category="h4">Home Screen</Text>
      <Button 
        appearance='outline' 
        status='warning'
        onPress={() => navigation.navigate('Categories')}>
      Przejdź do ekranu szczegółów
    </Button>

    </Layout>
  );
}
