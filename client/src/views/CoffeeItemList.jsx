import React from 'react'
import _map from 'lodash/map'
import coffee1 from '../../assets/menu/coffee1.png'
import coffee2 from '../../assets/menu/coffee2.png'
import coffee3 from '../../assets/menu/coffee3.png'
import coffee4 from '../../assets/menu/coffee4.png'
import coffee5 from '../../assets/menu/coffee5.png'
import coffee6 from '../../assets/menu/coffee6.png'
import { inject, observer } from 'mobx-react'
import MenuItem from './MenuItem'
import { Card } from 'semantic-ui-react'

const coffeteas = [
  {
    image: coffee1,
    name: '아메리카노',
    price: 1000
  },
  {
    image: coffee2,
    name: '카페라떼',
    price: 1500
  },
  {
    image: coffee3,
    name: '바닐라라떼',
    price: 1500
  },
  {
    image: coffee4,
    name: '말차라떼',
    price: 2000
  },
  {
    image: coffee5,
    name: '초코라떼',
    price: 2000
  },
  {
    image: coffee6,
    name: '티라떼',
    price: 2000
  }
]

const CoffeeItemList = ({ onPut }) => {
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
}))(observer(CoffeeItemList))
