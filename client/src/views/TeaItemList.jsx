import React from 'react'
import _map from 'lodash/map'
import tea1 from '../../assets/menu/tea1.png'
import tea2 from '../../assets/menu/tea2.png'
import tea3 from '../../assets/menu/tea3.png'
import tea4 from '../../assets/menu/tea4.png'
import { inject, observer } from 'mobx-react'
import MenuItem from './MenuItem'
import { Card } from 'semantic-ui-react'

const coffeteas = [
  {
    image: tea1,
    name: '잉글리시블랙퍼스트',
    price: 1200,
    pollyText: 'tea1Polly.mp3'
  },
  {
    image: tea2,
    name: '우롱',
    price: 1200,
    pollyText: 'tea2Polly.mp3'
  },
  {
    image: tea3,
    name: '얼그레이',
    price: 1200,
    pollyText: 'tea3Polly.mp3'
  },
  {
    image: tea4,
    name: '차얌블랙티',
    price: 1400,
    pollyText: 'tea4Polly.mp3'
  }
]

const TeaItemList = ({ onPut }) => {
  const itemList = coffeteas.map(item => (
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
}))(observer(TeaItemList))
