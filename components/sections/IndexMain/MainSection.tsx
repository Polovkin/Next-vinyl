import PropTypes from 'prop-types'
import { Link, withTranslation } from '../../../i18n'
import s from './main.module.scss'
import { useHeader } from '../../Layout/Header/HeaderCondext'
import { useState } from 'react'

const MainSection = ({ t }) => {
  const [input, setInput] = useState()
  const menuState = useHeader()

  return (
    <>
      <section className={`section ${s.mainSection}`}>
        <Link href="/about">
          <button type="button">{t('about-link')}</button>
        </Link>
        <h1 className={`${menuState.visible ? 'eblo' : 'huilo'}`}>
          {menuState.visible ? 'eblo' : 'huilo'}
        </h1>
        <button onClick={menuState.hide}>hide</button>
        <button onClick={menuState.show}>show</button>
      </section>
    </>
  )
}

MainSection.propTypes = {
  t: PropTypes.func.isRequired,
}

export default withTranslation('common')(MainSection)
