import {Link} from 'react-router-dom'

import {Body, RockScissor, GamePlayBtn, Image} from './styledComponents'

const Play = ({setMyChoice, setMyChoiceId, choicesList}) => {
  const onClickRock = event => {
    setMyChoice(event.target.src)
    setMyChoiceId(event.target.id)
  }

  return (
    <Body>
      <RockScissor>
        <GamePlayBtn
          type="button"
          onClick={onClickRock}
          data-testid="rockButton"
        >
          <Link to="/game">
            <Image
              src={choicesList[0].imageUrl}
              alt={choicesList[0].id}
              className="image"
              id={choicesList[0].id}
            />
          </Link>
        </GamePlayBtn>
        <GamePlayBtn
          type="button"
          onClick={onClickRock}
          data-testid="scissorsButton"
        >
          <Link to="/game">
            <Image
              src={choicesList[1].imageUrl}
              alt={choicesList[1].id}
              className="image"
              id={choicesList[1].id}
            />
          </Link>
        </GamePlayBtn>
      </RockScissor>

      <div>
        <GamePlayBtn
          type="button"
          onClick={onClickRock}
          data-testid="paperButton"
        >
          <Link to="/game">
            <Image
              src={choicesList[2].imageUrl}
              alt={choicesList[2].id}
              className="image"
              id={choicesList[2].id}
            />
          </Link>
        </GamePlayBtn>
      </div>
    </Body>
  )
}

export default Play
