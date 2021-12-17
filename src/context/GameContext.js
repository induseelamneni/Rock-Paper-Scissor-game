import React from 'react'

const GameContext = React.createContext({
  myChoice: '',
  setMyChoice: () => {},
})

export default GameContext
