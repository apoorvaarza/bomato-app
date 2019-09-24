import * as actionType from '../Actions/ActionTypes';

const initialState = {
    orders: [],
    error: false,
    loading: false
}

const ordersReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionType.ORDER_BURGER_START:
            return {
                ...state,
                loading: true
            }
        case actionType.FETCH_ORDERS:
            return {
                ...state,
                orders: action.orders
            }
        case actionType.ORDER_BURGER_SUCCESS:
            return {
                ...state,
                loading: false,
                error: false
            }
        case actionType.ORDER_BURGER_FAIL:
            return {
                ...state,
                error: true
            }
        default:
            return state;
    }

}


export default ordersReducer;