import React from 'react';
import Header from '../../components/header/header';
import styles from './lake.module.css';

const Lake = ({googleAuth, emotions}) => {
    console.log(emotions);
    const onLogout = () => {
        googleAuth.logout();
    }
    return(
        <div className={styles.lake}>
            <Header onLogout={onLogout}/>
        <section className={styles.main}>
            <div className={styles.content}>
            <div className={styles.emotion1}></div>
            <div className={styles.emotion2}></div>
            <div className={styles.emotion3}></div>
            <div className={styles.emotion4}></div>
            <div className={styles.emotion5}></div>
            </div>
        </section>
        </div>
    );
}

export default Lake;