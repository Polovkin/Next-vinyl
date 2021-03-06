import logotypeStyle from "./logotype.module.scss";

import Image from 'next/image'
import {Link} from "../../../i18n";

const Logotype = () => (
        <>
            <div className={logotypeStyle.logotype}>
                <Link href='/'>
                    <a className={logotypeStyle.link}>
                        <Image
                                height={43}
                                width={157}
                                src="/icons/logotype-light.svg"
                        />
                    </a>
                </Link>
            </div>
        </>
)


export default Logotype
