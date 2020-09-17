// In App.js in a new project

import * as React from 'react';
import { View, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/Ionicons';

import ProposerDesClopes from './components/proposer/ProposerDesClopes';
import TrouverClopes from './components/trouver/TrouverClopes';
import HomeScreen from './components/home/HomeScreen';
import Compte from './components/profil/Compte';




const HomeStack = createStackNavigator();
const TrouverClopesStack = createStackNavigator();
const ProposerDesClopesStack = createStackNavigator();
const CompteStack = createStackNavigator();
const Drawer = createDrawerNavigator();


const HomeStackScreen = ({navigation}) =>(
  <HomeStack.Navigator screenOptions={{
    headerStyle:{
       backgroundColor: '#009387'
     },
     headerTintColor: "#fff",
     headerTintStyle: {
       fontWeight: "bold"
     }
 }}>
   <HomeStack.Screen name="Home" component={HomeScreen} options={{
    title:"Overview",
    headerLeft: () =>(
      <Icon.Button name= "ios-menu" size={25} 
      backgroundColor = "#009387" onPress={()=>{navigation.openDrawer()}} 
      >

      </Icon.Button>
    )
    }}/>
  
 </HomeStack.Navigator>
)

const TrouverClopesStackScreen = ({navigation}) =>(
  <TrouverClopesStack.Navigator screenOptions={{
    headerStyle:{
       backgroundColor: '#009387'
     },
     headerTintColor: "#fff",
     headerTintStyle: {
       fontWeight: "bold"
     }
 }}>
   
   <TrouverClopesStack.Screen name="Trouve tes clopes" component={TrouverClopes} options={{
      title:"Trouve tes clopes",
          headerLeft: () =>(
            <Icon.Button name= "ios-menu" size={25} 
            backgroundColor = "#009387" onPress={()=>{navigation.openDrawer()}} 
            >

            </Icon.Button>
          )

   }} />
   
 </TrouverClopesStack.Navigator>
)

const ProposerDesClopesStackScreen = ({navigation}) =>(
  <ProposerDesClopesStack.Navigator screenOptions={{
    headerStyle:{
       backgroundColor: '#009387'
     },
     headerTintColor: "#fff",
     headerTintStyle: {
       fontWeight: "bold"
     }
 }}>
   
   <ProposerDesClopesStack.Screen name="Depanner" component={ProposerDesClopes} 
    options={{
      title:"Proposer des clopes",
          headerLeft: () =>(
            <Icon.Button name= "ios-menu" size={25} 
            backgroundColor = "#009387" onPress={()=>{navigation.openDrawer()}} 
            >

            </Icon.Button>
          )

   }}

   /> 
 </ProposerDesClopesStack.Navigator>
)

const CompteStackScreen = ({navigation}) =>(
  <CompteStack.Navigator screenOptions={{
    headerStyle:{
       backgroundColor: '#009387'
     },
     headerTintColor: "#fff",
     headerTintStyle: {
       fontWeight: "bold"
     }
 }}>
   
   <CompteStack.Screen name="Depanner" component={Compte} 
    options={{
      title:"Proposer des clopes",
          headerLeft: () =>(
            <Icon.Button name= "ios-menu" size={25} 
            backgroundColor = "#009387" onPress={()=>{navigation.openDrawer()}} 
            >

            </Icon.Button>
          )

   }}

   /> 
 </CompteStack.Navigator>
)


function App() {
  return (
    <NavigationContainer>
    <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={HomeStackScreen} />
        <Drawer.Screen name="Trouve tes clopes" component={TrouverClopesStackScreen} />
        <Drawer.Screen name="Depanner" component={ProposerDesClopesStackScreen} />
        <Drawer.Screen name="Profil" component={CompteStackScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

export default App;