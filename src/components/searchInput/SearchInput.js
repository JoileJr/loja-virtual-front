import React from 'react'
import styles from './SearchInput.module.css'
import { RiSearchLine } from 'react-icons/ri';

const SearchInput = () => {
  return (
    <div className={styles.div}>
        <input placeholder='Procurando por algo especifico?' className={styles.input}/>
        <div className={styles.icon}>
            <RiSearchLine />
        </div>
    </div>
  )
}

export default SearchInput
