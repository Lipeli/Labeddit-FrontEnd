import React from 'react';
import styles from '../ui/SignUpPage.module.css';
import Link from 'next/link';
import { signup } from '../actions';

const SignupPage = () => {
    return (
        <div className={styles.container}>
            <header className={styles.header}>
                <img src="https://user-images.githubusercontent.com/52434685/120907235-44d0cb80-c636-11eb-94f4-37fc890a2ceb.gif" alt="Logo" className={styles.logo} />
                <button className={styles.loginButton}>
                    <Link href="/">
                    Entrar
                    </Link>
                </button>
            </header>
            <div style={{ marginTop: '40px' }}>
                <h1 className={styles.title}>
                    Boas Vindas ao Labeddit!   ;)
                </h1>
                <form className={styles.form} action={signup}>       
                    <input type="text" name='apelido' placeholder="Apelido" className={styles.input} />
                    <input type="email" name='email' placeholder="Email" className={styles.input} />
                    <input type="password" name='senha' placeholder="Senha" className={styles.input} />
                    <p style={{ padding: '10px' }}>
                        Ao continuar, você concorda com o nosso Contrato de usuário e nossa Política de Privacidade
                    </p>
                    <div className={styles.checkboxContainer}>
                        <input type="checkbox" id="terms" className={styles.checkbox} />
                        <label htmlFor="terms" className={styles.termsLabel}>
                            Gostaria de receber notícias sobre o Labeddit
                        </label>
                    </div>
                    <button type="submit" className={styles.signupButton}>
                        Cadastrar
                    </button>
                </form>
            </div>
        </div>
    );
};

export default SignupPage;
