import React from 'react'
import { Card, Header } from 'semantic-ui-react'
import { inject, observer } from 'mobx-react'
import PayItem from './PayItem'

const PayItemList = ({ items, total, onTake }) => {
  const itemList = items.map(item => (
    <PayItem item={item} key={item.name} onTake={onTake} />
  ))
  return (
    <>
      <Card.Group doubling itemsPerRow={3} stackable>
        {itemList}
      </Card.Group>
      <Header as='h4'>총합: {total}원</Header>
    </>
  )
}

export default inject(({ menu }) => ({
  items: menu.selectedItems,
  onTake: menu.take,
  total: menu.total
}))(observer(PayItemList))
