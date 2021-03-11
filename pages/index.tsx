import { MainLayout } from '../layouts/MainLayout'
import { useTranslation } from 'next-i18next'
import { connect } from 'react-redux'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import MainSection from '../components/sections/IndexMain/MainSection'
import Alert from '../components/reusable/Alert/Alert'
import NewProducts from '../components/sections/IndexNewProducts/NewProducts'
import { useState, useEffect } from 'react'
import Form from '../components/reusable/Form/Form'

const Homepage = ({ alert, posts: serverPosts }) => {
  const { t } = useTranslation('common')
  const [posts, setPosts] = useState(serverPosts)

  /*useEffect(() => {
    async function load() {
      const response = await fetch('http://localhost:3001/shop/products/api')
      const json = await response.json()
      setPosts(json)
    }

    if (!serverPosts) {
      load()
    }
  }, [])

  if (!posts) {
    return <p>Loading ...</p>
  }*/
  return (
    <>
      <MainLayout>
        {alert && <Alert text={alert} />}
        <MainSection />

        <NewProducts posts={posts} />

        <section className="section">
          <div className="container">
            <h1>{t('main-title')}</h1>
            <Form />
          </div>
        </section>
      </MainLayout>
    </>
  )
}

export const getServerSideProps = async ({ locale }) => {
  /*  const response = await fetch(`http://localhost:3001/shop/products/api`)
  const products = await response.json()
  console.log(products.productsArr)*/
  return {
    props: {
      posts: [],
      ...(await serverSideTranslations(locale, ['common', 'header', 'form'])),
    },
  }
}

const mapStateToProps = (state) => ({
  alert: state.app.alert,
})
export default connect(mapStateToProps, null)(Homepage)
