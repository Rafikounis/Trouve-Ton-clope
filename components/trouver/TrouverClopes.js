import * as React from 'react';
import { View, Text, ImageBackground } from 'react-native';

const  TrouverClopes = () => {
    return (
        <ImageBackground source={require('../img/imageDeFond.jpg')} style={{ 
            resizeMode: "cover",
            alignItems: "center",
            flex: 1,
          }}>

            {/* <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                    <Text>Trouver tes clopes</Text>
            </View> */}

          </ImageBackground>


      
    );
  }

  export default TrouverClopes ;