import React, { useContext, useEffect } from 'react'
import {View, Text, StyleSheet, Button, Image, FlatList} from 'react-native'
import { Context } from '../context/JokeContext';

const IndexScreen = ({ navigation }) => {
  const { state, getJokeById, getRandomJokes } = useContext(Context)

  useEffect(() => {
    getJokeById(498)
    getRandomJokes()
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
      <FlatList
        data={state.randomJokes}
        keyExtractor={(joke) => `${joke.id}`}
        renderItem={({ item }) => {
          return (
            <View>
              <Text style={styles.text}>{item.joke}</Text>
            </View>
          )
        }}
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
  text: {
    fontSize: 16,
    padding: 8,
  },
  image: {
    height: 250,
  },
})

export default IndexScreen
