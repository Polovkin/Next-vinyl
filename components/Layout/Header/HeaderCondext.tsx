import React, { useContext, useReducer } from 'react'

const HeaderContext = React.createContext(null)

export const useHeader = () => {
  return useContext(HeaderContext)
}
const SHOW_MENU = 'show'
const HIDE_MENU = 'hide'

const reducer = (state, action) => {
  switch (action.type) {
    case SHOW_MENU:
      return { ...state, visible: true }
    case HIDE_MENU:
      return { ...state, visible: false }
    default:
      return state
  }
}

export const HeaderProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, {
    visible: false,
  })

  const show = () => dispatch({ type: SHOW_MENU })
  const hide = () => dispatch({ type: HIDE_MENU })

  return (
    <HeaderContext.Provider
      value={{
        visible: state.visible,
        show,
        hide,
      }}
    >
      {children}
    </HeaderContext.Provider>
  )
}
