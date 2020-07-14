import React, { useContext, useEffect } from 'react'
import { View, Text, StyleSheet, Button } from 'react-native'
import { Context } from '../context/JokeContext';

const IndexScreen = ({ navigation }) => {
  const { state, getJokeById } = useContext(Context)

  useEffect(() => {
    getJokeById(498)
  }, [])
  // componentDidMount, DidUpdate, WillUnmount


  // todo: insert great chuck pic
    return (
    <View>
      <Text style={styles.title}>{state.jokeOfTheDay && state.jokeOfTheDay.joke}</Text>
      <Button
        title='Make your own joke!'
        onPress={() => navigation.navigate('CustomJoke')}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  title: {
    fontSize: 18,
    height: 40,
    paddingVertical: 36,
    paddingHorizontal: 8,
  },
})

export default IndexScreen
