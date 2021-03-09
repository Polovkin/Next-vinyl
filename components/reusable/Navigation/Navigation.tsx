import { FunctionComponent } from 'react'
import Link from 'next/link'
import { useTranslation } from 'next-i18next'
import { useEffect, useState } from 'react'
import classNames from 'classnames'
import s from './navigation.module.scss'

const Navigation: FunctionComponent = () => {
  const { t } = useTranslation('header')
  const [animate, setAnimate] = useState(false)

  useEffect(() => {
    setAnimate(true)
  }, [])

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
          <button className={classNames(s.button, 'disabled')}>
            {t('navigation-dropdown')}
            <span className={s.triangle} />
          </button>
        </div>
        <ul className={s.list}>
          {navLinks.map((item, index) => (
            <li className={s.item} key={index}>
              <Link href={item.link}>
                <a className={classNames(s.link, animate ? s.expandAnimate : '')}>{item.text}</a>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </>
  )
}

export default Navigation
