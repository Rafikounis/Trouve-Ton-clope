import * as React from 'react';
import { View, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';


const HomeScreen = ({navigation}) => {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#C8EAC5' }}>
       
        <Button 
          title="Trouver tes clopes"
          onPress={() => navigation.navigate("Trouve tes clopes")}
        />
        <Button 
          title="Depanner"
          onPress={() => navigation.navigate("Depanner")}
        />
  
      </View>
    );
  }

  export default HomeScreen;