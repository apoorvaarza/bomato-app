import * as actionTypes from './ActionTypes';
import axios from '../../Axios';

export const setOrderFail = error => {
    return {
        type: actionTypes.ORDER_BURGER_FAIL,
        error: error
    }
}

export const dispatchSetOrders = (historyProp) => {
    return {
        type: actionTypes.ORDER_BURGER_SUCCESS,
        historyProp: historyProp
    }
}

export const purchaseBurgerStart = () => {
    return {
        type: actionTypes.ORDER_BURGER_START
    }
}

export const setOrders = (orderDetails, historyProp) => {
    return dispatch => {
        dispatch(purchaseBurgerStart());
        axios.post('/orders.json', orderDetails)
            .then(resp => {
                historyProp.push('/');
                dispatch(dispatchSetOrders(historyProp));
            })
            .catch(err => {
                dispatch(setOrderFail(err));
            });
    }
}



export const dispatchFetchedOrders = (orders) => {
    return {
        type: actionTypes.FETCH_ORDERS,
        orders: orders
    }
}

export const fetchOrders = () => {
    return dispatch => {
        const ordersArray = [];
        axios.get('/orders.json')
            .then(res => {
                for (let i in res.data) {
                    ordersArray.push({
                        key: i,
                        ...res.data[i]
                    });
                }
                dispatch(dispatchFetchedOrders(ordersArray))
                //this.setState({ orders: ordersArray, loading: false });
            })
            .catch(err => {
                //this.setState({ loading: false });
            });
    }
}