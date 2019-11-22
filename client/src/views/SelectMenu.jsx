import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from 'semantic-ui-react'
import styled from 'styled-components'
import Menus from './Menu'
import axios from 'axios'

export default class SelectMenu extends React.Component {
  render() {
    return (
      <Container>
        <Title>주문페이지입니다.</Title>
        <Button
          size='small'
          basic
          color='blue'
          content='들려줘'
          onClick={() => this.pollyCall('categoryPolly.mp3')}
        />
        <Menus />
        <Link to='/pay'>
          <OrderButton>주문하기</OrderButton>
        </Link>
      </Container>
    )
  }


  pollyCall(wantedObject) {
    const result = axios.get('http://d3rapgmys1mfel.cloudfront.net/'+ wantedObject)
    .then(function (response) {     
     // handle success
      const url = response.data
      const onAudio = (url) => {
      const audio = new Audio()
  
      document.body.appendChild(audio)
      audio.src = url
  
      const onAudioStopped = () => {
        audio.removeEventListener('pause', onAudioStopped)
        audio.remove()
      }
  
      audio.addEventListener('pause', onAudioStopped)
      audio.load()
      audio.play()
    }
    onAudio(url)
    })
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
