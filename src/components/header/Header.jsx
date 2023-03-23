import React from 'react'
import Search from '../search/Search'
import styles from "./Header.module.scss";
import CinemaIcon from '../../assets/icons/CinemaIcon';
import User from '../user/User';

export const Header = () => {
    return (
        <div className='app'>
            <div className={styles.header}>
                <div className={styles.logo}>
                    <div className={styles.logoImage}>
                        <CinemaIcon/>
                    </div>
                    <span className={styles.cinema}>cinema</span>
                    <span className={styles.park}>PARK</span>
                </div>
                <Search />
                <User />
            </div>
        </div>
    )
}

export default Header
