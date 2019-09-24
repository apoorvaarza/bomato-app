import React from 'react';
import BuildControl from './BuildControl/BuildControl';
import styles from './BuildControls.module.css';

const controls = [
    { label: 'Salad', type: 'salad' },
    { label: 'Bacon', type: 'bacon' },
    { label: 'Meat', type: 'meat' },
    { label: 'Cheese', type: 'cheese' }
];

const buildControls = (props) => (
    <div className={styles.BuildControls}>
        <p>Burger Price: <strong>{props.price}</strong></p>
        {controls.map(ctrl =>
            <BuildControl
                key={ctrl.label}
                label={ctrl.label}
                added={() => props.ingredientAdded(ctrl.type)}
                deducted={() => props.ingredientsDeducted(ctrl.type)}
                disabled={props.disabled[ctrl.type]}
            ></BuildControl>
        )}
        <button onClick={props.ordered} disabled={!props.purchasable} className={styles.OrderButton}>CHECKOUT</button>
    </div>
    );

export default buildControls;