import PropTypes from 'prop-types'
import { withTranslation } from '../i18n'
import { MainLayout } from '../layouts/MainLayout'
import MainSection from '../components/sections/IndexMain/MainSection'
import Form from '../components/reusable/Form/Form'

const Homepage = ({ t }) => {
  return (
    <>
      <MainLayout>
        {/* <MainSection />*/}

        <section className="section">
          <h1>test</h1>
          <Form />
        </section>
      </MainLayout>
    </>
  )
}

Homepage.getInitialProps = async () => ({
  namespacesRequired: ['common', 'header', 'form'],
})

Homepage.propTypes = {
  t: PropTypes.func.isRequired,
}

export default withTranslation('common')(Homepage)
