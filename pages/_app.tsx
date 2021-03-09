import { appWithTranslation } from 'next-i18next'
import { Provider } from 'react-redux'
import { useStore } from '../store/store'
import { HeaderProvider } from '../components/Layout/Header/HeaderCondext'
import '../assets/scss/_app.scss'

const MyApp = ({ Component, pageProps }) => {
  const store = useStore(pageProps.initialReduxState)
  return (
    <Provider store={store}>
      <HeaderProvider>
        <Component {...pageProps} />
      </HeaderProvider>
    </Provider>
  )
}

export default appWithTranslation(MyApp)
