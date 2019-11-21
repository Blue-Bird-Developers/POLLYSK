import React, { Fragment } from 'react'
import _map from 'lodash/map'
import { Card, Divider, Image, Button, Grid, Item } from 'semantic-ui-react'
import milktea1 from '../../assets/menu/milktea1.png'
import milktea2 from '../../assets/menu/milktea2.png'

interface IOrderCard {
  image: HTMLImageElement,
  name: string,
  price: number,
}

const orders = [
  {
    image: milktea1,
    name: '차얌 밀크티',
    price: 900
  },
  {
    image: milktea2,
    name: '타로 밀크티',
    price: 1500
  },
]

export default class OrderCard extends React.Component<{}, IOrderCard> {
  render() {
    return (
      <Item.Group>
        {_map(orders, (card: IOrderCard) => (
          <Item key={card.name}>
            <Item.Image size='small' src={card.image} />
            <Item.Content verticalAlign='middle'>
              <Item.Header as='a'>{card.name}</Item.Header>
              <Item.Meta>{card.price}</Item.Meta>
            </Item.Content>
          </Item>
        ))}
      </Item.Group>
    )
  }
}
