import PropTypes from 'prop-types'
import { withTranslation } from '../../../i18n'
import { useHeader } from '../../Layout/Header/HeaderCondext'
import { useState } from 'react'
import s from './main.module.scss'

const MainSection = ({ t }) => {
  const [input, setInput] = useState()
  const menuState = useHeader()

  return (
    <>
      <section className={`section ${s.mainSection}`}>
        <div className={s.content}>
          <h1>Deploy done</h1>
        </div>
      </section>
    </>
  )
}

MainSection.propTypes = {
  t: PropTypes.func.isRequired,
}

export default withTranslation('common')(MainSection)
