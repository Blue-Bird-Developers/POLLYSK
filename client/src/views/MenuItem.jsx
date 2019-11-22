import React from 'react'
import { Card, Image, Button, Grid, Popup } from 'semantic-ui-react'
import axios from 'axios'

const MenuItem = ({ name, image, price, pollyText, onPut }) => {
  return (
    <Card>
      <Card.Content>
        <Grid>
          <Grid.Column width={6}>
            <Image src={image} size='medium' />
          </Grid.Column>
          <Grid.Column width={10}>
            <Card.Header>{name}</Card.Header>
            <Popup
              trigger={
                <Button
                  color='red'
                  content={price}
                  icon='heart'
                  onClick={() => getPolly(pollyText)}
                  label={{
                    basic: true,
                    color: 'red',
                    pointing: 'left',
                    content: '주문'
                  }}
                />
              }
              content={
                <Button
                  color='green'
                  content='담기'
                  onClick={() => onPut(name, price)}
                />
              }
              on='click'
              position='top right'
            />
          </Grid.Column>
        </Grid>
      </Card.Content>
    </Card>
  )
}

function getPolly(params) {
  const result = axios
    .get('https://inmp3pollybucket.s3.ap-northeast-2.amazonaws.com/' + params)
    .then(function(res) {
      const url = res.config.url
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

export default MenuItem
