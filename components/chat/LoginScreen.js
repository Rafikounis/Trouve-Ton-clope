import * as React from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image, Button } from 'react-native';
import {Ionicons} from "@expo/vector-icons"

export default class LoginScreen extends React.Component {
    state = {
        name: ""
    }
    continuer = () => {
        this.props.navigation.navigate("ChatScreen", {name: this.state.name})
    }
    render() {
        return (
    
            <View style={styles.container}>
                <View style={styles.circle}></View>
                <View style={{marginTop: 64}}>
                    <Image></Image>
                </View>
                <View style={{marginHorizontal:32}}>
                    <Text style={styles.header}> Username</Text>
                    <TextInput 
                        style={styles.input} 
                        placeholder="Message" 
                        onChangeText={name => {this.setState({name})}}
                        value={this.state.name}    
                        />
                    <View style={{alignItems: "flex-end", marginTop: 64}}>
                        <TouchableOpacity style={styles.continuer} onPress={this.continuer}> 
                            <Ionicons name="md-arrow-round-forward" size={24} color="#FFF" />
                        </TouchableOpacity>
                    </View>
                </View>
        
            </View>
            )
    }
    
    
}


const styles = StyleSheet.create({
    container : {
        flex: 1,
        backgroundColor : "#F4F5F7"
    },
    circle : {
        width: 500,
        height: 500,
        borderRadius: 500 / 2,
        backgroundColor: "#FFF",
        position: "absolute",
        left: -120,
        top: -20
    },
    header: {
        fontWeight: "800",
        fontSize: 30,
        color: "#514E5A",
        marginTop: 32
    },
    input: {
        marginTop: 32,
        height: 50,
        borderWidth: StyleSheet.hairlineWidth,
        borderColor: "#BAB7C3",
        borderRadius: 30,
        paddingHorizontal: 16,
        color: "#514E5A",
        fontWeight: "600"
    },
    continuer: {
        width: 70,
        height: 70,
        borderRadius: 70 / 2,
        backgroundColor: "#9075E3",
        alignItems: "center",
        justifyContent: "center"
    }
})
