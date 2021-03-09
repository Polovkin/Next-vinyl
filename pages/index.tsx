import { MainLayout } from '../layouts/MainLayout'
import { useTranslation } from 'next-i18next'
import { connect } from 'react-redux'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import MainSection from '../components/sections/IndexMain/MainSection'
import Alert from '../components/reusable/Alert/Alert'
import NewProducts from '../components/sections/IndexNewProducts/NewProducts'

const Homepage = ({ alert }) => {
  const { t } = useTranslation('common')
  return (
    <>
      <MainLayout>
        {alert && <Alert text={alert} />}
        <MainSection />
        <NewProducts />
        {/* <section className="section">
          <h1>{t('main-title')}</h1>
          <Form />
        </section>*/}
      </MainLayout>
    </>
  )
}

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ['common', 'header', 'form'])),
  },
})
const mapStateToProps = (state) => ({
  alert: state.app.alert,
})
export default connect(mapStateToProps, null)(Homepage)
