import PropTypes from 'prop-types'

import { MainLayout } from '../layouts/MainLayout'
const About = () => (
  <>
    <MainLayout>
      <h1>test</h1>
    </MainLayout>
  </>
)

/*About.getInitialProps = async () => ({
  namespacesRequired: ['about'],
})

About.propTypes = {
  t: PropTypes.func.isRequired,
}

export default withTranslation('about')(About)*/
export default About
