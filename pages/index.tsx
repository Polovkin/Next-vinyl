import PropTypes from 'prop-types'
import { Link, withTranslation } from '../i18n'
import { MainLayout } from '../layouts/MainLayout'
import main from './styles/main.module.scss'
import { useHeader } from '../components/Layout/Header/HeaderCondext'

const Homepage = ({ t }) => {
  const menuState = useHeader()
  return (
    <>
      <MainLayout>
        <section className={`section ${main['main-section']}`}>
          <Link href="/about">
            <button type="button">{t('about-link')}</button>
          </Link>
          <h1 className={`${menuState.visible ? 'eblo' : 'huilo'}`}>test</h1>
          <button onClick={menuState.show}>Click</button>
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
