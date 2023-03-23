import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { fetchMovies } from "../../features/moviesSlice";
import styles from "./Home.module.scss";   

const Home = () => {

 
  const movies = useSelector((state) => state.movies.movies)  

  const dispatch = useDispatch();    

  useEffect(() => {
    dispatch(fetchMovies());
  }, []);

  return (
    <div className={styles.items}>  
      {movies.map((carts) => {
        return (
          <div>
         <Link  to={`/OnePage/${carts._id}`}><img src={`http://localhost:4000/${carts.image} `} /></Link>  

            
          </div>
        );
      })}
    </div>
  );
};

export default Home;
