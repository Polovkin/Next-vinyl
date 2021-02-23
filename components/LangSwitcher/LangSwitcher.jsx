import {i18n, Link, withTranslation} from '../../i18n'
import style from './LangSwitcher.module.scss'

export default function LangSwitcher ()  {
    return (
            <>
                <div className={style.wrap}>
                    <button className={style.item}
                            type='button'
                            onClick={() => i18n.changeLanguage('ru')}>
                        RU
                    </button>
                    <button className={style.item}
                            type='button'
                            onClick={() => i18n.changeLanguage('en')}>
                        EN
                    </button>
                </div>
            </>
    )
}
