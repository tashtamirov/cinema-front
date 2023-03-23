import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchMovies } from "../../features/moviesSlice";
import styles from "./Home.module.scss";

const Home = () => {
  const movies = useSelector((state) => state.movies.movies);
  console.log(movies)

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMovies());
  }, []);

  return (
    <div className={styles.items}>  
      {movies.map((carts) => {
        return (
          <div className={styles.poster}>
            <img width={150} height={200} src={`http://localhost:4000/${carts.image} `} />  
            
          </div>
        );
      })}
    </div>
  );
};

export default Home;
