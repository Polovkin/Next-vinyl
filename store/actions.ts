import { SHOW_ALERT, HIDE_ALERT, SUCCESS_ERROR, SUCCESS_OK } from './types'
import { FormInputs } from '../interfaces/components'

interface simpleAction {
  type: string
}

export function showAlert(text) {
  return (dispatch) => {
    dispatch({
      type: SHOW_ALERT,
      payload: text,
    })

    setTimeout(() => {
      dispatch(hideAlert())
    }, 3000)
  }
}

export function hideAlert(): simpleAction {
  return {
    type: HIDE_ALERT,
  }
}

export function sendForm(formData) {
  return async (dispatch) => {
    try {
      const response = await fetch(`${process.env.FORM_URL}/form`, {
        method: 'POST',
        body: formData,
      })
      if (response.ok) {
        dispatch(showAlert('success'))
      }
    } catch (e) {
      dispatch(showAlert('not-success'))
    }
  }
}
