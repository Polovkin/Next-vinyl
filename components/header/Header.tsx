import PropTypes from 'prop-types'
import {i18n, Link, withTranslation} from '../../i18n'
import LangSwitcher from '../LangSwitcher/LangSwitcher'
import style from './header.module.scss'

const Header = ({t}) => {
    return (
        <>
            <header className={style.header}>
                <div className="logo">
                    {t('h1')}
                </div>
                <LangSwitcher/>
            </header>
        </>
    )
}

export default withTranslation('header')(Header)
