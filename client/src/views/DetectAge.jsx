import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

export default class DetectAge extends React.Component {
  render() {
    return (
      <Container>
        <Title> 고객님의 연령대를 분석중입니다. </Title>
        {/* <WebCam /> */}
        <Link to='/order'>
          <StartButton>주문하기</StartButton>
        </Link>
      </Container>
    )
  }
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`

const Title = styled.div`
  font-size: 26px;
  font-weight: 700;
  text-align: center;
`

const StartButton = styled.button`
  border-radius: 0.15rem;
  display: inline-block;
  font-weight: 500;
  padding: 0.35rem 0.9rem;
  position: relative;
  width: 7rem;
`
