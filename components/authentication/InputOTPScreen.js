import React, {useState, useEffect, useRef} from 'react';
import { Button, View, Text, StyleSheet, KeyboardAvoidingView } from 'react-native';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';

export function InputOTPScreen ({ navigation }) {
    let textInput = useRef(null)
    let clockCall = null;
    const lengthInput = 6;
    const defaultCountDown = 9;
    const [internalVal, setInternalVal] = useState("");
    const [countdown, setCoundown] = useState(defaultCountDown);
    const [enableResend, setEnableResend] = useState(false);


    useEffect(() =>{
        clockCall = setInterval(() => {
            decrementClock();
        }, 1000);
        return () => {
            clearInterval(clockCall)
        }
    })

    const decrementClock = () =>{
        if (countdown === 0){
            setEnableResend(true)
            setCoundown(0)
            clearInterval(clockCall)
        } else {
            setCoundown(countdown -1)
        }
        
    }
///Aller à la page de formulaire aprés que le code soit fait
    const onChangeText = (val) => {
        setInternalVal(val)
        if(val.length=== lengthInput){
            navigation.navigate('Home')
        }
    };

    const onResendOTP =() =>{
        if(enableResend){
            setCoundown(defaultCountDown)
            setEnableResend(false)
            clearInterval(clockCall)
            clockCall = setInterval(()=> {
                decrementClock()
            }, 1000)
        }
    }
    const onChangeNumber = () => {
        setInternalVal("")
    }

    useEffect(() => {
        textInput.focus()
    },[]);

    return (
      <View style={styles.container}>
        <KeyboardAvoidingView
            keyboardVerticalOffset={50}
            behavior={'padding'}
            style={styles.containerAvoiddingView}
        >
            <Text style={styles.titleStyle}>{"Le code envoyé par SMS"}            </Text>
            <View>
                <TextInput
                    ref={(input) => textInput = input}
                    onChangeText={onChangeText}
                    style={{width: 0, height: 0}}
                    value={internalVal}
                    maxLength={lengthInput}
                    returnKeyType="done"
                    keyboardType="numeric"
                />
                <View style={styles.containerInput}>
                    {
                        Array(lengthInput).fill().map((data, index) => (
                            <View 
                                key={index}
                                style={[
                                    styles.cellView,
                                    {
                                        borderBottomColor: index === internalVal.length ? '#fb6C6A': '#234db7'
                                    }
                                ]}
                                >
                                <Text 
                                    style={styles.cellText}
                                    onPress={() => textInput.focus()}
                                >
                                {internalVal && internalVal.length > 0 ? internalVal[index] : ""}
                                </Text>
                            </View>
                        ))
                    }
                    
                </View>
            </View>
            <View style={styles.bottomView}>
                   <TouchableOpacity onPress={onChangeNumber}>
                       <View style={styles.btnChangeNumber}>
                            <Text style={styles.textChange}>Changer le code</Text>
                       </View>
                   </TouchableOpacity> 
                   <TouchableOpacity onPress={onResendOTP}>
                       <View style={styles.btnResend}>
                            <Text style={[
                                styles.textResend,
                                {
                                    color: enableResend ? "#234DB7" : "gray"
                                }
                                ]}>Renvoyer le code ({countdown}) </Text>
                       </View>
                   </TouchableOpacity> 
            </View>
        </KeyboardAvoidingView>
      </View>
    );
  }
const styles = StyleSheet.create({
    container:{
        flex:1
  },
    containerAvoiddingView:{
      flex: 1,
      alignItems: "center",
      padding: 10,
  },
  titleStyle:{
      marginTop: 50,
      marginBottom: 50,
      fontSize: 16
  },
  containerInput:{
      flexDirection: 'row',
      alignItems:"center",
      justifyContent:'center',
  },
  cellView:{
      paddingVertical: 11,
      width: 40,
      margin: 5,
      justifyContent: 'center',
      alignItems: 'center',
      borderBottomWidth: 1.5,

  },
  cellText:{
      textAlign: 'center',
      fontSize: 16,

  },
  bottomView:{
      flexDirection: 'row',
      flex: 1,
    //   justifyContent: 'flex-end',
      marginBottom: 50,
      alignItems: 'flex-end',
    //   backgroundColor: 'red'
  },
  btnChangeNumber:{
      width: 150,
      height: 50,
      borderRadius: 10,
      alignItems: "flex-start",
      justifyContent: 'center'
  },
  textChange:{
      color:'#234DB7',
      alignItems: 'center'
  },
  btnResend:{
      width: 150,
      height: 50,
      borderRadius: 10,
      alignItems: 'flex-end',
      justifyContent: 'center'
  },
  textResend:{
      alignItems: 'center',
      fontSize: 16
  }

})
