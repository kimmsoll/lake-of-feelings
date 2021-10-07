import React from 'react';
import Button from '../../components/button/button';
import Header from '../../components/header/header';
import styles from './write.module.css';

const Write = ({googleAuth}) => {
    const onLogout = () => {
        googleAuth.logout();
    }
    return(
        <section className={styles.write}>
        <Header onLogout={onLogout}/>
        <div className={styles.main}>
            <h1 className={styles.title}>오늘 하루는 어땠나요?</h1>
            <ul className={styles.emotions}>
                <li>
                    <img className={styles.emotion} src="/img/small1.png" alt="img1" />
                </li>
                <li>
                    <img className={styles.emotion} src="/img/small2.png" alt="img2" />
                </li>
                <li>
                    <img className={styles.emotion} src="/img/small3.png" alt="img3" />
                </li>
                <li>
                    <img className={styles.emotion} src="/img/small4.png" alt="img4" />
                </li>
                <li>
                    <img className={styles.emotion} src="/img/small5.png" alt="img5" />
                </li>
            </ul>
            <textarea name="textInput"
            className={styles.input}
            rows="6" cols="25"
            ></textarea>
            <div className={styles.buttons}>
                <Button icon="fas fa-plus" text="Add"/>
                <Button icon="fas fa-arrow-right" text="Next"/>
            </div>
        </div>
        </section>
    )
}

export default Write;