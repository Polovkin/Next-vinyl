import { SHOW_ALERT, HIDE_ALERT, SUCCESS_ERROR, SUCCESS_OK } from '../types'

const initialState = {
  success: false,
  alert: null,
}

export const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case SUCCESS_OK:
      return { ...state, success: true }
    case SUCCESS_ERROR:
      return { ...state, success: false, payload: action.error }
    case SHOW_ALERT:
      return { ...state, alert: action.payload }
    case HIDE_ALERT:
      return { ...state, alert: null }
    default:
      return state
  }
}
