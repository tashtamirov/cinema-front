import React, { useState } from "react";
import styles from "./RegisterPage.module.scss";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { authSignUp } from "../../features/authSlice";

const RegisterPage = () => {
  const signupp = useSelector((state) => state.auth.signUp);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = () => {
    dispatch(authSignUp({ login: username, password }));
  };

  const onChangeName = (e) => {
    setUsername(e);
  };

  const onChangePassword = (e) => {
    setPassword(e);
  };

  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <h1>Регистрация</h1>
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
          Подтвердить
        </button>
        <Link to="/loginPage" className={styles.link}>
          Уже зарегистрированы ?
        </Link>
      </div>
    </form>
  );
};

export default RegisterPage;
