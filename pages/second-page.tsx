import PropTypes from 'prop-types'
import {withTranslation, Link} from '../i18n'
import {MainLayout} from "../layouts/MainLayout";
import Header from "../components/header/Header";

const SecondPage = ({t}) => (
    <>
        <MainLayout>

            <Link href='/'>
                <button
                    type='button'
                >
                    {t('back-to-home')}
                </button>
            </Link>
        </MainLayout>
    </>
)

SecondPage.getInitialProps = async () => ({
    namespacesRequired: ['second-page'],
})

SecondPage.propTypes = {
    t: PropTypes.func.isRequired,
}

export default withTranslation('second-page')(SecondPage)
