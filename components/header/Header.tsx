import PropTypes from 'prop-types'
import {i18n, Link, withTranslation} from '../../i18n'
import LangSwitcher from '../langSwitcher/LangSwitcher'
import Logotype from '../logotype/Logotype'
import style from './header.module.scss'

const Header = ({t}) => {
    return (
        <>
            <header className={style.header}>
                <Logotype/>
                <LangSwitcher/>
            </header>
        </>
    )
}

export default withTranslation('header')(Header)
