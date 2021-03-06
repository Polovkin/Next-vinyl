import Head from 'next/head'
import Header from '../components/Layout/Header/Header'
import style from './main.module.scss'
import { HeaderProvider } from '../components/Layout/Header/HeaderCondext'

export const MainLayout = ({ children, title = 'Next app' }) => {
  return (
    <>
      <Head>
        <title>{title} | Next course</title>
      </Head>
      <Header />

      <main className={style.main}>{children}</main>
    </>
  )
}
