import React from 'react'
import styled from 'styled-components'
import { Store } from '../store'
import { observer, inject } from 'mobx-react'
import { Link } from 'react-router-dom';

@inject('store')
@observer
export default class SelectMenu extends React.Component {
  store: Store = (this.props as any).store

  render() {
    return (
      <Container>
        <Title>주문페이지입니다.</Title>
        <Link to='/pay'>
          <OrderButton onClick={this.onClickOrderButton}>주문하기</OrderButton>
        </Link>
      </Container>
    )
  }

  onClickOrderButton = () => {
    this.store.setGlobalState('pay')
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
