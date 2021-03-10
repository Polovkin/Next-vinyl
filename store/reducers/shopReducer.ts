import { FETCH_POSTS } from '../types'

const initialState = {
  products: [],
}

export const ShopReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_POSTS:
      return { ...state, products: action.payload }
    default:
      return state
  }
}
