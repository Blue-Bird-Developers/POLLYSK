import React, { Fragment } from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import styled, { createGlobalStyle } from 'styled-components'
import { Provider, inject, observer } from 'mobx-react'
import { DetectAge, SelectMenu, Pay, FinishedOrder } from './views'
import MenuStore from './stores/menu'
import CounterStore from './stores/counter'

export default () =>
  <Provider menu={MenuStore} counter={CounterStore}>
    <BrowserRouter>
      <Fragment>
        <App />
        <GlobalStyle />
      </Fragment>
    </BrowserRouter>
  </Provider>

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    font-family: -apple-system, BlinkMacSystemFont, 'Malgun Gothic', 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';
  }

  html {
    display: block;
    font-size: 30px;
    user-select: none;
    padding: 2.625rem 1.21875rem;
    justify-content: center;
    margin-left: auto;
    margin-right: auto;
    outline: none;
    height: 100%;
  }

  html, #app, body {
    height: 100%;
  }
`

class App extends React.Component {
  render() {
    return (
      <AppContainer>
        <Route exact path='/' component={DetectAge} />
        <Route exact path='/order' component={SelectMenu} />
        <Route exact path='/pay' component={Pay} />
        <Route exact path='/ordered' component={FinishedOrder} />
      </AppContainer>
    )
  }
}

const AppContainer = styled.div`
  padding: 0.5rem;
  height: 100%;
`
