import { FunctionComponent } from 'react'
import PropTypes from 'prop-types'
import Image from 'next/image'
import s from './card.module.scss'

const Card = ({ name, description, image }) => {
  return (
    <div className={s.body}>
      <div className={s.image}>
        <div className={s.filter} />
        {/*  <img src={image} alt="" />*/}
        <Image width={350} height={385} layout="responsive" objectFit="contain" src={image} />
      </div>
      <div className={s.text}>
        <h4 className={s.title}>{name}</h4>
        <p className={s.year}>{description}</p>
      </div>
    </div>
  )
}
Card.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
}
export default Card
