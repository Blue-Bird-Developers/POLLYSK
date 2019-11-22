import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from 'semantic-ui-react'
import styled from 'styled-components'
import Menus from './Menu'
import PreviewCart from './PreviewCart'
import axios from 'axios'

export default class SelectMenu extends React.Component {
  render() {
    return (
      <Container>
        <Title>차얌에 오신 것을 환영합니다.</Title>
        {/* <Button
          size='small'
          basic
          color='blue'
          content='들려줘'
          onClick={() => this.pollyCall('categoryPollyPolly.mp3')}
        /> */}
        <PreviewCart />
        <Menus />
        <Link to='/pay'>
          <Button inverted color='purple'>
            담기
          </Button>
        </Link>
      </Container>
    )
  }

  pollyCall(wantedObject) {
    const result = axios
      .get('http://d3rapgmys1mfel.cloudfront.net/' + wantedObject)
      .then(function(response) {
        // handle success
        const url = response.data
        const onAudio = url => {
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
  display: block;
  height: 100%;
`

const Title = styled.div`
  font-size: 26px;
  font-weight: 700;
`
