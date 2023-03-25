import React from 'react'
import styles from "./Search.module.scss";

const Search = (props) => {
    return (
        <div>
            <div className={styles.inp}>
                <input onChange={(e) => props.setSearch(e.target.value)} value={props.search} placeholder="Введите название фильма" />
            </div>
        </div>
    )
}

export default Search
//Search.module.css
    // //header {

    // }

//import styles from ....

// className={styles.header}


