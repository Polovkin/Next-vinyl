import s from './alert.module.scss'
import { useTranslation } from 'next-i18next'

const Alert = ({ text }) => {
  const { t } = useTranslation('common')

  let message
  switch (text) {
    case 'success':
      message = t('alert-success')
      break
    case 'not-success':
      message = t('alert-not-success')
      break
    default:
      message = 'alert error'
      break
  }
  return (
    <div className={s.body}>
      <span>{message}</span>
    </div>
  )
}
export default Alert
