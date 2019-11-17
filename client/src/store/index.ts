import { observable, action } from 'mobx'

type GlobalState = 'ready' | 'order' | 'pay' | 'ordered'

export class Store {
  @observable
  globalState: GlobalState = 'ready'

  @action
  setGlobalState(state: GlobalState) {
    this.globalState = state
  }
}

export default new Store()
