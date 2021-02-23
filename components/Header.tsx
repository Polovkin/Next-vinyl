import PropTypes from 'prop-types'
import {i18n, Link, withTranslation} from '../i18n'
import LangSwitcher from './LangSwitcher/LangSwitcher'

const Header = ({t, title}) => {
    return (
        <>
            <header>
                <div className="logo">
                    logo
                </div>
                <h1>{title}</h1>
                <LangSwitcher/>
            </header>
        </>
    )
}


Header.getInitialProps = async () => ({
    namespacesRequired: ['common'],
})
Header.propTypes = {
    title: PropTypes.string.isRequired,
}
export default withTranslation('common')(Header)
