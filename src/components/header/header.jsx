import React from 'react';
import styles from './header.module.css';

const Header = ({onLogout}) => {
    return(
        <header className={styles.header}>
            <img className={styles.logo} src="/img/small1.png" alt="logo"/>
            {onLogout && 
                <button className={styles.logout} onClick={onLogout}>Logout</button>
            }
        </header>
    )
}

export default Header;