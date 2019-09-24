import React from 'react';
import NavigationItems from '../NavigationItems/NavigationItems';
import Logo from '../../Logo/Logo';
import styles from './SideDrawer.module.css';
import Backdrop from '../../UI/Backdrop/Backdrop';
import Auxillary from '../../../hoc/Auxillary';

const sideDrawer = (props) => {
    return (
        <Auxillary>
            <Backdrop show={true} modalClosed={props.hideSideDrawer} />
        <div className={styles.SideDrawer}>
            <div className={styles.Logo}>
                <Logo />
            </div>
        <NavigationItems />
            </div>
            </Auxillary>
        );
}

export default sideDrawer;