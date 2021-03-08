import className from 'classnames'

import s from './contacts-elem.module.scss'
import { useTranslation } from 'next-i18next'

const ContactsElem = () => {
  const { t } = useTranslation('header')
  return (
    <>
      <div className={s.wrap}>
        <div className={s.schedule}>
          <p className={s.graphic}>{t('contact-graphic')}</p>
          <p className={s.time}>{t('contact-time')}</p>
        </div>
        <div className={s.buttons}>
          <button className={s.telegram} />
          <button className={s.viber} />
          <button className={className('button-primary', s.call)}>{t('contact-call')}</button>
        </div>
      </div>
    </>
  )
}

export default ContactsElem
