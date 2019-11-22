import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import PayItems from './PayItemList'
import { Button } from 'semantic-ui-react'

export default class Pay extends React.Component {
  render() {
    return (
      <Container>
        <Title>결제페이지입니다.</Title>
        <PayItems />
        <Link to='/ordered'>
          <Button inverted color='blue'>
            결제하기
          </Button>
        </Link>
        <Link to='/order'>
          <Button inverted color='red'>
            다시 담기
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
`
