import React from 'react';
import styles from './header.module.css';

const Header = () => {
    return(
        <header className={styles.header}>
            <img src="../img/small1.png" alt="logo" />
            <button>logout</button>
        </header>
    )
}

export default Header;