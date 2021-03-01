import Head from 'next/head'
import Header from '../components/header/Header'
import style from './main.module.scss'

export function MainLayout({ children, title = 'Next app' }) {
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
