import './App.css'

import {useState} from 'react'
import {Route, Switch} from 'react-router-dom'
import {AppBg} from './styledComponent'

import Game from './Components/Game'
import Play from './Components/Play'
import Header from './Components/Header'
import Footer from './Components/Footer'

const choicesList = [
  {
    id: 'ROCK',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rock-image.png',
  },
  {
    id: 'SCISSORS',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/scissor-image.png',
  },
  {
    id: 'PAPER',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/paper-image.png',
  },
]

const App = () => {
  const [myChoice, setMyChoice] = useState('')
  const [myChoiceId, setMyChoiceId] = useState('')
  const [score, setScore] = useState(0)

  return (
    <AppBg>
      <Header score={score} />

      <Switch>
        <Route exact path="/">
          <Play
            setMyChoice={setMyChoice}
            setMyChoiceId={setMyChoiceId}
            choicesList={choicesList}
          />
        </Route>

        <Route exact path="/game">
          <Game
            myChoice={myChoice}
            score={score}
            setScore={setScore}
            myChoiceId={myChoiceId}
            choicesList={choicesList}
          />
        </Route>
      </Switch>

      <Footer />
    </AppBg>
  )
}

export default App
