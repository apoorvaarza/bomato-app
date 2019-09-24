import React, { Component } from 'react';
import Auxillary from '../../../hoc/Auxillary';
import Button from '../../UI/Button/Button';

class OrderSummary extends Component {

    componentWillUpdate() {
        console.log('order summary rendered');
    }

    render() {
        const ingredientSummary = this.props.ingredients;
        //const ingredientArray = [];
        const ingredientArray = Object.keys(this.props.ingredients).map((item) => {
            return { ingredient: item, quantity: this.props.ingredients[item], price: this.props.priceList[item] }
        });
        let modalBodyText = '';
        if (ingredientArray.length) {
            modalBodyText = ingredientArray.map((obj) => (<li key={obj.ingredient}>{obj.ingredient}  no: {obj.quantity}  price: {obj.price * obj.quantity}</li>));
        }
        return (
            <Auxillary>
                <h3>Your order contains the following items</h3>
                <ul>
                    {modalBodyText}
                </ul>
                <div>Total Price: {this.props.price}</div>
                <Button type="Red" click={this.props.modalClosed}>Cancel</Button>
                <Button type="Green" click={this.props.continueShopping}>Continue</Button>
            </Auxillary>
        );
    }
    
}

export default OrderSummary;