import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { fetchMovies } from "../../features/moviesSlice";
import styles from "./Home.module.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Header from "../../components/header/Header";

const Home = () => {
  const [serch, setSerch] = useState("");
  const movies = useSelector((state) => state.movies.movies).filter((carts) => {
    return carts.name.toLowerCase().includes(serch.toLowerCase());           
  });

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMovies());
  }, []);

  return (
    <>
      <Header serch={serch} setSerch={setSerch} />  
      <Sidebar />
      <div className={styles.items}>
        {movies.map((carts) => {
          return (
            <div>
              <Link to={`/OnePage/${carts._id}`}>
                <img src={`http://localhost:4000/${carts.image} `} />  
                <div className={styles.name}>{carts.name}</div>
              </Link>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Home;
