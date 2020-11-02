import * as React from 'react';
import { View, Text, Left, TouchableOpacity, StyleSheet, TextInput } from 'react-native';
// import { Button } from 'react-native-paper';
// import { Icon } from 'react-native-vector-icons/Icon';
import {Auth} from '../../Setup';
import {SignUpUser} from '../profil/ApiService';

const CreerUnCompte = () => {

    const [state, setState] = React.useState({
        email : "",
        password :"",
      });

      const signUp =()=> {
        SignUpUser(state.email, state.password)
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

      return(
        <View>
            <Text style={styles.header}>Creer un compte</Text>
            <TextInput keyboardType="default" style={styles.nomInput} placeholder="Ton mail" value={state.email} onChangeText={text => setState({...state, email : text})}></TextInput>
            <TextInput keyboardType="default" secureTextEntry style={styles.telInput} placeholder="Ton mot de passe" value={state.password} onChangeText={text => setState({...state, password : text})}></TextInput>

            <TouchableOpacity style={styles.boutonValider}>
                <Text style={styles.textButtom} onPress={signUp}> Valider</Text>
            </TouchableOpacity>
        </View>
      )
}

const styles = StyleSheet.create({
    header:{
        fontSize: 20,
        color: "#fff",
        paddingBottom: 10,
        marginBottom: 40,
        borderBottomColor: '#199787',
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
          }

})


export default CreerUnCompte;