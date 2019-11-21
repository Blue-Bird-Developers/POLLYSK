import { observable, action, computed } from 'mobx'
import _remove from 'lodash/remove'
import _find from 'lodash/find'

interface IMenuItem {
  name: string
  price: number
  count: number
}

class MenuStore {
  @observable selectedItems: IMenuItem[] = []

  @action
  put = (name: string, price: number) => {
    const exists = _find(this.selectedItems, { name }) as IMenuItem

    if (!exists) {
      console.log('put ', this.selectedItems)
      this.selectedItems.push({
        name,
        price,
        count: 1
      })
      return
    }
    exists.count++
  }

  @action
  hello() {
    console.log('hi')
    return 0
  }

  @action
  take = (name: string) => {
    const itemToTake = _find(this.selectedItems, { name }) as IMenuItem
    itemToTake.count--
    if (itemToTake.count === 0) {
      _remove(this.selectedItems, { name: itemToTake.name })
    }
  }

  @computed
  get total() {
    return this.selectedItems.reduce((previous, current) => {
      return previous + current.price * current.count
    }, 0)
  }
}

export default MenuStore
