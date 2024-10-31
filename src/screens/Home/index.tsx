import { View, Text, Image } from 'react-native';
import React from 'react';

import styles from './styles';
import batSinal from '../../../assets/batWing.png';

import Button from '../../components/button';


export default function Home() {
  return (
    <View style={styles.container}>
      <Image source={batSinal} style={styles.image}/>
      <View>
        <Button />
      </View>
    </View>
  )
}