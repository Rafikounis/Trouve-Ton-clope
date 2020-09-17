// In App.js in a new project

import * as React from 'react';
import { View, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

import ProposerDesClopes from './components/proposer/ProposerDesClopes';
import TrouverClopes from './components/trouver/TrouverClopes';
import HomeScreen from './components/home/HomeScreen';




const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
         headerStyle:{
            backgroundColor: '#009387'
          },
          headerTintColor: "#fff",
          headerTintStyle: {
            fontWeight: "bold"
          }
      }}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Trouve tes clopes" component={TrouverClopes} />
        <Stack.Screen name="Depanner" component={ProposerDesClopes} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;