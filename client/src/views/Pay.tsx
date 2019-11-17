import React from 'react'
import styled from 'styled-components'
import { Store } from '~/store'
import { observer, inject } from 'mobx-react'

@inject('store')
@observer
export default class Pay extends React.Component {
  store: Store = (this.props as any).store

  render() {
    return(
      <Container>
        <Title>결제페이지입니다.</Title>
        <PayButton onClick={this.onClickPayButton}>결제하기</PayButton>
        <BackToOrderButton onClick={this.onClickGoBackToOrder}>다시 주문하기</BackToOrderButton>
      </Container>
    )
  }

  onClickGoBackToOrder = () => {
    this.store.setGlobalState('order')
  }

  onClickPayButton = () => {
    this.store.setGlobalState('ordered')
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