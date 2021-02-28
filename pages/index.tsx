import PropTypes from 'prop-types'
import {i18n, Link, withTranslation} from '../i18n'
import {MainLayout} from "../layouts/MainLayout";
import main from './main.module.scss'
import Image from 'next/image'

const Homepage = ({t}) => (
    <>
        <MainLayout>
            <section className={`section ${main['main-section']}`}>
                <Link href='/about'>
                    <button type='button'>
                        {t('about')}
                    </button>
                </Link>
                <h1>Test</h1>
            </section>
        </MainLayout>
    </>
)

Homepage.getInitialProps = async () => ({
    namespacesRequired: ['common'],
})

Homepage.propTypes = {
    t: PropTypes.func.isRequired,
}

export default withTranslation('common')(Homepage)
