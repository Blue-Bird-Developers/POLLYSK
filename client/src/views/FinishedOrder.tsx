import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

export default class Pay extends React.Component {
  render() {
    return(
      <Container>
        <Title>주문해주셔서 감사합니다.</Title>
        <Link to='/'>
          <BackToMenuButton>처음으로 돌아가기</BackToMenuButton>
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

const BackToMenuButton = styled.button`
  border-radius: 0.15rem;
  display: inline-block;
  font-weight: 500;
  padding: 0.35rem 0.9rem;
  position: relative;
  width: 7rem;
`
