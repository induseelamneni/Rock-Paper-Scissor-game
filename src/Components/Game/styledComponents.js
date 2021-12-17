import styled from 'styled-components'

export const Body1 = styled.div`
  height: 35%;
  width: 100%;
  padding-top: 24px;
  padding-bottom: 24px;
  padding-left: 32px;
  padding-right: 32px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-bottom: 25px;
  margin-top: 30px;
`

export const ResultMagDisplayContainer = styled.div`
  display: flex;
  flex-direction: column;

  align-items: center;
`
export const ResultMsg = styled.p`
  color: #ffffff;
  font-family: 'Roboto';
  font-size: 30px;
  font-weight: 700;
  @media screen and (max-width: 768px) {
    font-size: 18px;
  }
`
export const PlayAgainBtn = styled.button`
  padding-top: 12px;
  padding-left: 24px;
  padding-right: 24px;
  padding-bottom: 12px;
  border-radius: 10px;
  color: #223a5f;
  font-size: 20px;
  font-family: 'Bree Serif';
  font-weight: 500;
  border-width: 0px;
  @media screen and (max-width: 768px) {
    padding-top: 6px;
    padding-left: 12px;
    padding-right: 12px;
    padding-bottom: 6px;
    font-size: 16px;
  }
`

export const YouContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`
export const Image = styled.img`
  height: 150px;
  width: 150px;
  margin: 15px;
`
