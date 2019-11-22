import React from 'react'
import { Tab } from 'semantic-ui-react'
import MilkTeaItemList from './MilkTeaItemList'
import CoffeeItemList from './CoffeeItemList'
import TeaItemList from './TeaItemList'

export default class Menus extends React.Component {
  render() {
    const panels = [
      {
        menuItem: '밀크티',
        render: () => (
          <Tab.Pane>
            <MilkTeaItemList />
          </Tab.Pane>
        )
      },
      {
        menuItem: '커피',
        render: () => (
          <Tab.Pane>
            <CoffeeItemList />
          </Tab.Pane>
        )
      },
      {
        menuItem: '차',
        render: () => (
          <Tab.Pane>
            <TeaItemList />
          </Tab.Pane>
        )
      }
    ]

    return <Tab panes={panels} />
  }
}
