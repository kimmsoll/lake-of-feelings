import React from 'react';
import styles from './button.module.css';

const Button = ({icon, text}) => {
    return(
        <>
        <button className={styles.button}>
        <i className={icon}></i>
        {text && 
        <span className={styles.text}>{text}</span>        
        }
        </button>
        </>
    )
}

export default Button;