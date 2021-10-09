import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import styles from './login.module.css';

const Login = ({googleAuth}) => {
    const history = useHistory();

    const onGoogleLogin = () => {
        googleAuth.login()
        .then(data => goToHome(data.user.uid));
        
    };

    const goToHome = (userId) => {
        history.push({
            pathname: '/home',
            state : {id: userId}
        });
    };

    useEffect(() => {
        googleAuth.onAuthChange(user => {
        user && goToHome(user.uid);
        });
    });

    return(
        <section className={styles.login}>
        <h1 className={styles.title}>Login</h1>
        <div className={styles.buttons}>
            <button
            className={`${styles.button} ${styles.google}`}
            onClick={onGoogleLogin}>Google</button>
            <button
            className={styles.button}>Email</button>
        </div>
        </section>
    );
}

export default Login;