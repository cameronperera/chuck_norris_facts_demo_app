import React, { useContext, useEffect } from 'react'
import { View, Text, StyleSheet, FlatList, Button, TouchableOpacity } from 'react-native'
import { Context } from '../context/JokeContext';
import {exp} from 'react-native-reanimated';

const RandomJokesScreen = ({ navigation }) => {
  const { state, getRandomJokes } = useContext(Context)

  // getRandomJokes()
  return (
    <View>
      <FlatList
        data={state.randomJokes}
        keyExtractor={(joke) => joke.id}
        renderItem={({ item }) => {
          return (
            <View style={styles.row}>
              <Text style={styles.title}>{item.joke}</Text>
            </View>
          )
        }}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 20,
    paddingHorizontal: 10,
    borderTopWidth: 1,
    borderColor: 'gray'
  },
  title: {
    fontSize: 18,
  },
  icon: {
    fontSize: 24
  }
})

export default RandomJokesScreen
