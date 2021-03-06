import PropTypes from 'prop-types'
import { withTranslation } from '../../../i18n'
import s from './form.module.scss'
import { useForm } from 'react-hook-form'

interface IFormInputs {
  firstName: string
  email: string
}

const Form = ({ t }) => {
  const { register, handleSubmit, watch, errors } = useForm<IFormInputs>()

  const isEmpty = (e) => {
    console.log(e.target.id)
  }
  const onSubmit = (data) => {
    console.log(data)
    console.log('eblo')
  }
  //console.log(watch('firstName')) // watch input value by passing the name of it

  return (
    <section className={`section`}>
      <div className="container">
        <form className={s.body} onSubmit={handleSubmit(onSubmit)}>
          <label htmlFor="name" className={s.label}>
            <span className={s.placeholder}>Name</span>
            <input
              id="name"
              onFocus={isEmpty}
              className={s.input}
              name="firstName"
              ref={register({ required: true, minLength: 2 })}
            />
            {errors.firstName?.type === 'required' && (
              <span className={s.error}>Your input is required</span>
            )}
            {errors.firstName?.type === 'minLength' && (
              <span className={s.error}>Your input exceed maxLength</span>
            )}
          </label>

          <div>
            <input name="email" ref={register({ required: true })} />
            {errors.email && <span>This field is required</span>}
          </div>

          <input type="submit" />
        </form>
      </div>
    </section>
  )
}

Form.propTypes = {
  t: PropTypes.func.isRequired,
}

export default withTranslation('common')(Form)
