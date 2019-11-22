import React from 'react'
import { Card, Image, Button, Grid, Popup } from 'semantic-ui-react'
import getPolly from './polly'

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

export default MenuItem
