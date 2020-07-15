import React, { useContext, useEffect } from 'react'
import { View, Text, StyleSheet, Button, Image } from 'react-native'
import { Context } from '../context/JokeContext';

const IndexScreen = ({ navigation }) => {
  const { state, getJokeById } = useContext(Context)

  useEffect(() => {
    getJokeById(498)
  }, [])
  // componentDidMount, DidUpdate, WillUnmount

    return (
    <View>
      <Image style={styles.image} source={{ uri: 'https://images02.military.com/sites/default/files/media/veteran-jobs/content-images/2016/03/chucknorris.jpg'}} />
      <Text style={styles.title}>{state.jokeOfTheDay && state.jokeOfTheDay.joke}</Text>
      <Button
        title='Become the joke!'
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
