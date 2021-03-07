import { withTranslation } from '../../../i18n'

import s from './contacts-elem.module.scss'

const ContactsElem = ({ t }) => {
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
          <button className={'button-primary'}>{t('contact-call')}</button>
        </div>
      </div>
    </>
  )
}

export default withTranslation('header')(ContactsElem)
