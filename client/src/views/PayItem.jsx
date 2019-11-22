import React from 'react'
import { Card, Image, Button, Grid } from 'semantic-ui-react'
import { observer } from 'mobx-react'

const PayItem = observer(({ item, onTake }) => {
  return (
    <Card>
      <Card.Content>
        <Grid>
          <Grid.Column width={6}>
            <Image src={item.image} size='medium' />
          </Grid.Column>
          <Grid.Column width={10}>
            <Card.Header>{item.name}</Card.Header>
            <Card.Description>{item.price}원</Card.Description>
            <Card.Description>{item.count}개</Card.Description>
            <Button.Group basic vertical>
              <Button
                color='blue'
                content='빼기'
                size='tiny'
                onClick={() => onTake(item.name, item.price)}
              />
            </Button.Group>
          </Grid.Column>
        </Grid>
      </Card.Content>
    </Card>
  )
})

export default PayItem
