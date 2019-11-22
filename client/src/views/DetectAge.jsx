import React from 'react'
import { Button } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import getPolly from './polly'
import WebCam from './WebCam'

export default class DetectAge extends React.Component {
  render() {
    return (
      <Container>
        <Title> 고객님의 연령대를 분석중입니다. </Title>
        <WebCam />
        <Link to='/order'>
          <Button inverted color='blue' onClick={() => getPolly('welcomePolly.mp3')}>
            주문하기
          </Button>
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
  font-size: 2rem;
  font-weight: 700;
  text-align: center;
`
