import React from "react";
import styles from "./OnePage.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { fetchMovies } from "../../features/moviesSlice";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import Header from "../../components/header/Header";

const OnePage = () => {
  const { onePageId } = useParams();
  const movies = useSelector((state) =>
    state.movies.movies.find((item) => item._id === onePageId)
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMovies());
  }, []);

  if (!movies) {
    return movies;
  }

  return (
    <>
      <Header />
      <div className={styles.items}>
        <div className={styles.cartBlock}>
          <img src={`http://localhost:4000/${movies.image} `} />
          <div className={styles.infoBlock}>
            <div className={styles.nameYearDiv}>
              <div className={styles.name}>{movies.name}</div>
              <div className={styles.year}>{movies.year}</div>
            </div>
            <div className={styles.genre}>{movies.genre}</div>
            <div className={styles.director}>{movies.director}</div>
            <button className={styles.btnDiv}>Забронировать</button>
          </div>
        </div>
        <div className={styles.description}>
          <div className={styles.description}>{movies.description}</div>
        </div>
      </div>
    </>
  );
};

export default OnePage;
