import PropTypes from 'prop-types'
import { withTranslation } from '../../../i18n'
import { useHeader } from '../../Layout/Header/HeaderCondext'
import { useState } from 'react'
import s from './main.module.scss'
import className from 'classnames'
import Image from 'next/image'

const MainSection = ({ t }) => {
  const [input, setInput] = useState()
  const menuState = useHeader()

  return (
    <>
      <section className={className('section', s.section)}>
        <div className={className('container', s.content)}>
          <div className={s.slider}>
            <div className={s.slider_text}>
              <h1 className={s.heading}>{t('main-title')}</h1>
              <p className={s.description}>{t('main-description')}</p>
              <button className={'button-primary'}>{t('main-button')}</button>
            </div>
            <div className={s.slider_image}>
              {/*   <Image objectFit="contain" layout="fill" src="/img/main-slider.png" />*/}
              <Image
                width={611}
                height={417}
                layout="responsive"
                objectFit="contain"
                src="/img/main-slider.png"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

MainSection.propTypes = {
  t: PropTypes.func.isRequired,
}

export default withTranslation('common')(MainSection)
