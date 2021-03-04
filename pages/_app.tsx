import App from 'next/app'
import '../assets/scss/_app.scss'
import { appWithTranslation } from '../i18n'
import { HeaderProvider } from '../components/header/HeaderCondext'

const MyApp = ({ Component, pageProps }) => {
  return (
    <HeaderProvider>
      <Component {...pageProps} />
    </HeaderProvider>
  )
}

MyApp.getInitialProps = async (appContext) => ({ ...(await App.getInitialProps(appContext)) })

export default appWithTranslation(MyApp)
