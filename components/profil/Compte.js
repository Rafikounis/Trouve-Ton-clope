import * as React from 'react';
import { View, Text } from 'react-native';
import { PricingCard } from 'react-native-elements';



const  Compte = () => {
    return (
      <PricingCard
      color="#4f9deb"
      title="Ma proposition"
      // price="$0"
      info={['Nom', 'N° tel', 'Ville']}
      button={{ title: "Desactiver l'annonce", icon: 'flight-takeoff' }}
    />
    
     
    );
  }

  export default Compte;