import { useTranslation } from 'next-i18next'
import { connect } from 'react-redux'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

import { MainLayout } from '../layouts/MainLayout'
import MainSection from '../components/sections/IndexMain/MainSection'
import Alert from '../components/reusable/Alert/Alert'
import NewProducts from '../components/sections/IndexNewProducts/NewProducts'
import { useEffect, useState } from 'react'
import Form from '../components/reusable/Form/Form'

import { GetServerSideProps } from 'next'
import { Products, ProductsArray } from '../interfaces/products'

interface HomepageProps {
  alert: string | null
  products: Products
}

const Homepage = ({ alert, products: serverPosts }: HomepageProps) => {
  const { t } = useTranslation('common')
  const [products, setProducts] = useState<Products>(serverPosts)

  /*useEffect(() => {
    async function load() {
      const response = await fetch('http://localhost:3001/shop/products/api')
      const json = await response.json()
      setProducts(json)
    }

    if (!serverPosts) {
      load()
    }
  }, [])*/

  return (
    <>
      <MainLayout>
        {alert && <Alert text={alert} />}
        <MainSection />

        <NewProducts products={products} />

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

export const getServerSideProps: GetServerSideProps = async ({ locale }) => {
  const response = await fetch(`http://localhost:3001/shop/products/api`)
  const products: ProductsArray = await response.json()

  return {
    props: {
      products: products.productsArr,
      ...(await serverSideTranslations(locale, ['common', 'header', 'form'])),
    },
  }
}

const mapStateToProps = (state) => ({
  alert: state.app.alert,
})
export default connect(mapStateToProps, null)(Homepage)
