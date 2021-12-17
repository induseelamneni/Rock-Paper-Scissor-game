import styled from 'styled-components'

export const BottomContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
`
export const RulesBtn = styled.button`
  background-color: #ffffff;
  color: #223a5f;
  font-size: 20px;
  font-weight: 500;
  font-family: 'Bree serif';
  border-radius: 10px;
  border-width: 0px;
  padding-top: 12px;
  padding-left: 12px;
  padding-right: 12px;
  padding-bottom: 12px;
  @media screen and (max-width: 768px) {
    font-size: 14px;
  }
`

export const ModalContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
`

export const closeButton = styled.button`
  align-self: flex-end;
  background-color: transparent;
  width: 28px;
  height: 28px;
  border: none;
  margin-top: 18px;
  margin-right: 18px;
  outline: none;
  cursor: pointer;
`

export const MoviePlayerContainer = styled.div`
  margin-top: 12px;
  margin-left: 48px;
  margin-bottom: 48px;
  margin-right: 48px;
  @media screen and (max-width: 768px) {
    margin-top: 12px;
    margin-left: 48px;
    margin-bottom: 24px;
    margin-right: 48px;
  }
`
export const RulesImage = styled.img`
  height: 350px;
  width: 700px;
  @media screen and (max-width: 768px) {
    height: 100px;
    width: 100px;
  }
`
