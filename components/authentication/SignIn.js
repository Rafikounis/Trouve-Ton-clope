import * as React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, TextInput } from 'react-native';
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

  // const signUp =()=> {
  //   SignUpUser(state.email, state.password)
  //   .then(data => {
  //     alert(data);
  //   })
  //   .catch(error => {
  //     alert(error)
  //   })
  // };
  const signIn =() =>{
    SignInUser(state.email, state.password)
    .then(data => {
      alert(data);
    })
    .catch(error => {
      alert(error)
    })
  }
  const signOut =()=> {
    SignOutUser()
    .then(data => {
      alert(data);
    })
    .catch(error => {
      alert(error)
    })
  };
  const onAuthStateChanged = user =>{
    setUser(user)
  };
  React.useEffect(()=> {
    const subscriber = Auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber;
  }, []);


    return (
        <View style={styles.proposerForm}>
        {/* creer compte  */}
          <Text style={styles.header}>Se connecter</Text>
          <TextInput keyboardType="default" style={styles.nomInput} placeholder="Ton mail" value={state.email} onChangeText={text => setState({...state, email : text})}></TextInput>
          <TextInput keyboardType="numeric" secureTextEntry style={styles.telInput} placeholder="Ton mot de passe" value={state.password} onChangeText={text => setState({...state, password : text})}></TextInput>

          <TouchableOpacity style={styles.boutonValider}>
            <Text style={styles.textButtom} onPress={signIn}> Valider</Text>
          </TouchableOpacity>
          
          {/* Se connecter */}
          {/* <Text style={styles.header}>Creer un compte</Text>
          <TextInput keyboardType="default" style={styles.nomInput} placeholder="Ton mail" value={state.email} onChangeText={text => setState({...state, email : text})}></TextInput>
          <TextInput keyboardType="numeric" secureTextEntry style={styles.telInput} placeholder="Ton mot de passe" value={state.password} onChangeText={text => setState({...state, password : text})}></TextInput>

          <TouchableOpacity style={styles.boutonValider}>
            <Text style={styles.textButtom} onPress={signUp}> Valider</Text>
          </TouchableOpacity> */}
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
    }
  })

  export default Compte;
