import React, { Fragment } from 'react'
import { Tab, Card } from 'semantic-ui-react'
import MenuCard from './MenuCard'

export default class Menus extends React.Component<{}> {
  render() {
    const panels = [
      {
        menuItem: '밀크티', render: () =>
          <Tab.Pane>
            <MenuCard />
          </Tab.Pane>
      },
      { menuItem: '커피', render: () => <Tab.Pane>커피입니다.</Tab.Pane> },
      { menuItem: '차', render: () => <Tab.Pane>차입니다.</Tab.Pane> },
    ]

    return (
      <Tab panes={panels} />
    )
  }
}
