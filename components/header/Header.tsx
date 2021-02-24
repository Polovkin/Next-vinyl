import {i18n, Link, withTranslation} from '../../i18n'
import LangSwitcher from '../langSwitcher/LangSwitcher'
import Logotype from '../logotype/Logotype'
import Navigation from "../navigation/Navigation";

import style from './header.module.scss'
const Header = ({t}) => {
    return (
        <>
            <header className={style.header}>
                <div className={`${style['top-bar']} container is-fluid`}>
                    <Navigation/>
                    <LangSwitcher/>
                </div>
                <div className={`${style['bottom-bar']} container is-fluid`}>
                    <Logotype/>
                </div>
            </header>
        </>
    )
}

export default withTranslation('header')(Header)
