import PropTypes from 'prop-types'
import { withTranslation } from '../i18n'
import { MainLayout } from '../layouts/MainLayout'

import MainSection from '../components/sections/IndexMain/MainSection'

const Homepage = ({ t }) => {
  return (
    <>
      <MainLayout>
        <MainSection />
        <section className="section">
          <h1>test</h1>
        </section>
      </MainLayout>
    </>
  )
}

Homepage.getInitialProps = async () => ({
  namespacesRequired: ['common', 'header'],
})

Homepage.propTypes = {
  t: PropTypes.func.isRequired,
}

export default withTranslation('common')(Homepage)
