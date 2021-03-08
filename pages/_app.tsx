import '../assets/scss/_app.scss'
import { appWithTranslation } from 'next-i18next'
import { HeaderProvider } from '../components/Layout/Header/HeaderCondext'

const MyApp = ({ Component, pageProps }) => {
  return (
    <HeaderProvider>
      <Component {...pageProps} />
    </HeaderProvider>
  )
}

//MyApp.getInitialProps = async (appContext) => ({ ...(await App.getInitialProps(appContext)) })

export default appWithTranslation(MyApp)
