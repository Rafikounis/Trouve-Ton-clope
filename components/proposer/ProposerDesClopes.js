import * as React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';


const  ProposerDesClopes = () => {
  const [state, setState] = React.useState({
    nom : "",
    tel :"",
    ville :"",
  })
    return (
        <View style={styles.proposerForm}>
          <Text style={styles.header}>Dépanner une clope</Text>
          <TextInput style={styles.nomInput} placeholder="Ton nom" value={state.nom}></TextInput>
          <TextInput style={styles.telInput} placeholder="Ton tel" value={state.tel}></TextInput>
          <TextInput style={styles.villeInput} placeholder="La ville" value={state.ville}></TextInput>

          <TouchableOpacity style={styles.boutonValider}>
            <Text style={styles.textButtom}> Valider</Text>
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

  export default ProposerDesClopes;