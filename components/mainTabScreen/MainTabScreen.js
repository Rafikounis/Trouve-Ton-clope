import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/Ionicons';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';


import ProposerDesClopes from '../proposer/ProposerDesClopes';
import TrouverClopes from '../trouver/TrouverClopes';
import HomeScreen from '../home/HomeScreen';
import Compte from '../profil/Compte';




const HomeStack = createStackNavigator();
const TrouverClopesStack = createStackNavigator();
const ProposerDesClopesStack = createStackNavigator();
const CompteStack = createStackNavigator();

const Tab = createMaterialBottomTabNavigator();

const MainTabScreen = () => (
    <Tab.Navigator
      initialRouteName="Accueil"
      activeColor="#fff"
      shifting={true}
    >
      <Tab.Screen
        name="Accueil"
        component={HomeStackScreen}
        options={{
          tabBarLabel: 'Accueil',
          tabBarColor: '#009387',
          tabBarIcon: ({ color }) => (
            <Icon name="ios-home" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Trouve tes clopes"
        component={TrouverClopesStackScreen}
        options={{
          tabBarLabel: 'Trouver',
          tabBarColor: '#1f65ff',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="server-minus" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Proposer des clopes"
        component={ProposerDesClopesStackScreen}
        options={{
          tabBarLabel: 'Dépanner',
          tabBarColor: '#694fad',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="server-plus" color={color} size={26} />
          ),
        }}
      />
       {/* <Tab.Screen
        name="Profile"
        component={CompteStackScreen}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({ color }) => (
            <Icon name="ios-aperture" color={color} size={26} />
          ),
        }}
      /> */}
    </Tab.Navigator>

)

export default MainTabScreen;

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
     <HomeStack.Screen name="Accueil" component={HomeScreen} options={{
      title:"Accueil",
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
         backgroundColor: '#1f65ff'
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
              backgroundColor = "#1f65ff" onPress={()=>{navigation.openDrawer()}} 
              >
  
              </Icon.Button>
            )
  
     }} />
     
   </TrouverClopesStack.Navigator>
  )
  
  const ProposerDesClopesStackScreen = ({navigation}) =>(
    <ProposerDesClopesStack.Navigator screenOptions={{
      headerStyle:{
         backgroundColor: '#694fad'
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
              backgroundColor = "#694fad" onPress={()=>{navigation.openDrawer()}} 
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