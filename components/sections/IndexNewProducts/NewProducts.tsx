import { FunctionComponent, useEffect } from 'react'
import { connect } from 'react-redux'

import SectionTitle from '../../reusable/SectionTitle/SectionTitle'
import { useTranslation } from 'next-i18next'
import classNames from 'classnames'
import Card from '../../reusable/CardSimple/Card'
import s from './new-products.module.scss'

const NewProducts = ({ products }) => {
  const { t } = useTranslation('common')

  return (
    <section className={classNames('section')}>
      <div className={classNames('container', s.section)}>
        <div className={s.title}>
          <SectionTitle heading={t('new-title')} description={t('new-description')} />
        </div>
        <div className={s.control}>
          <button></button>
          <button></button>
        </div>

        <div className={s.slider}>
          {products.length ? (
            products.map((product, index) => (
              <Card
                name={product.name}
                description={product.description}
                image={product.image}
                key={index}
              />
            ))
          ) : (
            <p>Нет товаров</p>
          )}
        </div>
      </div>
    </section>
  )
}

export default connect(null, null)(NewProducts)
