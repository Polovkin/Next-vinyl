import Slider from 'react-slick'

import { useHeader } from '../../Layout/Header/HeaderCondext'
import { useState } from 'react'
import s from './main.module.scss'
import className from 'classnames'
import Image from 'next/image'
import { useTranslation } from 'next-i18next'

const MainSection = () => {
  const { t } = useTranslation('common')
  const [input, setInput] = useState()
  const menuState = useHeader()

  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 5000,
    fade: false,
  }

  return (
    <>
      <section className={className(s.section)}>
        <div className={className('container', s.content)}>
          <div className={'container main-slider'}>
            <Slider {...settings}>
              <div>
                <div className={s.slide}>
                  <div className={s.slide_text}>
                    <h1 className={s.heading}>{t('main-title')}</h1>
                    <p className={s.description}>{t('main-description')}</p>
                    <button className={'button-primary'}>{t('main-button')}</button>
                  </div>
                  <div className={s.slide_image}>
                    <Image
                      width={611}
                      height={417}
                      loading="eager"
                      layout="responsive"
                      objectFit="contain"
                      src="/img/main-slider.png"
                    />
                  </div>
                </div>
              </div>
              <div>
                <div className={s.slide}>
                  <div className={s.slide_text}>
                    <h1 className={s.heading}>{t('main-title')}</h1>
                    <p className={s.description}>{t('main-description')}</p>
                    <button className={'button-primary'}>{t('main-button')}</button>
                  </div>
                  <div className={s.slide_image}>
                    <Image
                      width={611}
                      height={417}
                      loading="eager"
                      layout="responsive"
                      objectFit="contain"
                      src="/img/main-slider.png"
                    />
                  </div>
                </div>
              </div>
              <div>
                <div className={s.slide}>
                  <div className={s.slide_text}>
                    <h1 className={s.heading}>{t('main-title')}</h1>
                    <p className={s.description}>{t('main-description')}</p>
                    <button className={'button-primary'}>{t('main-button')}</button>
                  </div>
                  <div className={s.slide_image}>
                    <Image
                      width={611}
                      height={417}
                      loading="eager"
                      layout="responsive"
                      objectFit="contain"
                      src="/img/main-slider.png"
                    />
                  </div>
                </div>
              </div>
            </Slider>
          </div>
        </div>
      </section>
    </>
  )
}

export default MainSection
