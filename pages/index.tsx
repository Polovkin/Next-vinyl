import PropTypes from 'prop-types'
import {i18n, Link, withTranslation} from '../i18n'
import {MainLayout} from "../layouts/MainLayout";
import Header from "../components/header/Header";


const Homepage = ({t}) => (
    <>
        <MainLayout>
            <div>
                <Link href='/about'>
                    <button type='button'>
                        {t('about')}
                    </button>
                </Link>
            </div>

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