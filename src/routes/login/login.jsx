import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import styles from './login.module.css';

const Login = ({googleAuth}) => {
    const history = useHistory();

    const onGoogleLogin = () => {
        googleAuth.login()
        .then(data => goToWrite(data.user.uid));
        
    };

    const goToWrite = (userId) => {
        history.push({
            pathname: '/write',
            state : {id: userId}
        });
    };

    useEffect(() => {
        googleAuth.onAuthChange(user => {
        user && goToWrite(user.uid);
        });
    });

    return(
        <>
        <h1 className={styles.title}>login</h1>
        <div className={styles.buttons}>
            <button
            className={styles.button}
            onClick={onGoogleLogin}>Google</button>
            <button
            className={styles.button}>Email</button>
        </div>
        </>
    );
}

export default Login;