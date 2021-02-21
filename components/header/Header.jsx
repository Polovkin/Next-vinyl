import header from './header.module.scss'
import Link from "next/link";

export default function Header() {
    return (
           <header className={header.body}>
               <nav>
                   <Link href="/">
                       <a>Home</a>
                   </Link>
                   <Link href="/about">
                       <a>About</a>
                   </Link>
                   <Link href="/posts">
                       <a>Posts</a>
                   </Link>
               </nav>
           </header>
    )
}
