import Popup from 'reactjs-popup'
import './index.css'
import {RiCloseLine} from 'react-icons/ri'
import 'reactjs-popup/dist/index.css'

import {
  BottomContainer,
  RulesBtn,
  ModalContainer,
  MoviePlayerContainer,
  RulesImage,
} from './styledComponents'

const Footer = () => (
  <BottomContainer>
    <Popup
      modal
      trigger={<RulesBtn type="button">Rules</RulesBtn>}
      className="popup-content"
    >
      {close => (
        <ModalContainer>
          <closeButton
            type="button"
            data-testid="closeButton"
            onClick={() => close()}
          >
            <RiCloseLine size={20} color="#231f20" margin-top={10} />
          </closeButton>
          <MoviePlayerContainer>
            <RulesImage
              src="https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rules-image.png"
              alt="rules"
              className="rules-img"
            />
          </MoviePlayerContainer>
        </ModalContainer>
      )}
    </Popup>
  </BottomContainer>
)

export default Footer
