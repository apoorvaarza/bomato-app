import React, { Component } from 'react';
import styles from './Toolbar.module.css';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';

class Toolbar extends Component {
    
    render() {
       
        return (
            <header className={styles.Toolbar}>
                <div className={styles.DrawerToggle} onClick={() => { this.props.click(true) }}>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
                <div className={styles.Logo}>
                    <Logo />
                </div>
                <nav className={styles.DesktopOnly}>
                    <NavigationItems></NavigationItems>
                </nav>
            </header>
        );
    }
}

export default Toolbar;