import React from 'react'
import UserIcon from '../../assets/icons/UserIcon';
import styles from "./User.module.scss";

export const User = () => {
    return (
        <div className={styles.user}>
            <button>
                <UserIcon />
            </button>
        </div>     
    )
}

export default User