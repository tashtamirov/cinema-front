import React from 'react'
import styles from "./Sidebar.module.scss";

const Sidebar = () => {
    return (
        <div className={styles.sidebar}>
            <div>
                <h5>Категории</h5>
                <nav>
                    <ul className={styles.list}>
                        <li>Премьеры</li>
                        <li>Фантастика</li>
                        <li>Триллеры</li>
                        <li>Приключения</li>
                        <li>Детективы</li>
                    </ul>
                </nav>
            </div>
        </div>
    )
}

export default Sidebar  
