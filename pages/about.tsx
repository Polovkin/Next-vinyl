import PropTypes from 'prop-types'
import { withTranslation, Link } from '../i18n'
import { MainLayout } from '../layouts/MainLayout'

const About = ({ t }) => (
  <>
    <MainLayout>
      <h1>{t('h1')}</h1>
      <Link href="/">
        <button type="button">{t('back-to-home')}</button>
      </Link>
    </MainLayout>
  </>
)

About.getInitialProps = async () => ({
  namespacesRequired: ['about'],
})

About.propTypes = {
  t: PropTypes.func.isRequired,
}

export default withTranslation('about')(About)
