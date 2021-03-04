import { withTranslation } from '../../i18n'
import LangSwitcher from '../langSwitcher/LangSwitcher'
import Logotype from '../logotype/Logotype'
import Navigation from '../navigation/Navigation'
import Image from 'next/image'
import s from './header.module.scss'
import { useHeader } from './HeaderCondext'

const Header = () => {
  const number = '+1234567890'
  const menuState = useHeader()

  return (
    <>
      <header className={s.header}>
        <div className={`${s.top_bar} container is-fluid`}>
          <Navigation />
          <div className={s.wrapper}>
            <div className={s.contacts}>
              <a className={s.phone} href={`tel:${number}`}>
                <Image width={20} height={20} src="/icons/phone.svg" alt="Phone" />
                {number}
              </a>
            </div>
            <LangSwitcher />
          </div>
        </div>
        <div className={`${s.bottom_bar} container is-fluid`}>
          <Logotype />
        </div>
        {/* <div className={`${s.menu} ${menuState ?? s.menu_visible}`}> test menu</div>*/}
      </header>
    </>
  )
}

export default withTranslation('header')(Header)
