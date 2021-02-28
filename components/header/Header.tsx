import {i18n, Link, withTranslation} from '../../i18n'
import LangSwitcher from '../langSwitcher/LangSwitcher'
import Logotype from '../logotype/Logotype'
import Navigation from "../navigation/Navigation";

import s from './header.module.scss'
import {useState} from "react";
import logotypeStyle from "../logotype/logotype.module.scss";

console.log(s);

const Header = ({t}) => {
    const [active, setActive] = useState(false)

    function addClass() {
        setActive(prev => prev = !prev)
    }

    return (
        <>
            <header className={s.header}>
                <div className={`${s.test1} ${active ? s.test2 : ''}`}
                     onClick={addClass}>Test
                </div>
                <div className={`${s.top_bar} container is-fluid`}>
                    <Navigation/>
                    <LangSwitcher/>
                </div>
                <div className={`${s.bottom_bar} container is-fluid`}>
                    <Logotype/>
                </div>
            </header>
        </>
    )
}

export default withTranslation('header')(Header)
