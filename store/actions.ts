import { SHOW_ALERT, HIDE_ALERT, FETCH_POSTS } from './types'

interface simpleAction {
  type: string
}

export function showAlert(text: string) {
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
export function getProducts() {
  return async (dispatch) => {
    try {
      const response = await fetch(`${process.env.FORM_URL}/shop/products/api`, {
        method: 'GET',
      })
      if (response.ok) {
        const json = await response.json()
        dispatch({ type: FETCH_POSTS, payload: json })
      }
    } catch (e) {
      //dispatch(showAlert('not-success'))
    }
  }
}
