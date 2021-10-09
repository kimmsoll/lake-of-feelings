import React from 'react';
import { useHistory } from 'react-router-dom';
import styles from './detail.module.css';
import Button from '../../components/button/button';

const Detail = () => {
    const history = useHistory();
    const historyState = history?.location?.state;

    return(
        <>
        {historyState && 
        (<div className={styles.main}>
        <section className={styles.detail}>
            <div className={styles.btn_close}>
            <Button icon="fas fa-times"/>
            </div>
            <img className={styles.image} src={`/img/big${historyState.num.slice(-1)}.png`} alt="emotion"/>
            <div className={styles.textbox}>
            <span className={styles.text}>{historyState.text}</span>
            </div>
            <div className={styles.btn_remove}>
            <Button icon="fas fa-trash" text="Delete"/>
            </div>
        </section>
        </div>)
        }
        </>
    )
}

export default Detail;