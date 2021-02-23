import {i18n, Link, withTranslation} from '../../i18n'
import style from './navigation.module.scss'



const Navigation = () =>{
    const items = [
        {
            text: 'Акции',
            link: '/act',
        },
        {
            text: 'О нас',
            link: '/about'
        },
        {
            text: 'Контакты',
            link: '/contacts'
        },
    ]
    return (
            <>
                <nav className={`${style.navigation}`}>
                    {items.map((item, index) =>
                            <li key={index}>
                                <Link href={item.link}>
                                    <a>{item.text}</a>
                                </Link>
                            </li>
                    )}
                </nav>
            </>
    )
}

export default Navigation
