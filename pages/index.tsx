import {MainLayout} from "../layouts/MainLayout";
import style from '../assets/scss/pages/test.module.scss'

export default function Index() {
    return (
        <MainLayout title={'Home page'}>
            <div className="container">
                <div className={style.index}>
                    <h1 className={style.index__title}>Hello next.js</h1>

                    <p className={style.index__test}>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                </div>
            </div>


        </MainLayout>
    )
}
