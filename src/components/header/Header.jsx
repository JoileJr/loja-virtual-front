import React, { useContext } from "react";

import styles from './Header.module.css';
import { TemaContexto } from "../../App";
import { useNavigate } from "react-router-dom";

const Header = () => {
    const {dark, setDark} = useContext(TemaContexto);
    const navigate = useNavigate();

    const navegar = (pagina) =>{
        navigate(pagina)
    }

    return(
        <div className={`${styles.navbar} ${dark ? 'dark' : 'light'}`}>
            <span className={styles.link} onClick={() => navegar("/")} >Home</span>
            <span className={styles.link} onClick={() => navegar("/produtos")} >Produtos</span>
            <span className={styles.link} onClick={() => setDark(!dark)} >Mudar Tema</span>
            <span className={styles.link}>{dark ? 'Dark' : 'Light'}</span>
        </div>
    )
}

export default Header