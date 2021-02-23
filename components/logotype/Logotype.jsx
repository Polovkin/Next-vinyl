import logotypeStyle from "./logotype.module.scss";

import Image from 'next/image'

const Logotype = () => (
        <>
            <div className={logotypeStyle.logotype}>
                <div className={logotypeStyle.img}>
                    <Image
                            objectFit={"contain"}
                            src="/img/1.png"
                            alt="Picture of the author"
                            width={200}
                            height={200}
                    />
                </div>

            </div>
        </>
)


export default Logotype
