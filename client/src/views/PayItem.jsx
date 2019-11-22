import React from 'react'
import { Card, Image, Button, Grid } from 'semantic-ui-react'
import { observer } from 'mobx-react'

const PayItem = observer(({ item, onTake }) => {
  return (
    <Card>
      <Card.Content>
        <Card.Header>{item.name}</Card.Header>
        <Card.Description>{item.price}원</Card.Description>
        <Card.Description>{item.count}개</Card.Description>
        <Button
          color='orange'
          content='빼기'
          size='tiny'
          onClick={() => onTake(item.name, item.price)}
        />
      </Card.Content>
    </Card>
  )
})

export default PayItem
