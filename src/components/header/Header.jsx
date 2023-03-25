import React from "react";
import Search from "../search/Search";
import styles from "./Header.module.scss";
import CinemaIcon from "../../assets/icons/CinemaIcon";
import User from "../user/User";

<<<<<<< HEAD
export const Header = (props) => {
  return (
    <div className="app">
      <div className={styles.header}>
        <div className={styles.logo}>
          <div className={styles.logoImage}>
            <CinemaIcon />
          </div>
          <span className={styles.cinema}>cinema</span>
          <span className={styles.park}>PARK</span>
=======
export const Header = () => {
    return (
        <div className={styles.header}>
            <div className={styles.logo}>
                <div className={styles.icon}>
                    <CinemaIcon />
                </div>
                <span className={styles.cinema}>cinema</span>
                <span className={styles.park}>PARK</span>
            </div>
            <div className={styles.input}>
                <input placeholder='search any movies...' />
            </div>
            <User />
>>>>>>> main
        </div>
        <Search search={props.serch} setSearch={props.setSerch} />   
        <User />
      </div>
    </div>
  );
};

export default Header;
