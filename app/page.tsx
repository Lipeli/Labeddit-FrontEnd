import React from 'react';
import styles from './HomePage.module.css'; // Import CSS module for styling

const HomePage = () => {
  return (
    <div className={styles.container}>
      <img src="https://user-images.githubusercontent.com/52434685/120907235-44d0cb80-c636-11eb-94f4-37fc890a2ceb.gif" alt="Logo" className={styles.logo} />
      <h1 className={styles.welcome}>Labeddit</h1>
      <p className={styles.message}>O projeto de rede social da Labenu</p>
      <form className={styles.form}>
        <input type="email" placeholder="Email" className={styles.input} />
        <input type="password" placeholder="Password" className={styles.input} />
        <div className={styles.buttons}>
          <button type="submit" className={styles.button}>Continuar</button>
          <button type="button" className={styles.button}>Criar uma conta</button>
        </div>
      </form>
    </div>
  );
};

export default HomePage;
