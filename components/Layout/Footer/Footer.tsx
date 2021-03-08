import PropTypes from 'prop-types'
import { version } from 'next-i18next/package.json'

const Footer = ({ t }) => (
  <footer>
    <p>next-i18next v{version}</p>
  </footer>
)

export default Footer
