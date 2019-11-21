import React, { Fragment } from 'react'
import _map from 'lodash/map'
import { Card, Divider, Image } from 'semantic-ui-react'
import image2 from '../../assets/yongsik.jpg'
import image3 from '../../assets/chris.jpg'
import image4 from '../../assets/ducksoon.jpg'

interface ICard {
  avatar: HTMLImageElement,
  sex: string,
  name: string,
  age: string
}

const cards = [
  {
    avatar: image2,
    sex: '남성',
    name: 'Yongsik',
    age: '30대',
  },
  {
    avatar: image3,
    sex: '남성',
    name: 'Chris',
    age: '40대',
  },
  {
    avatar: image4,
    sex: '여성',
    name: 'Ducksoon',
    age: '70대',
  },
]

export default class PeopleCard extends React.Component<{}, ICard> {
  render() {
    return (
      <Fragment>
        <Divider />
        <Card.Group doubling itemsPerRow={3} stackable>
          {_map(cards, (card: ICard) => (
            <Card key={card.name}>
              <Image src={card.avatar} />
              <Card.Content>
                <Fragment>
                  <Card.Header>{card.name}</Card.Header>
                  <Card.Meta>{card.sex}</Card.Meta>
                  <Card.Description>{card.age}</Card.Description>
                </Fragment>
              </Card.Content>
            </Card>
          ))}
        </Card.Group>
      </Fragment>
    )
  }
}
