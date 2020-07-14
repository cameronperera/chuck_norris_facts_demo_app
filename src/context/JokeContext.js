import React, { useReducer } from 'react'
import jokeServer from '../api/JokeServer';

const EXPLICIT_FILTER = 'exclude=[explicit]'

const jokeReducer = (state, action) => {
  switch (action.type) {
    case 'get_random_jokes':
      return {...state, randomJokes: action.payload}
    case 'get_custom_joke':
      return {...state, customJoke: action.payload}
    case 'get_joke_by_id':
      return {...state, jokeOfTheDay: action.payload}
    default:
      return state
  }
}

const getRandomJokes = dispatch => {
  return async () => {
    const response = await jokeServer.get(`/random/5?${EXPLICIT_FILTER}`)
    dispatch({ type: 'get_random_jokes', payload: response.data.value })
  }
}

const getCustomJoke = dispatch => {
  return async (firstName, lastName) => {
    const response = await jokeServer.get(`/random?firstName=${firstName}&lastName=${lastName}&${EXPLICIT_FILTER}`)
    dispatch({ type: 'get_custom_joke', payload: response.data.value })
  }
}

const getJokeById = dispatch => {
  return async (id) => {
    const response = await jokeServer.get(`/${id}`)
    dispatch({ type: 'get_joke_by_id', payload: response.data.value })
  }
}

const createDataContext = (reducer, actions, initialState) => {
  const Context = React.createContext()

  const Provider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState)

    // actions === { getRandomJokes: (dispatch) => { return () => {} } }
    const boundActions = {}
    for (let key in actions) {
      boundActions[key] = actions[key](dispatch)
    }

    return <Context.Provider value={{ state, ...boundActions }}>
      {children}
    </Context.Provider>
  }

  return { Context, Provider }
}

export const { Context, Provider } = createDataContext(
  jokeReducer,
  { getJokeById, getRandomJokes, getCustomJoke },
  {
    randomJokes: null, // [] joke objects
    jokeOfTheDay: null, // joke object
    customJoke: null, // joke object
  }
)
