import styled from 'styled-components'

export const HeaderBg = styled.div`
  padding-left: 34px;
  padding-right: 34px;
  padding-top: 12px;
  padding-bottom: 12px;
  border: 2px solid #ffffff;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border-radius: 10px;
`
export const NameContainer = styled.div`
  display: flex;
  flex-direction: column;
`
export const ResultContainer = styled.div`
  background-color: #ffffff;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-left: 32px;
  padding-right: 32px;
  padding-top: 24px;
  padding-bottom: 24px;
  @media screen and (max-width: 768px) {
    padding-left: 24px;
    padding-right: 24px;
    padding-top: 12px;
    padding-bottom: 12px;
  }
`
export const Name = styled.h1`
  font-family: 'Bree Serif';
  font-weight: 600;
  color: #ffffff;
  font-size: 25px;
  @media screen and (max-width: 768px) {
    font-size: 15px;
  }
`

export const Score = styled.p`
  color: #223a5f;
  font-size: 25px;
  font-weight: 600;
  font-family: 'Roboto';
  @media screen and (max-width: 768px) {
    font-size: 15px;
  }
`

export const Score1 = styled.p`
  font-size: 32px;
  color: #223a5f;
  font-family: 'Roboto';
  font-weight: 600;
  @media screen and (max-width: 768px) {
    font-size: 20px;
  }
`
