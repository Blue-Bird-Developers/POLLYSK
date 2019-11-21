import React, { Fragment } from 'react'
import _map from 'lodash/map'
import { Card, Divider, Image, Button, Grid } from 'semantic-ui-react'
import milktea1 from '../../assets/menu/milktea1.png'
import milktea2 from '../../assets/menu/milktea2.png'
import milktea3 from '../../assets/menu/milktea3.png'
import milktea4 from '../../assets/menu/milktea4.png'

interface IMenuCard {
  image: HTMLImageElement,
  name: string,
}

const cards = [
  {
    image: milktea1,
    name: '차얌 밀크티',
  },
  {
    image: milktea2,
    name: '타로 밀크티',
  },
  {
    image: milktea3,
    name: '말차 밀크티',
  },
  {
    image: milktea4,
    name: '블랙 밀크티',
  },
]

export default class MenuCard extends React.Component<{}, IMenuCard> {
  render() {
    return (
      <Card.Group doubling itemsPerRow={2} stackable>
        {_map(cards, (card: IMenuCard) => (
          <Card key={card.name}>
            <Card.Content>
              <Grid>
                <Grid.Column width={6}>
                  <Image
                    src={card.image}
                    // floated='left'
                    size='medium'
                  />
                </Grid.Column>
                <Grid.Column width={10}>
                  <Card.Header>{card.name}</Card.Header>
                  <Button.Group basic vertical>
                    <Button
                      color='blue'
                      content='작은 크기 900원'
                      size='tiny'
                    />
                    <Button
                      color='blue'
                      content='중간 크기 1500원'
                      size='tiny'
                    />
                    <Button
                      color='blue'
                      content='큰 크기 2000원'
                      size='tiny'
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
}
