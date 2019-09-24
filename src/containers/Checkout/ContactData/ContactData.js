import React, { Component } from 'react';
import Button from '../../../components/UI/Button/Button';
import styles from './ContactData.module.css';
import axios from '../../../Axios';
import Loader from '../../../components/UI/Loader/Loader';
import { connect } from 'react-redux';
import Moment from 'react-moment';
import * as orderActionCreators from '../../../Store/Actions/Order'
import moment from 'moment';
import ErrorHandler from '../../../hoc/ErrorHandler';

class ContactData extends Component {
    state = {
        name: '',
        email: '',
        address: {
            postalCode: '',
            street: ''
        }
    }

    orderHandler = (event) => {
        const orderDetails = {
            ingredients: this.props.ingredients,
            totalPrice: this.props.price,
            time : moment()
        };
        event.preventDefault();
        this.props.onPostOrders(orderDetails, this.props.history);
        //this.props.history.push('/');
    }

    render() {
        let form = (
            <form>
            <input className={styles.Input} name="name" placeholder="Your Name" type="text" />
            <input className={styles.Input} name="email" placeholder="Your Email ID" type="email" />
            <input className={styles.Input} name="street" placeholder="Your street" type="text" />
            <input className={styles.Input} name="postalCode" placeholder="Your Postal Code" type="text" />
            <Button type="Green" click={this.orderHandler}>ORDER</Button>
            </form>
        );
        if (this.props.loading) {
            form = <Loader />
        }
        return (
            <div className={styles.ContactData}>
                {form}
            </div>
            );
    }
}

const mapStateToProps = (state) => {
    return {
        ingredients: state.burgerReducer.ingredients,
        price: state.burgerReducer.totalPrice,
        loading: state.ordersReducer.loading
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onPostOrders: (orderDetails, historyProp) => { dispatch(orderActionCreators.setOrders(orderDetails, historyProp))}
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ErrorHandler(ContactData, axios));