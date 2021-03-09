import { FunctionComponent } from 'react'
import Link from 'next/link'
import style from './LangSwitcher.module.scss'

const LangSwitcher: FunctionComponent = () => {
  return (
    <>
      <div className={style.wrap}>
        <Link href="/" locale={'ru'}>
          <button className={style.item}>RU</button>
        </Link>
        <Link href="/" locale={'en'}>
          <button className={style.item}>EN</button>
        </Link>
      </div>
    </>
  )
}
export default LangSwitcher
