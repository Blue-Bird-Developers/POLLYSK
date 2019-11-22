import React from 'react'
import { Button } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

export default class DetectAge extends React.Component {
  render() {
    return (
      <Container>
        <Title> 고객님의 연령대를 분석중입니다. </Title>
        <Link to='/order'>
          <Button inverted color='blue'>
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
  font-size: 26px;
  font-weight: 700;
  text-align: center;
`
