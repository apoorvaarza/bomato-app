import React from 'react';
import styles from './Order.module.css';
import moment from 'moment';

const order = (props) => {
    let orderedIngredients = null;
    if (props.ingredients) {
        orderedIngredients = Object.keys(props.ingredients).map(orderedIngredient => {

            return <span className={styles.ingredients}>{orderedIngredient}({props.ingredients[orderedIngredient]})</span>            
        });
        console.log(orderedIngredients);
    }
    return (
        <div className={styles.Order}>
            Ingredients: {orderedIngredients}
            <p>Amount: <strong> ${props.price}</strong></p>
            {props.time && <div>{moment(props.time).format('LLL')}</div>}
        </div>
    );
}

export default order;