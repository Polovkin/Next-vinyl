import { MainLayout } from '../layouts/MainLayout'
import Link from 'next/link'
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

const Homepage = () => {
  const { t } = useTranslation('common')
  return (
    <>
      <MainLayout>
        {/* <MainSection />*/}

        <section className="section">
          <h1>{t('main-title')}</h1>
          {/*<Form />*/}
        </section>
      </MainLayout>
    </>
  )
}

/*Homepage.getInitialProps = async () => ({
  namespacesRequired: ['common', 'header', 'form'],
})

Homepage.propTypes = {
  t: PropTypes.func.isRequired,
}

export default withTranslation('common')(Homepage)*/
export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ['common', 'header'])),
  },
})

export default Homepage
