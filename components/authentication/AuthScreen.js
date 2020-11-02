import React, {useRef, useState, useEffect} from 'react';
import { render } from 'react-dom';
import { Button, View, Text, StyleSheet, KeyboardAvoidingView, Modal } from 'react-native';
import { FlatList, TextInput, TouchableOpacity, TouchableWithoutFeedback } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
import {Countries} from './Countries';


export function AuthScreen ({ navigation }) {
    let textInput = useRef(null);
    const defaultCodeCountry = "+33 ";
    const defaultMaskCountry = "6 00 00 00 00"
    const [phoneNumber, setPhoneNumber] = useState();
    const [focusInput, setFocusInput] = useState(true);
    const [modalVisible, setModalVisible] = useState(false);
    const [dataCountries, setDataCountries] = useState(Countries);
    const [codeCountry, setCodeCountry] = useState(defaultCodeCountry);
    const [placeHolder, setPlaceHolder] = useState(defaultMaskCountry)

    const onShowHideModal = () => {
        // setModalVisible(! modalVisible)
    }
    const onChangePhone = (number) =>{
        setPhoneNumber(number)
    }
    const onPressContinue = () => {
        //to need phone number to continue
        if(phoneNumber){
            navigation.navigate('Input OTP')
        }
    }

    const onchangeFocus =() => {
        setFocusInput(true)
    }

    const onchangeBlur = () =>{
        setFocusInput(false)
    }

    useEffect(()=>{
        textInput.focus()
    },[])

    const filterCountries = (value) => {
       if (value) {
        const countryData = dataCountries.filter((obj) => 
        (obj.en.indexOf > -1 || obj.dialCode.indexOf(value) > -1))
        setDataCountries(countryData)
       } else {
           setDataCountries(Countries)
       }
    };

    const onCountryChange = (item) => {
        setCodeCountry(item.dialCode)
        setPlaceHolder(item.mask)
        onShowHideModal()
    };

    let renderModal = () => {
        return (
            <Modal animationType="slide" transparent={false} visible={modalVisible}>
                <SafeAreaView style={{flex: 1}}>
                    <View style={styles.modalContainer}>
                        <View style={styles.filterInputContainer}>
                            <TextInput 
                                autoFocus={true}
                                onChangeText={filterCountries}
                                placeholder={'Filtrer'}
                                focusable={true}
                                style={styles.filterInputStyle}
                            />
                        </View>
                        
                        <FlatList
                            style={{flex:1}}
                            data={dataCountries}
                            extraData={dataCountries}
                            keyExtractor={(item, index) => index.toString()}
                            renderItem={
                                ({item}) => (
                                    <TouchableWithoutFeedback onPress={() => onCountryChange(item)}>
                                        <View style={styles.contriesModalStyle}>
                                            <View style={styles.modalItemContainer}>
                                                <Text style={styles.modalItemName}> {item.en} </Text>
                                                <Text style={styles.modalItemDialCode}> {item.dialCode} </Text>
                                            </View>
                                        </View>
                                    </TouchableWithoutFeedback>
                                )
                            }
                        /> 
                    </View>

                    <TouchableOpacity onPress={onShowHideModal} style={styles.closeButtomStyle}>
                        <Text style={styles.closeTextStyle}>{'Fermer'}</Text>
                    </TouchableOpacity>
                   
                </SafeAreaView>
            </Modal>
        )
    }
    return (
      <View style={styles.container}>
        <KeyboardAvoidingView
            keyboardVerticalOffset={50}
            behavior={'padding'}
            style={styles.containerAvoiddingView}
        > 
            <Text style={styles.textTitle}>{"Votre numéro de Tel"}</Text>
            <View style={[
                styles.containerInput,
                {
                    borderBottomColor: focusInput ? "#244db7" : "#ffffff"
                }
                ]}>
                <TouchableOpacity onPress={onShowHideModal}>
                    <View style={styles.openDialogView}>
                        <Text>{codeCountry + " |"}  </Text>
                    </View>
                </TouchableOpacity>
                {renderModal()}
                <TextInput 
                    ref={(input) => textInput = input}
                    style={styles.phoneInputStyle}
                    placeholder={placeHolder}
                    keyboardType="numeric"
                    value={phoneNumber}
                    onChangeText={onChangePhone}
                    secureTextEntry={false}
                    onFocus={onchangeFocus}
                    onBlur={onchangeBlur}
                    autoFocus={focusInput}
                />
            </View>
            <View style={styles.viewBottom}>
                <TouchableOpacity onPress={onPressContinue}>
                    <View style={[
                        styles.bottomContinuer,
                        {
                            backgroundColor: phoneNumber? "#244db7" : "grey"
                        }
                        ]}>
                        <Text style={styles.textContinuer}>Continuer</Text>
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
      textTitle:{
          marginBottom: 50,
          marginTop: 50,
          fontSize: 16
      },
      containerInput:{
          flexDirection: "row",
          paddingHorizontal: 12,
          borderRadius: 10,
          backgroundColor: "white",
          alignItems: "center",
          borderBottomWidth: 1.5

      },
      openDialogView:{
          flexDirection: "row",
          alignItems: 'center',
          justifyContent: "center",
      },
      phoneInputStyle:{
          marginLeft: 5,
          flex:1,
          height: 50
      },
      viewBottom:{
          flex: 1,
          justifyContent: "flex-end",
          marginBottom: 50,
          alignItems: "center"
      },
      bottomContinuer:{
          width: 150,
          height: 50,
          borderRadius: 10,
          alignItems: "center",
          justifyContent: 'center',
          
      },
      textContinuer: {
          color: "#ffffff", 
          alignItems: 'center'
      },
      modalContainer: {
          paddingTop: 15,
          paddingLeft: 25,
          paddingRight: 25,
          flex: 1,
          backgroundColor: "white"
      },
      filterInputStyle:{
          flex: 1,
          paddingTop: 10,
          paddingBottom:10, 
          backgroundColor: "#fff",
          color: "#424242"
      },
      contriesModalStyle:{
          flex: 1,
          borderColor: 'black',
          borderTopWidth: 1,
          padding: 12,
          flexDirection: 'row',
          alignItems: "center",
          justifyContent: "space-between"
      },
      modalItemContainer:{
          flex: 1,
          paddingLeft: 5,
          flexDirection: 'row',

      },
      modalItemName:{
        flex: 1,
        fontSize: 16,
      },
      modalItemDialCode:{
        fontSize: 16,
      },
      filterInputContainer: {
          width: '100%',
          flexDirection: "row",
          justifyContent: 'center',
          alignItems: 'center',
      },
      closeButtomStyle: {
        padding: 12,
        alignItems: 'center',
      },
      closeTextStyle:{
        padding: 5,
        fontSize: 20,
        color: "black",
        fontWeight: "bold"
      }
  })

  