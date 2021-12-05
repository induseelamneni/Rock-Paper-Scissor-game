import Popup from 'reactjs-popup'
import {Component} from 'react'
import './index.css'
import {RiCloseLine} from 'react-icons/ri'
import 'reactjs-popup/dist/index.css'

let s = 0

class Game extends Component {
  state = {
    clickedBtn: false,
    clickedImage: '',
    score: 0,
    imageId: '',
  }

  onClickRock = event => {
    this.setState({
      clickedImage: event.target.src,
      clickedBtn: true,
      imageId: event.target.alt,
    })
  }

  onClickScissor = event => {
    this.setState({
      clickedImage: event.target.src,
      clickedBtn: true,
      imageId: event.target.alt,
    })
  }

  onClickPaper = event => {
    this.setState({
      clickedImage: event.target.src,
      clickedBtn: true,
      imageId: event.target.alt,
    })
  }

  renderPlayingView = () => {
    const {choicesList} = this.props
    return (
      <div className="body">
        <div className="rock-scissor">
          <button
            type="button"
            className="game-play-btn"
            onClick={this.onClickRock}
            data-testid="rockButton"
          >
            <img
              src={choicesList[0].imageUrl}
              alt={choicesList[0].id}
              className="image"
            />
          </button>
          <button
            type="button"
            className="game-play-btn"
            onClick={this.onClickScissor}
            data-testid="scissorsButton"
          >
            <img
              src={choicesList[1].imageUrl}
              alt={choicesList[1].id}
              className="image"
            />
          </button>
        </div>
        <div>
          <button
            type="button"
            className="game-play-btn"
            onClick={this.onClickPaper}
            data-testid="paperButton"
          >
            <img
              src={choicesList[2].imageUrl}
              alt={choicesList[2].id}
              className="image"
            />
          </button>
        </div>
      </div>
    )
  }

  playAgain = () => {
    this.setState({clickedBtn: false})
  }

  renderResultView = () => {
    const {clickedImage, imageId} = this.state
    const {choicesList} = this.props
    const randomGeneratedImage = Math.floor(Math.random() * 3)

    let result = ''

    if (imageId === choicesList[randomGeneratedImage].id) {
      result = 'IT IS DRAW'
      s += 0
    } else if (
      imageId === 'PAPER' &&
      choicesList[randomGeneratedImage].id === 'ROCK'
    ) {
      result = 'YOU WON'
      s += 1
    } else if (
      imageId === 'SCISSORS' &&
      choicesList[randomGeneratedImage].id === 'ROCK'
    ) {
      result = 'YOU LOSE'

      s -= 1
    } else if (
      imageId === 'ROCK' &&
      choicesList[randomGeneratedImage].id === 'PAPER'
    ) {
      result = 'YOU LOSE'
      s += 1
    } else if (
      imageId === 'SCISSORS' &&
      choicesList[randomGeneratedImage].id === 'PAPER'
    ) {
      result = 'YOU WON'

      s += 1
    } else if (
      imageId === 'ROCK' &&
      choicesList[randomGeneratedImage].id === 'SCISSORS'
    ) {
      result = 'YOU WON'

      s += 1
    } else if (
      imageId === 'PAPER' &&
      choicesList[randomGeneratedImage].id === 'SCISSORS'
    ) {
      result = 'YOU LOSE'

      s -= 1
    }

    console.log(s)

    return (
      <div>
        <div className="body1">
          <div className="you-container">
            <p className="result-msg">YOU</p>
            <img src={clickedImage} alt="your choice" className="image" />
          </div>
          <div className="you-container">
            <p className="result-msg">OPPONENT</p>
            <img
              src={choicesList[randomGeneratedImage].imageUrl}
              alt="opponent choice"
              className="image"
            />
          </div>
        </div>
        <div className="result-mag-display-container">
          <p className="result-msg">{result}</p>
          <button
            type="button"
            className="play-again-btn"
            onClick={this.playAgain}
          >
            PLAY AGAIN
          </button>
        </div>
      </div>
    )
  }

  render() {
    const {clickedBtn} = this.state

    return (
      <div className="app-bg">
        <div className="header">
          <div className="names-container">
            <h1 className="name">ROCK</h1>
            <h1 className="name">PAPER</h1>
            <h1 className="name">SCISSORS</h1>
          </div>
          <div className="result-container">
            <p className="score">Score</p>
            <p className="score1">{s}</p>
          </div>
        </div>
        {clickedBtn ? this.renderResultView() : this.renderPlayingView()}
        <div className="bottom-container">
          <Popup
            modal
            trigger={
              <button type="button" className="rules-btn">
                Rules
              </button>
            }
            className="popup-content"
          >
            {close => (
              <div className="modal-container">
                <button
                  type="button"
                  data-testid="closeButton"
                  className="close-button"
                  onClick={() => close()}
                >
                  <RiCloseLine size={20} color="#231f20" margin-top={10} />
                </button>
                <div className="movie-player-container">
                  <img
                    src="https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rules-image.png"
                    alt="rules"
                    className="rules-img"
                  />
                </div>
              </div>
            )}
          </Popup>
        </div>
      </div>
    )
  }
}

export default Game
