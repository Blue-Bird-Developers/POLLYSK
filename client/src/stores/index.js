import CounterStore from './counter'
import MenuStore from './menu'

class RootStore {
  constructor() {
    this.counter = new CounterStore(this)
    this.menu = new MenuStore(this)
  }
}

export default RootStore