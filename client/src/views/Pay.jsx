import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import PayItems from './PayItemList'
import { Button } from 'semantic-ui-react'
import getPolly from './polly'

export default class Pay extends React.Component {
  render() {
    return (
      <Container>
        <Title>선택하신 메뉴 목록입니다.</Title>
        <PayItems />
        <PayContainer>
          <Link to='/ordered'>
            <Button
              inverted
              color='blue'
              size='massive'
              onClick={() => getPolly('finishPolly.mp3')}
            >
              결제하기
            </Button>
          </Link>
          <Link to='/order'>
            <Button inverted color='red' size='massive'>
              다시 담기
            </Button>
          </Link>
          <Link to='/'>
            <Button inverted color='olive' size='massive'>
              주문 취소
            </Button>
          </Link>
        </PayContainer>
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
  font-size: 2rem;
  font-weight: 700;
`

const PayContainer = styled.div`
  /* display: flex;
  flex-direction: row; */
`
