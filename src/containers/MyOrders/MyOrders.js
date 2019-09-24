import React, { Component } from 'react';
import Order from '../../components/Order/Order';
import axios from '../../Axios';
import WithErrorHandler from '../../hoc/ErrorHandler';
import { connect } from 'react-redux';
import * as orderActionCreators from '../../Store/Actions/Order';

class MyOrders extends Component {
    state = {
        loading: true
    }
    componentDidMount() {
        this.props.onFetchOrders();
    }

    render() {
        const orderList = this.props.orders.map(item => {
            return <Order key={item.key} ingredients={item.ingredients} price={item.totalPrice} time={item.time} />
        });
        return (
            <div>
                {orderList}
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        orders: state.ordersReducer.orders
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onFetchOrders: () => { dispatch(orderActionCreators.fetchOrders()) }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(WithErrorHandler(MyOrders, axios));