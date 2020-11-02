// In App.js in a new project

import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/Ionicons';
// import {Auth, firebase} from "../Setup";

import MainTabScreen from './mainTabScreen/MainTabScreen';
// import ProposerDesClopes from './components/proposer/ProposerDesClopes';
// import TrouverClopes from './components/trouver/TrouverClopes';
// import HomeScreen from './components/home/HomeScreen';
import Compte from './profil/Compte';
import CreerUnCompte from "./profil/CreerUnCompte";



// const HomeStack = createStackNavigator();
// const TrouverClopesStack = createStackNavigator();
// const ProposerDesClopesStack = createStackNavigator();
// const AuthStack = createStackNavigator();
const CreerUnCompteStack = createStackNavigator();
const CompteStack = createStackNavigator();
const Drawer = createDrawerNavigator();




function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Accueil" component={MainTabScreen} />
        <Drawer.Screen name="Profil" component={CompteStackScreen} />
        {/* <Drawer.Screen name="Creer un compte" component={CreerUnCompteStackScreen} /> */}
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

export default App;


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
   
   <CompteStack.Screen name="Profil" component={Compte} 
    options={{
      title:"Profil",
          headerLeft: () =>(
            <Icon.Button name= "ios-menu" size={25} 
            backgroundColor = "#009387" onPress={()=>{navigation.openDrawer()}} 
            >

            </Icon.Button>
          )

   }}

   />
   <CompteStack.Screen name="CreerUnCompte" component={CreerUnCompte} 
     options={{
       title:"creer un compte",
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


