import React, { Fragment } from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import styled, { createGlobalStyle } from 'styled-components'
import { Provider } from 'mobx-react'
import { DetectAge, SelectMenu, Pay, FinishedOrder } from './views'
import RootStore from './stores'

const root = new RootStore()

export default () =>
  <Provider {...root}>
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
    padding: 2.625rem 1.21875rem;
    justify-content: center;
    text-align: center;
    margin-left: auto;
    margin-right: auto;
  }

  html, #app, body {
    line-height: 3rem;
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
  padding: 1em;
  height: 100%;
`
