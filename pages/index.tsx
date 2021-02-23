import PropTypes from 'prop-types'
import {i18n, Link, withTranslation} from '../i18n'

import Footer from '../components/Footer'
import Header from "../components/Header";

const Homepage = ({t}) => (
    <>
        <main>
           <Header title={'header'}/>
            <div>

                <Link href='/second-page'>
                    <button
                        type='button'
                    >
                        {t('to-second-page')}
                    </button>
                </Link>
            </div>
        </main>
        <Footer/>
    </>
)

Homepage.getInitialProps = async () => ({
    namespacesRequired: ['common'],
})

Homepage.propTypes = {
    t: PropTypes.func.isRequired,
}

export default withTranslation('common')(Homepage)
