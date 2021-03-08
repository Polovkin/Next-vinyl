import logotypeStyle from './logotype.module.scss'

import Image from 'next/image'
import Link from 'next/link'

const Logotype = () => (
  <>
    <div className={logotypeStyle.logotype}>
      <Link href="/">
        <a className={logotypeStyle.link}>
          <Image loading="eager" layout="fill" src="/icons/logotype-light.svg" />
        </a>
      </Link>
    </div>
  </>
)

export default Logotype
