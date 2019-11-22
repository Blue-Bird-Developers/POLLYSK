import React from 'react'
import styled from 'styled-components'
import { observer, inject } from 'mobx-react'
import { Link } from 'react-router-dom'
import OrderCard from './OrderCard'

export default class Pay extends React.Component {
  render() {
    return (
      <Container>
        <Title>결제페이지입니다.</Title>
        <OrderCard />
        <Link to='/ordered'>
          <PayButton>결제하기</PayButton>
        </Link>
        <Link to='/order'>
          <BackToOrderButton>다시 주문하기</BackToOrderButton>
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

const PayButton = styled.button`
  border-radius: 0.15rem;
  display: inline-block;
  font-weight: 500;
  padding: 0.35rem 0.9rem;
  position: relative;
  width: 7rem;
`

const BackToOrderButton = styled.button`
  border-radius: 0.15rem;
  display: inline-block;
  font-weight: 500;
  padding: 0.35rem 0.9rem;
  position: relative;
  width: 7rem;
`
