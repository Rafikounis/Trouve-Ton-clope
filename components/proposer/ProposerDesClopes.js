import * as React from 'react';
import { View, Text, ImageBackground } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';


const  ProposerDesClopes = () => {
    return (
        <ImageBackground source={require('../img/imageDeFond.jpg')} style={{ 
            resizeMode: "cover",
            alignItems: "center",
            flex: 1,
          }}>
            <Icon.Button
              name="ios-menu"
              backgroundColor="#3b5998"
              onPress={this.loginWithFacebook}
            >
              Login with Facebook
          </Icon.Button>

            

          </ImageBackground>
     
    );
  }

  export default ProposerDesClopes;