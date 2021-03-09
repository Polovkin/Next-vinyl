import { useTranslation } from 'next-i18next'
import { useForm } from 'react-hook-form'
import classNames from 'classnames'
import s from './form.module.scss'
import Alert from '../Alert/Alert'
import { sendForm } from '../../../store/actions'
import { processEnv } from '@next/env'

interface IFormInputs {
  name: string
  email: string
  phone: string
  message: string
}

const Form = () => {
  const { t } = useTranslation('form')
  const { register, handleSubmit, errors, watch } = useForm<IFormInputs>()
  const err = {
    req: t('error-required'),
    min: t('error-minLength'),
    max: t('error-maxLength'),
    mail: t('error-email'),
  }
  const onSubmit = async (data) => {
    console.log(data)
    const form_data = new FormData()
    for (const key in data) {
      form_data.append(key, data[key])
    }

    const response = await fetch('http://localhost:3001/form', {
      method: 'POST',
      body: form_data,
    })
    const json = await response.json()
    console.log(json)
  }

  const InputErrorText = ({ error }) => {
    console.log(error)
    switch (error.type) {
      case 'required':
        return <small>Your input is required</small>
      case 'minLength':
        return <small>Your input exceed minLength</small>
      case 'maxLength':
        return <small>Your input exceed maxLength</small>
      case 'pattern':
        return <small>Invalid email</small>
      default:
        return <span />
    }
  }

  return (
    <section className={`section`}>
      <Alert text={'alert 2'} />
      <div className="container">
        <form noValidate className={s.body} onSubmit={handleSubmit(onSubmit)}>
          <label htmlFor="name" className={s.label}>
            <span className={classNames(s.placeholder, watch('name') ? s.placeholder_animate : '')}>
              {t('placeholder-name')}
            </span>

            <input
              id="name"
              autoComplete="off"
              className={s.input}
              name="name"
              type="text"
              ref={register({
                required: err.req,
                minLength: { value: 2, message: err.min + ' 2' },
                maxLength: { value: 20, message: err.max + ' 20' },
              })}
            />
            <span className={classNames(s.error, errors.name ? s.error_animate : '')}>
              {errors.name && errors.name.message}
            </span>
          </label>

          <label htmlFor="email" className={s.label}>
            <span
              className={classNames(s.placeholder, watch('email') ? s.placeholder_animate : '')}
            >
              {t('placeholder-email')}
            </span>

            <input
              id="email"
              type="email"
              className={s.input}
              name="email"
              ref={register({
                required: err.req,
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: err.mail,
                },
              })}
            />
            <span className={classNames(s.error, errors.email ? s.error_animate : '')}>
              {errors.email && errors.email.message}
            </span>
          </label>

          <label htmlFor="phone" className={s.label}>
            <span
              className={classNames(s.placeholder, watch('phone') ? s.placeholder_animate : '')}
            >
              {t('placeholder-phone')}
            </span>

            <input
              id="phone"
              type="text"
              className={s.input}
              name="phone"
              ref={register({
                required: err.req,
                minLength: { value: 10, message: err.min + ' 10' },
                maxLength: { value: 13, message: err.max + ' 13' },
              })}
            />
            <span className={classNames(s.error, errors.phone ? s.error_animate : '')}>
              {errors.phone && errors.phone.message}
            </span>
          </label>
          <label htmlFor="message" className={s.label}>
            <span
              className={classNames(s.placeholder, watch('message') ? s.placeholder_animate : '')}
            >
              {t('placeholder-message')}
            </span>

            <textarea
              id="message"
              className={s.input}
              name="message"
              ref={register({
                required: err.req,
                minLength: { value: 10, message: err.min + ' 10' },
                maxLength: { value: 13, message: err.max + ' 13' },
              })}
            />
            <span className={classNames(s.error, errors.message ? s.error_animate : '')}>
              {errors.message && errors.message.message}
            </span>
          </label>
          <button type="submit">{t('submit')}</button>
        </form>
      </div>
    </section>
  )
}

export default Form
