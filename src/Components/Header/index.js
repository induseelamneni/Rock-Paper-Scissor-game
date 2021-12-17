import {
  HeaderBg,
  NameContainer,
  Name,
  ResultContainer,
  Score,
  Score1,
} from './styledComponents'

const Header = ({score}) => (
  <HeaderBg>
    <NameContainer>
      <Name>
        ROCK <br /> PAPER <br />
        SCISSORS
      </Name>
    </NameContainer>
    <ResultContainer>
      <Score>Score</Score>
      <Score1>{score}</Score1>
    </ResultContainer>
  </HeaderBg>
)

export default Header
