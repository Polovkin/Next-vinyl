import LangSwitcher from '../../reusable/LangSwitcher/LangSwitcher'
import Navigation from '../../reusable/Navigation/Navigation'
import s from './header.module.scss'
import ContactsElem from '../../reusable/ContactsElem/ContactsElem'
import Logotype from '../../reusable/Logotype/Logotype'

const Header = () => {
  const number = '0 (093) 941 2641'
  const email = 'info@papanyl.com.ua'

  return (
    <>
      <header className={s.header}>
        <div className={`${s.top_bar} container is-fluid`}>
          <Navigation />
          <div className={s.wrapper}>
            <div className={s.contacts}>
              <a className={s.phone} href={`tel:${number}`}>
                {number}
              </a>
              <a className={s.email} href={`mailto:${email}`}>
                {email}
              </a>
            </div>
            <LangSwitcher />
          </div>
        </div>
        <div className={`${s.bottom_bar} container is-fluid`}>
          <Logotype />
          {/*<ContactsElem />*/}
        </div>
      </header>
    </>
  )
}

export default Header
