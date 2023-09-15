import React, { useContext } from "react";

import styles from './Footer.module.css';
import { TemaContexto } from "../../App";

const Footer = () => {
    const { dark, setDark } = useContext(TemaContexto);

    return (
        <div className={`${styles.footer} ${dark ? 'dark' : 'light'}`}>
            <p className={styles.p}>&copy; 2023 Crud React, Spring e websocket</p>
        </div>
    )
}

export default Footer