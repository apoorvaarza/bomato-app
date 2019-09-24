import React from 'react';
import styles from './CheckoutSummary.module.css';
import Burger from '../../Burger/Burger';
import Button from '../../UI/Button/Button';

const checkoutSummary = (props) => {
    return (
        <div className={styles.checkoutSummary}>
            <h1>We hope it tastes good!</h1>
            <div className={styles.burgerContainer}>
                <Burger ingredients={props.ingredients} />
            </div>
            <Button
                type="Red"
                click={props.checkoutCancelled}>
                CANCEL
            </Button>
            <Button
                type="Green"
                click={props.checkoutContinued}>
                CONTINUE
             </Button>
        </div>
        );
}

export default checkoutSummary;