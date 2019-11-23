import React from 'react'
import { Card, Header } from 'semantic-ui-react'
import { inject, observer } from 'mobx-react'
import CartItem from './CartItem'
import styled from 'styled-components'

const PreviewCartList = ({ items, total, onTake }) => {
  const itemList = items.map(item => (
    <CartItem item={item} key={item.name} onTake={onTake} />
  ))
  return (
    <CartContainer>
      <Card.Group doubling itemsPerRow={4} stackable>
        {itemList}
      </Card.Group>
      <Header as='h4'>금액: {total}원</Header>
    </CartContainer>
  )
}

export default inject(({ menu }) => ({
  items: menu.selectedItems,
  onTake: menu.take,
  total: menu.total
}))(observer(PreviewCartList))

const CartContainer = styled.div`
  max-height: 413px !important;
  overflow-y: auto;
  overflow-x: hidden;
  border: .1px white solid;
`
