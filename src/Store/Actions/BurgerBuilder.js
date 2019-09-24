import * as actionTypes from './ActionTypes';
import axios from '../../Axios';

export const addIngredient = (ingName) => {
    return {
        type: actionTypes.ADD_INGREDIENT,
        ingredientName: ingName
    }
}

export const removeIngredient = (ingName) => {
    return {
        type: actionTypes.REMOVE_INGREDIENT,
        ingredientName: ingName
    };
}

export const ingredientAdded = (ingName) => {
    return dispatch => {
        dispatch(addIngredient(ingName));
    };
}

export const ingredientRemoved = (ingName) => {
    return dispatch => {
        dispatch(removeIngredient(ingName));
    }
}

export const setIngredients = ings => {
    return {
        type: actionTypes.SET_INGREDIENTS,
        ingredients: ings
    };
}

export const initIngredients = () => {
    return dispatch => {
        axios.get('https://react-bomato.firebaseio.com/ingredients.json')
            .then(response => {
                dispatch(setIngredients(response.data));
            }).catch(err => {
                dispatch(fetchIngredientsFailed());
            });
    }
}

export const fetchIngredientsFailed = ings => {
    return {
        type: actionTypes.FETCH_INGREDIENTS_FAILED,
        ingredients: ings
    };
}