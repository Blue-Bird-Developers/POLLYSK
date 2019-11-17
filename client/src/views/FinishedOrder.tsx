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
        <Title>주문해주셔서 감사합니다.</Title>
        <BackToMenuButton onClick={this.onClickBackToMenu}>처음으로 돌아가기</BackToMenuButton>
      </Container>
    )
  }

  onClickBackToMenu = () => {
    this.store.setGlobalState('ready')
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

const BackToMenuButton = styled.button`
  border-radius: 0.15rem;
  display: inline-block;
  font-weight: 500;
  padding: 0.35rem 0.9rem;
  position: relative;
  width: 7rem;
`
