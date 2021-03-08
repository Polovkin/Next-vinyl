import PropTypes from 'prop-types'

const Error = ({ statusCode }) => <p>{statusCode}</p>

Error.getInitialProps = async ({ res, err }) => {
  let statusCode = null
  if (res) {
    ;({ statusCode } = res)
  } else if (err) {
    ;({ statusCode } = err)
  }
  return {
    namespacesRequired: ['common'],
    statusCode,
  }
}

Error.defaultProps = {
  statusCode: null,
}

Error.propTypes = {
  statusCode: PropTypes.number,
}

//export default withTranslation('common')(Error)
export default Error
