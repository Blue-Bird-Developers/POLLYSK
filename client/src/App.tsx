import React, { Fragment } from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import styled, { createGlobalStyle } from 'styled-components'
import { Provider, inject, observer } from 'mobx-react'
import { DetectAge, SelectMenu, Pay, FinishedOrder } from './views'
import store, { Store } from './store'

export default () => (
  <Provider store={store}>
    <BrowserRouter>
      <Fragment>
        <App />
        <GlobalStyle />
      </Fragment>
    </BrowserRouter>
  </Provider>
)

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

@inject('store')
@observer
class App extends React.Component {
  store: Store = (this.props as any).store

  render() {
    console.log(store.globalState)
    return (
      <AppContainer>
        <Route exact path='/' component={DetectAge} />
        <Route exact path='/order' component={SelectMenu} />
        <Route exact path='/pay' component={Pay} />
        <Route exact path='/ordered' component={FinishedOrder} />
        {/* <Route exact path='/'>
          {this.store.globalState === 'ready' && 
            <DetectAge />
          }
        </Route>
        <Route exact path='/order'>
          {this.store.globalState === 'order' &&
            <SelectMenu />
          }
        </Route>
        <Route exact path='/pay'>
          {this.store.globalState === 'pay' &&
            <Pay />
          }
        </Route>
        <Route exact path='/ordered'>
          {this.store.globalState === 'ordered' &&
            <FinishedOrder />
          }
        </Route> */}
      </AppContainer>
    )
  }
}

const AppContainer = styled.div`
  padding: 0.5rem;
  height: 100%;
`
