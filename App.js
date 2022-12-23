import React from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HomeScreen } from './screens/HomeScreen';
import { MealsScreen } from './screens/MealsScreen';
import { CategoriesScreen } from './screens/CategoriesScreen';

import * as eva from '@eva-design/eva';
import { ApplicationProvider, Layout, Text } from '@ui-kitten/components';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <ApplicationProvider {...eva} theme={eva.light}>
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Ekran główny' }} />
        <Stack.Screen name="Meals" component={MealsScreen} options={{ title: 'Lista dań' }}/>
        <Stack.Screen name="Categories" component={CategoriesScreen} options={{ title: 'Kategorie' }}/>
      </Stack.Navigator>
    </NavigationContainer>
    </ApplicationProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
