import PropTypes from 'prop-types'
import { Link, withTranslation } from '../../../i18n'
import s from './navigation.module.scss'

const Navigation = ({ t }) => {
  const navLinks = [
    {
      text: t('navigation-stock'),
      link: '#',
    },
    {
      text: t('navigation-about'),
      link: '#',
    },
    {
      text: t('navigation-contacts'),
      link: '#',
    },
  ]
  return (
    <>
      <nav className={s.content}>
        <div className={s.dropdown}>
          <button className={s.button}>
            {t('navigation-dropdown')}
            <span className={s.triangle} />
          </button>
        </div>
        <ul className={`${s.list}`}>
          {navLinks.map((item, index) => (
            <li className={s.link} key={index}>
              <Link href={item.link}>
                <a>{item.text}</a>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </>
  )
}

Navigation.propTypes = {
  t: PropTypes.func.isRequired,
}
export default withTranslation('header')(Navigation)
