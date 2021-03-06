import { withTranslation } from '../../../i18n'

import s from './contacts-elem.module.scss'

const ContactsElem = ({ t }) => {
  return (
    <>
      <div className={s.wrap}>
        <div className={s.schedule}>
          <p className={s.graphic}>График работы</p>
          <p className={s.time}>Пд-Пт 10:00 – 21:00</p>
        </div>
        <div className={s.buttons}>
          <button className={s.telegram} />
          <button className={s.viber} />
          <button className={s.call}>{t('contact-call')}</button>
        </div>
      </div>
    </>
  )
}

export default withTranslation('header')(ContactsElem)
