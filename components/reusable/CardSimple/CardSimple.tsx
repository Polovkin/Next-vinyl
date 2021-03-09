import { FunctionComponent } from 'react'
import PropTypes from 'prop-types'
import Image from 'next/image'
import s from './card.module.scss'

type Props = {
  title: string
  year: string
  image: string
}

const CardSimple: FunctionComponent<Props> = ({ title, year, image }) => {
  return (
    <div className={s.body}>
      <div className={s.image}>
        <div className={s.filter} />
        <Image
          width={350}
          height={385}
          layout="responsive"
          objectFit="contain"
          src={`/img/${image}`}
        />
      </div>
      <div className={s.text}>
        <h4 className={s.title}>{title}</h4>
        <p className={s.year}>{year}</p>
      </div>
    </div>
  )
}
CardSimple.propTypes = {
  title: PropTypes.string.isRequired,
  year: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
}
export default CardSimple
