import Link from 'next/link'
import style from './LangSwitcher.module.scss'
import { useRouter } from 'next/router'

export default function LangSwitcher ()  {
    const router = useRouter()
    return (
            <>
                <div className={style.wrap}>
                    <Link
                            href='/'
                            locale={router.locale === 'en' ? 'ru' : 'en'}
                    >
                        <button>
                           change
                        </button>
                    </Link>
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
