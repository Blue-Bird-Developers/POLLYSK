import React from 'react'
import styled from 'styled-components'
import picture from '../../assets/seohyun.jpg'

export default class People extends React.Component {
  render() {
    return (
      <>
        <Container>
          <Photo src={picture} />
          <Description>20대</Description>
        </Container>
      </>
    )
  }
}

const Container = styled.div`
  box-shadow: 0 0.25rem 1rem 0 rgba(0, 0, 0, 0.2);
  cursor: pointer;
  border-radius: 0.2rem;
  overflow: hidden;
  height: 10rem;
  min-width: 240px;
  outline: none;
  background-size: cover;
  margin: 1rem;
`

const Photo = styled.img`
  background-position: 50% 50% no-repeat;
  height: 240px;
  width: 240px;
`

const Description = styled.div`
  text-align: center;
  font-size: 1.1rem;
  font-weight: 700;
`
