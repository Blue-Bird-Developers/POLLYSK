import React from 'react'
import _map from 'lodash/map'
import milktea1 from '../../assets/menu/milktea1.png'
import milktea2 from '../../assets/menu/milktea2.png'
import milktea3 from '../../assets/menu/milktea3.png'
import milktea4 from '../../assets/menu/milktea4.png'
import milktea5 from '../../assets/menu/milktea5.png'
import milktea6 from '../../assets/menu/milktea6.png'
import { inject, observer } from 'mobx-react'
import MenuItem from './MenuItem'
import { Card } from 'semantic-ui-react'

const milkteas = [
  {
    image: milktea1,
    name: '차얌 밀크티',
    price: 900,
    pollyText: 'milktea1Polly.mp3'
  },
  {
    image: milktea2,
    name: '타로 밀크티',
    price: 1500,
    pollyText: 'milktea2Polly.mp3'
  },
  {
    image: milktea3,
    name: '말차 밀크티',
    price: 1500,
    pollyText: 'milktea3Polly.mp3'
  },
  {
    image: milktea4,
    name: '블랙 밀크티',
    price: 1500,
    pollyText: 'milktea4Polly.mp3'
  },
  {
    image: milktea5,
    name: '망고 밀크퐁',
    price: 2500,
    pollyText: 'milktea5Polly.mp3'
  },
  {
    image: milktea6,
    name: '블루베리 밀크퐁',
    price: 2500,
    pollyText: 'milktea6Polly.mp3'
  }
]

const MilkTeaItemList = ({ onPut }) => {
  const itemList = milkteas.map(item => (
    <MenuItem {...item} key={item.name} onPut={onPut} />
  ))
  return (
    <Card.Group doubling itemsPerRow={3} stackable>
      {itemList}
    </Card.Group>
  )
}

export default inject(({ menu }) => ({
  onPut: menu.put
}))(observer(MilkTeaItemList))
