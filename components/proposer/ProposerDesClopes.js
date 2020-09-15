import * as React from 'react';
import { View, Text, ImageBackground } from 'react-native';

const  ProposerDesClopes = () => {
    return (
        <ImageBackground source={require('../img/imageDeFond.jpg')} style={{ 
            resizeMode: "cover",
            alignItems: "center",
            flex: 1,
          }}>

            {/* <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                    <Text>Depanner</Text>
            </View> */}

          </ImageBackground>
     
    );
  }

  export default ProposerDesClopes;