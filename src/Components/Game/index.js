// import {useState} from 'react'

import {Link} from 'react-router-dom'
import {useEffect, useState} from 'react'

import {
  Body1,
  ResultMagDisplayContainer,
  PlayAgainBtn,
  YouContainer,
  Image,
  ResultMsg,
} from './styledComponents'

const Game = ({myChoice, choicesList, myChoiceId, setScore, score}) => {
  const [playerWinOrLoss, playerWinOrLossMsg] = useState('')
  const [oponentChoice, setOponentChoice] = useState('')
  const [oponentChoiceImg, setOponentChoiceImg] = useState('')

  const randomGenerated = () => {
    const randomGeneratedImage = Math.floor(Math.random() * 3)
    setOponentChoice(choicesList[randomGeneratedImage].id)
    setOponentChoiceImg(choicesList[randomGeneratedImage].imageUrl)
  }

  useEffect(() => {
    randomGenerated()
  }, []) // eslint-disable-line react-hooks/exhaustive-deps

  const resultCalculation = () => {
    console.log(myChoiceId)
    console.log(oponentChoice)
    if (myChoiceId === 'PAPER' && oponentChoice === 'ROCK') {
      playerWinOrLossMsg('YOU WON')
      setScore(score + 1)
    } else if (myChoiceId === 'SCISSORS' && oponentChoice === 'ROCK') {
      playerWinOrLossMsg('YOU LOSE')
      setScore(score - 1)
    } else if (myChoiceId === 'ROCK' && oponentChoice === 'PAPER') {
      playerWinOrLossMsg('YOU LOSE')
      setScore(score - 1)
    } else if (myChoiceId === 'SCISSORS' && oponentChoice === 'PAPER') {
      playerWinOrLossMsg('YOU WON')
      setScore(score + 1)
    } else if (myChoiceId === 'ROCK' && oponentChoice === 'SCISSORS') {
      playerWinOrLossMsg('YOU WON')
      setScore(score + 1)
    } else if (myChoiceId === 'PAPER' && oponentChoice === 'SCISSORS') {
      playerWinOrLossMsg('YOU LOSE')
      setScore(score - 1)
    } else {
      playerWinOrLossMsg('IT IS DRAW')
      setScore(score + 0)
    }
    console.log(score)
  }

  useEffect(() => {
    resultCalculation()
  }, [oponentChoice]) // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <>
      <Body1>
        <YouContainer>
          <ResultMsg>YOU</ResultMsg>
          <Image src={myChoice} alt="your choice" />
        </YouContainer>
        <YouContainer id={oponentChoice}>
          <ResultMsg>OPPONENT</ResultMsg>
          <Image src={oponentChoiceImg} alt="opponent choice" />
        </YouContainer>
      </Body1>
      <ResultMagDisplayContainer>
        <ResultMsg>{playerWinOrLoss}</ResultMsg>
        <Link to="/">
          <PlayAgainBtn type="button">PLAY AGAIN</PlayAgainBtn>
        </Link>
      </ResultMagDisplayContainer>
    </>
  )
}

export default Game
