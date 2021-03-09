import { FunctionComponent } from 'react'
import PropTypes from 'prop-types'
import s from './section-title.module.scss'

type Props = {
  heading: string
  description: string
}

const SectionTitle: FunctionComponent<Props> = ({ heading, description }) => {
  return (
    <div className={s.wrap}>
      <h2 className={s.title}>{heading}</h2>
      <p className={s.description}>{description}</p>
    </div>
  )
}
SectionTitle.propTypes = {
  heading: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
}
export default SectionTitle
