import {MainLayout} from "../../layouts/MainLayout";
import index from './index.module.scss'

export default function Index() {
    return (
        <MainLayout title={'Home page'}>
            <div className="container">
                <div className={index.wrap}>
                    <h1 className={index.title}>Hello next.js</h1>

                    <p className={index.test}>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                </div>
            </div>


        </MainLayout>
    )
}
