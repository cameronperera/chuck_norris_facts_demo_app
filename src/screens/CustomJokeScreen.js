import React, { useContext, useState } from 'react'
import { View, Text, TextInput, StyleSheet, Button } from 'react-native'
import { Context } from '../context/JokeContext';

const CustomJokeScreen = () => {
  const { state, getCustomJoke } = useContext(Context)
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')

  return (
    <View>
      <Text style={styles.label} >Enter first name:</Text>
      <TextInput style={styles.input} value={firstName} onChangeText={text => setFirstName(text)} />
      <Text style={styles.label} >Enter last name:</Text>
      <TextInput style={styles.input} value={lastName} onChangeText={text => setLastName(text)} />
      <Button
        title="Create your joke!"
        onPress={() => getCustomJoke(firstName, lastName)}
      />

      { state.customJoke && <Text style={styles.text}>{state.customJoke.joke}</Text>}
    </View>
  )
}

const styles = StyleSheet.create({
  text: {
    fontSize: 18,
  },
  input: {
    fontSize: 18,
    borderWidth: 1,
    borderColor: 'black',
    marginBottom: 15,
    padding: 5,
    margin: 5
  },
  label: {
    fontSize: 20,
    marginBottom: 5,
    marginLeft: 5
  }})

export default CustomJokeScreen
