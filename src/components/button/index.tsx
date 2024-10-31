import { Text, TouchableOpacity, Alert } from 'react-native'
import React from 'react'

import styles from './styles'

export default function Button() {
  function handleClick() {
    Alert.alert('Deu certo', 'botão esta funcionando')
  }

  return (
    <TouchableOpacity 
      style={styles.button}
      onPress={handleClick}
    >
      <Text style={styles.text}>Activite BatSignal</Text>
    </TouchableOpacity>
  )
}