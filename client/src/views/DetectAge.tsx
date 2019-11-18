import React from 'react'
import styled from 'styled-components'
import PeopleCard from './PeopleCard'
import { observer, inject } from 'mobx-react'
import { Store } from '../store'
import { Link } from 'react-router-dom';

interface IDetectAge {
  isPeopleSelected: false
}

@inject('store')
@observer
export default class DetectAge extends React.Component<{}, IDetectAge> {
  store: Store = (this.props as any).store

  state: IDetectAge = {
    isPeopleSelected: false,
  }

  render() {
    return (
      <Container>
        <Title> 고객님의 연령대를 분석중입니다. </Title>
        <PeopleContainer>
          <PeopleCard />
          <PeopleCard />
          <PeopleCard />
        </PeopleContainer>
        <Link to='/order'>
          <StartButton onClick={this.onClickStartButton}>주문하기</StartButton>
        </Link>
      </Container>
    )
  }

  onClickStartButton = () => {
    this.store.setGlobalState('order')
  }
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`

const PeopleContainer = styled.div`
  display: flex;
  flex-direction: row;
  height: 100%;
`

const Title = styled.div`
  font-size: 26px;
  font-weight: 700;
  text-align: center;
`

const StartButton = styled.button`
  border-radius: 0.15rem;
  display: inline-block;
  font-weight: 500;
  padding: 0.35rem 0.9rem;
  position: relative;
  width: 7rem;
`
