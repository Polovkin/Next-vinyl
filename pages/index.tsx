import {MainLayout} from "../layouts/main/MainLayout";
import index from './styles/index.module.scss'

export default function Index() {
    return (
        <MainLayout title={'Home page'}>
            <div className="container">
                <div className={index.wrap}>
                    <h1 className={index.title}>Hello next.js</h1>

                    <p className={index.test}>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                    <p className={index.wrap}>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                </div>
            </div>


        </MainLayout>
    )
}
