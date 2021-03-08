import PropTypes from 'prop-types'

import s from './form.module.scss'
import { useForm } from 'react-hook-form'
import { useState } from 'react'
import { useTranslation } from 'next-i18next'

interface IFormInputs {
  name: string
  email: string
}

const useInput = (initialValue) => {
  const [value, setValue] = useState(initialValue)

  const onChange = (event) => {
    const input = event.target
    const error = input.parentElement.querySelector('span')

    setValue(input.value)
    input.value
      ? error.classList.add(s.placeholder_animate)
      : error.classList.remove(s.placeholder_animate)
  }

  return {
    bind: { value, onChange },
    value,
  }
}
const Form = () => {
  const { t } = useTranslation('common')
  const { register, handleSubmit, watch, errors } = useForm<IFormInputs>()
  const name = useInput('')

  const onSubmit = (data) => {
    /*console.log(errors)
    console.log(data)
    console.log('eblo')*/
  }
  //console.log(watch('name')) // watch input value by passing the name of it
  const InputError = ({ error }) => {
    console.log(error.ref.name)
    switch (error.type) {
      case 'required':
        return <span className={s.error}>Your input is required</span>
      case 'minLength':
        return <span className={s.error}>Your input exceed maxLength</span>
      default:
        return <span />
    }
  }
  return (
    <section className={`section`}>
      <div className="container">
        <form className={s.body} onSubmit={handleSubmit(onSubmit)}>
          <label htmlFor="name" className={s.label}>
            <span className={s.placeholder}>{t('placeholder-name')}</span>
            <input
              id="name"
              autoComplete="off"
              className={s.input}
              name="name"
              ref={register({ required: true, minLength: 2 })}
              {...name.bind}
            />
            {errors.name && <InputError error={errors.name} />}
          </label>
          <button type="submit">{t('submit')}</button>
        </form>
      </div>
    </section>
  )
}

export default Form
