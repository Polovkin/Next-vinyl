import { combineReducers } from 'redux'
import { appReducer } from './appReducer'
import { ShopReducer } from './shopReducer'

export default combineReducers({
  app: appReducer,
  shop: ShopReducer,
})
