import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import styles from './detail.module.css';
import Button from '../../components/button/button';

const Detail = ({emotionRepo}) => {
    const history = useHistory();
    const historyState = history?.location?.state;

    const onRemove = () => {
        emotionRepo.removeEmotion(historyState.userId, historyState.id);
        history.push("/home");
    }
    
    return(
        <>
        {historyState && 
        (<div className={styles.main}>
        <section className={styles.detail}>
            <div className={styles.btn_close}>
            <Link to="/home">               
                <Button icon="fas fa-times"/>
            </Link>
            </div>
            <img className={styles.image} src={`/img/big${historyState.num.slice(-1)}.png`} alt="emotion"/>
            <div className={styles.textbox}>
            <span className={styles.text}>{historyState.text}</span>
            </div>
            <div className={styles.btn_remove} onClick={onRemove}>
                <Button icon="fas fa-trash" text="Delete"/>
            </div>
        </section>
        </div>)
        }
        </>
    )
}

export default Detail;