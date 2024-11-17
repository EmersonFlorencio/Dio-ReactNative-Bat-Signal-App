import React from 'react'
import { Text, TouchableOpacity } from 'react-native'


import styles from './styles'

type buttonProps = {
  children: string,
  clique: () => void
}

export default function Button({children, clique} : buttonProps) {
  return (
    <TouchableOpacity 
      style={styles.button}
      onPress={clique}
    >
      <Text style={styles.text}>{children}</Text>
    </TouchableOpacity>
  )
}