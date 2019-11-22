import { observable, action, computed, toJS } from 'mobx'

class MenuStore {
  @observable
  selectedItems = []

  constructor(root) {
    this.root = root
  }

  @action
  put = (name, price) => {
    const { number } = this.root.counter
    const exists = this.selectedItems.find(item => item.name === name)
    if (!exists) {
      this.selectedItems.push({
        name,
        price,
        count: number,
      })
      return
    }
    exists.count += number
    console.log('put', toJS(this.selectedItems))
  }

  @action
  take = (name) => {
    const itemToTake = this.selectedItems.find(item => item.name === name);
    itemToTake.count--
    if (itemToTake.count === 0) {
      this.selectedItems.remove(itemToTake)
    }

    console.log('take', toJS(this.selectedItems))
  }

  @computed
  get total() {
    return this.selectedItems.reduce((prev, cur) => {
      return prev + cur.price * cur.count
    }, 0)
  }
}

export default MenuStore
