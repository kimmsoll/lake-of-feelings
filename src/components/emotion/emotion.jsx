import React from 'react';
import { Link } from 'react-router-dom';
import styles from './emotion.module.css';

const Emotion = ({id, emotionNum, text}) => {
    return(
        <>
        {id && emotionNum && text &&
        <Link to={
            {pathname:`/${id}`,
            state: {
                url:`/img/big${emotionNum.slice(-1)}.png`,
                text:text}
            }}>
            <img className={styles.image} src={`/img/small${emotionNum.slice(-1)}.png`} alt="emotion"/>    
        </Link>
        }
        </>
    );
}

export default Emotion;