import React, { useContext } from "react";

import styles from './Header.module.css';
import { TemaContexto } from "../../App";

const Header = () => {
    const {dark, setDark} = useContext(TemaContexto);

    return(
        <div className={`${styles.navbar} ${dark ? 'dark' : 'light'}`}>
            <span className={styles.link}>Home</span>
            <span className={styles.link}>Produtos</span>
            <span className={styles.link} onClick={() => setDark(!dark)}>Mudar Tema</span>
            <span className={styles.link}>{dark ? 'Dark' : 'Light'}</span>
        </div>
    )
}

export default Header