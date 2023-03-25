import styles from './Main.module.scss'
import React from 'react'
import Sidebar from '../sidebar/Sidebar'
import CarouselBox from '../carousel/Carousel'

export const Main = () => {
    return (
        <div className={styles.main}>
            <Sidebar />
            <CarouselBox /> 
        </div>
    )
}

export default Main
