import React from 'react';
import { useHistory } from 'react-router-dom';
import { Button } from 'selenium-webdriver';
import styles from './detail.module.css';

const Detail = () => {
    const history = useHistory();
    const historyState = history?.location?.state;
    return(
        <>
        {historyState && 
        (<div className={styles.main}>
        <section className={styles.detail}>
            <Button icon="fas fa-times" text="delete"/>
            <img className={styles.image} src={historyState.url} alt="emotion"/>
            <h1 className={styles.text}>{historyState.text}</h1>
        </section>
        </div>)
        }
        </>
    );
}

export default Detail;