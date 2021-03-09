import { FunctionComponent } from 'react'
import SectionTitle from '../../reusable/SectionTitle/SectionTitle'
import { useTranslation } from 'next-i18next'
import classNames from 'classnames'
import CardSimple from '../../reusable/CardSimple/CardSimple'
import s from './new-products.module.scss'

const NewProducts: FunctionComponent = () => {
  const { t } = useTranslation('common')
  const mok = [
    {
      title: 'Frank Sinatra ‎– Ultimate Sinatra',
      year: '2015',
      image: 'item1.jpg',
    },
    {
      title: 'Bicep - Isles [2LP]',
      year: '2021',
      image: 'item2.jpg',
    },
    {
      title: 'Thom Yorke - Suspiria (Music For The Luca Guadagnino',
      year: '2018',
      image: 'item3.jpg',
    },
  ]
  return (
    <section className={classNames('section')}>
      <div className={classNames('container', s.section)}>
        <div className={s.title}>
          <SectionTitle heading={t('new-title')} description={t('new-description')} />
        </div>
        <div className={s.control}>
          <button>1</button>
          <button>2</button>
        </div>
        <div className={s.slider}>
          {mok.map((card, index) => (
            <CardSimple title={card.title} year={card.year} image={card.image} key={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default NewProducts
