import Head from 'next/head'
import Header from '../components/header/Header'
import style from './main.module.scss'
import { HeaderProvider } from '../components/header/HeaderCondext'

export const MainLayout = ({ children, title = 'Next app' }) => {
  return (
    <>
      <HeaderProvider>
        <Head>
          <title>{title} | Next course</title>
        </Head>
        <Header />

        <main className={style.main}>{children}</main>
      </HeaderProvider>
    </>
  )
}
