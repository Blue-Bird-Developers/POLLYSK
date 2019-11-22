import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from 'semantic-ui-react'
import styled from 'styled-components'
import Menus from './Menu'
import PreviewCart from './PreviewCart'
import getPolly from './polly'

export default class SelectMenu extends React.Component {
  render() {
    return (
      <Container>
        <Title>차얌에 오신 것을 환영합니다.</Title>
        <PreviewCart />
        <Menus />
        <Link to='/pay'>
          <Button
            inverted
            color='purple'
            onClick={() => getPolly('choicePolly.mp3')}
          >
            주문하기
          </Button>
        </Link>
        <Link to='/'>
          <Button basic color='olive'>
            주문 취소
          </Button>
        </Link>
      </Container>
    )
  }
}

const Container = styled.div`
  display: block;
  height: 100%;
`

const Title = styled.div`
  font-size: 2rem;
  font-weight: 700;
`
