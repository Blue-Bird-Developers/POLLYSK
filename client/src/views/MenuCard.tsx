import React from 'react'
import _map from 'lodash/map'
import { Card, Image, Button, Grid } from 'semantic-ui-react'
import milktea1 from '../../assets/menu/milktea1.png'
import milktea2 from '../../assets/menu/milktea2.png'
import milktea3 from '../../assets/menu/milktea3.png'
import milktea4 from '../../assets/menu/milktea4.png'
import { inject, observer } from 'mobx-react'
import IMenuStore from '~/stores/menu'
import { observable } from 'mobx';

interface IMenuCard {
  image: HTMLImageElement,
  name: string,
  price: []
}

interface MenuCardProps {
  menu?: IMenuStore
}

const cards = [
  {
    image: milktea1,
    name: '차얌 밀크티',
    price: [900, 1500, 2000]
  },
  {
    image: milktea2,
    name: '타로 밀크티',
    price: [900, 1500, 2000]
  },
  {
    image: milktea3,
    name: '말차 밀크티',
    price: [900, 1500, 2000]
  },
  {
    image: milktea4,
    name: '블랙 밀크티',
    price: [900, 1500, 2000]
  },
]

@inject('menu')
@observer
export default class MenuCard extends React.Component<MenuCardProps, {}, IMenuCard> {
  store = this.props.menu as IMenuStore

  render() {
    console.log(this.store)
    return (
      <Card.Group doubling itemsPerRow={2} stackable>
        {cards && _map(cards, (card: IMenuCard) => (
          <Card key={card.name}>
            <Card.Content>
              <Grid>
                <Grid.Column width={6}>
                  <Image
                    src={card.image}
                    size='medium'
                  />
                </Grid.Column>
                <Grid.Column width={10}>
                  <Card.Header>{card.name}</Card.Header>
                  <Button.Group basic vertical>
                    <Button
                      color='blue'
                      content={card.price[0]}
                      size='tiny'
                      onClick={() => this.onClickMenu(card.name, card.price[0])}
                    />
                    <Button
                      color='blue'
                      content={card.price[1]}
                      size='tiny'
                      onClick={() => this.onClickMenu(card.name, card.price[1])}
                    />
                    <Button
                      color='blue'
                      content={card.price[2]}
                      size='tiny'
                      onClick={() => this.onClickMenu(card.name, card.price[2])}
                    />
                  </Button.Group>
                </Grid.Column>
              </Grid>
            </Card.Content>
          </Card>
        ))}
      </Card.Group>
    )
  }

  onClickMenu = (name: string, price: number) => {
    // this.store.put(name, price)
    this.store.hello()
  }
}
