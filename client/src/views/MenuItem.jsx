import React from 'react'
import { Card, Image, Button, Grid } from 'semantic-ui-react'

const MenuItem = ({ name, image, price, onPut }) => {
  return (
    <Card>
      <Card.Content>
        <Grid>
          <Grid.Column width={6}>
            <Image src={image} size='medium' />
          </Grid.Column>
          <Grid.Column width={10}>
            <Card.Header>{name}</Card.Header>
            <Button.Group basic vertical>
              <Button
                color='blue'
                content={price}
                size='tiny'
                onClick={() => onPut(name, price)}
              />
            </Button.Group>
          </Grid.Column>
        </Grid>
      </Card.Content>
    </Card>
  )
}

export default MenuItem
