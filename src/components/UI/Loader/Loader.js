import React from 'react';
import styles from './Loader.module.css';

const loader = () => {
    console.log('loader component');
    return (
        <div className={styles.loader}>Loading...</div>
    );
}

export default loader;