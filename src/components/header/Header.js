import React from 'react'
import styles from './Header.module.css'
import SearchInput from '../searchInput/SearchInput';

const Header = () => {
  return (
    <div className={styles.tagHeader}>
        <a className={styles.logo} href="/">Boutique da Daiani</a>
        <SearchInput/>
    </div>
  )
}

export default Header