import PropTypes from 'prop-types'
import { i18n, Link, withTranslation } from '../../i18n'
import style from './navigation.module.scss'

const Navigation = ({ t }) => {
  const navLinks = [
    {
      text: t('navigation-stock'),
      link: '/stock',
    },
    {
      text: t('navigation-about'),
      link: '/about',
    },
    {
      text: t('navigation-contacts'),
      link: '/contacts',
    },
  ]
  return (
    <>
      <nav className={`${style.wrap}`}>
        {navLinks.map((item, index) => (
          <li className={style.link} key={index}>
            <Link href={item.link}>
              <a>{item.text}</a>
            </Link>
          </li>
        ))}
      </nav>
    </>
  )
}

Navigation.propTypes = {
  t: PropTypes.func.isRequired,
}
export default withTranslation('header')(Navigation)
