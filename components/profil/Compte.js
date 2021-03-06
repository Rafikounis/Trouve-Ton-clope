import React, {useCallback} from 'react';
import { View,Linking, Text, TouchableOpacity, StyleSheet, TextInput, Button } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import {Auth} from '../../Setup';
import {SignUpUser, SignInUser, SignOutUser} from '../profil/ApiService';
import CreerUnCompte from "./CreerUnCompte";


const  Compte = ({navigation}) => {
  const [state, setState] = React.useState({
    email : "",
    password :"",
  });

  const [user, setUser] = React.useState();


  const onAuthStateChanged = user =>{
    setUser(user)
  };
  React.useEffect(()=> {
    const subscriber = Auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber;
  }, []);
  const supportedURL = "http://m.me/<PROFIL_NAME>?ref=<REF_PARAM>";
  
  const OpenURLButton = ({ url, children }) => {
    const handlePress = useCallback(async () => {
      // Checking if the link is supported for links with custom URL scheme.
      const supported = await Linking.canOpenURL(url);
  
      if (supported) {
        // Opening the link with some app, if the URL scheme is "http" the web link should be opened
        // by some browser in the mobile
        await Linking.openURL(url);
      } else {
        Alert.alert(`Don't know how to open this URL: ${url}`);
      }
    }, [url]);
  
    return <Button title={children} onPress={handlePress} />;
  };
  

    return (
        <View style={styles.proposerForm}>
        {/* creer compte  */}
          {/* <Text style={styles.header}>Deposer votre annonce </Text> */}
          <OpenURLButton url={supportedURL}>Connectez-vous par messenger</OpenURLButton>
            <View>
            
              <TextInput 
              keyboardType="default" 
              style={styles.nomInput} 
              placeholder="'Messenger'" 
              value={state.email} 
              onChangeText={text => setState({...state, email : text})}

            />

            </View>
          
          <TextInput 
            keyboardType="numeric" 
            secureTextEntry style={styles.telInput} 
            placeholder="Ton mot de passe" 
            value={state.password} 
            onChangeText={text => setState({...state, password : text})}

          />

          <TouchableOpacity style={styles.boutonValider}>
            <Text style={styles.textButtom} > Valider</Text>
          </TouchableOpacity>
          
          <TouchableOpacity style={styles.boutonValider}>
            <Text style={styles.textButtom} onPress={() => navigation.navigate("CreerUnCompte")}> Creer un compte</Text>
          </TouchableOpacity>
        </View>
     
    );
  }

  const styles = StyleSheet.create({
    proposerForm:{
      flex: 1,
      justifyContent: "center",
      backgroundColor: "#36485f", 
      paddingLeft: 60,
      paddingRight: 60,
      
    },
    header:{
      fontSize: 20,
      color: "#fff",
      paddingBottom: 10,
      marginBottom: 40,
      borderBottomColor: '#199787',
      borderBottomWidth: 1,

    },
    nomInput:{
      alignSelf: "stretch",
      height: 40,
      marginBottom: 30,
      color: "#fff",
      borderBottomColor: "#f8f8f8",
      borderBottomWidth: 1,
    },
    telInput:{
      alignSelf: "stretch",
      height: 40,
      marginBottom: 30,
      color: "#fff",
      borderBottomColor: "#f8f8f8",
      borderBottomWidth: 1,
    },
    boutonValider: {
      alignSelf: "stretch",
      alignItems: "center",
      padding: 20,
      backgroundColor: "#59cbbd",
      marginTop: 30,
      borderRadius: 10,
      },
    textButtom :{
      color: "#fff",
      fontWeight: "bold",
    },
    villeInput:{
      alignSelf: "stretch",
      height: 40,
      marginBottom: 30,
      color: "#fff",
      borderBottomColor: "#f8f8f8",
      borderBottomWidth: 1,
    },
  
  })

  export default Compte;
