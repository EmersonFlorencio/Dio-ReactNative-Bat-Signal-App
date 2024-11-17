import { View, Image } from 'react-native';
import React from 'react';

import styles from './styles';
import batSinal from '../../../assets/batWing.png';

import Button from '../components/button';
import { router } from 'expo-router';


export default function Home() {
  function handleClick() {
    router.navigate("/forms")
  }

  return (
    <View style={styles.container}>
      <Image source={batSinal} style={styles.image}/>
      <View>
        <Button clique={handleClick}>Activate BatSignal</Button>
      </View>
    </View>
  )
}