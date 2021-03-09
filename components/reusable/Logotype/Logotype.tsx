import { FunctionComponent } from 'react'
import Image from 'next/image'
import Link from 'next/link'

import logotypeStyle from './logotype.module.scss'

const Logotype: FunctionComponent = () => (
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
