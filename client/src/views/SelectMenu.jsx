import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import Menus from './Menu'

export default class SelectMenu extends React.Component {
  render() {
    return (
      <Container>
        <Title>주문페이지입니다.</Title>
        <Menus />
        <Link to='/pay'>
          <OrderButton>주문하기</OrderButton>
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

const OrderButton = styled.button`
  border-radius: 0.15rem;
  display: inline-block;
  font-weight: 500;
  padding: 0.35rem 0.9rem;
  position: relative;
  width: 7rem;
`

const Title = styled.div`
  font-size: 26px;
  font-weight: 700;
`