import React from 'react'
import { TextInput, View, Text, Image, Alert } from 'react-native'
import { router } from 'expo-router';

import styles from './styles';
import batSignal from './../../../assets/batWing.png'
import Button from '../components/button';

export default function Forms() {
  const [text, onChangeText] = React.useState('');
  const [number, onChangeNumber] = React.useState('');

  function submitSignal() {
    Alert.alert('BatSinal ativado!','O Batmam já vai averiguar sua região')

   return router.navigate('/home');
  }

  return (
    <View style={styles.container}>
      <View style={styles.container2}>
        <Image source={batSignal} style={styles.image}/>
        <Text style={styles.text} >Nome</Text>
        <TextInput
          style={styles.input}
          onChangeText={onChangeText}
          value={text}
        />
        <Text style={styles.text} >Telefone</Text>
        <TextInput
          style={styles.input}
          value={number}
          onChangeText={onChangeNumber}
          keyboardType='phone-pad'
        />
        <Text style={styles.text}>Localização</Text>
        <TextInput
          editable
          multiline
          numberOfLines={4}
          maxLength={40}
          onChangeText={text => onChangeText(text)}
          style={styles.textInput}
        />
        <Text style={styles.text}>Observação</Text>
        <TextInput
          editable
          multiline
          numberOfLines={4}
          maxLength={40}
          onChangeText={text => onChangeText(text)}
          style={styles.textInput}
        />
      </View>
        <Button clique={submitSignal}>Enviar</Button>
    </View>
  )
}