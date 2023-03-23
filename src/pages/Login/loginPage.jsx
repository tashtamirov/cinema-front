import React, { useState } from "react";
import styles from "./loginPage.module.scss";
import { Link } from "react-router-dom";
import { authSignIn } from "../../features/authSlice";
import { useDispatch, useSelector } from "react-redux";

const LoginPage = () => {
  const sign = useSelector((state) => state.auth.signIn);       
  const dispatch = useDispatch();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(authSignIn({ username, password }));
    setUsername("");
    setPassword("");
  };

  const onChangeName = (e) => {
    setUsername(e);
  };

  const onChangePassword = (e) => {
    setPassword(e);
  };

  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <h1>Авторизация</h1>
      <label>
        Username:
        <input
          value={username}
          type="text"
          onChange={(e) => onChangeName(e.target.value)}
          placeholder="Username"
        />
      </label>
      <label>
        Password:
        <input
          value={password}
          type="password"
          onChange={(e) => onChangePassword(e.target.value)}
          placeholder="Password"
        />
      </label>

      <div className={styles.divBtns}>
        <button type="submit" className={styles.login}>
          Войти
        </button>
        {
          <Link className={styles.link} to="/registerPage">           
            Нет аккаунта ?  
          </Link>
        }
      </div>
    </form>
  );
};

export default LoginPage;
