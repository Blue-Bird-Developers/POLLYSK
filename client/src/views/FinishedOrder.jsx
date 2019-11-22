import React from 'react'
import styled from 'styled-components'
import { Button } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import getPolly from './polly'

export default class Pay extends React.Component {
  render() {
    return (
      <Container>
        <Title>주문해주셔서 감사합니다.</Title>
        <Title>고객님의 대기번호는 {getRandomInt(0, 100)}번 입니다.</Title>
        <Link to='/'>
          <Button basic color='olive' size='massive'>
            처음으로 돌아가기
          </Button>
        </Link>
      </Container>
    )
  }
}

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`

const Title = styled.div`
  font-size: 2rem;
  font-weight: 700;
`
