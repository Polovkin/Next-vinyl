import { MainLayout } from '../layouts/MainLayout'
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import MainSection from '../components/sections/IndexMain/MainSection'
import Form from '../components/reusable/Form/Form'

const Homepage = () => {
  const { t } = useTranslation('common')
  return (
    <>
      <MainLayout>
        <MainSection />

        <section className="section">
          <h1>{t('main-title')}</h1>
          <Form />
        </section>
      </MainLayout>
    </>
  )
}

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ['common', 'header', 'form'])),
  },
})

export default Homepage
