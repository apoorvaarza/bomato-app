import React, { Component } from 'react';
import Auxillary from '../../hoc/Auxillary'
import Burger from '../../components/Burger/Burger'
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';
import Loader from '../../components/UI/Loader/Loader';
import ErrorHandler from '../../hoc/ErrorHandler';
import * as buregrBuilderActionCreators from '../../Store/Actions/index';
import { connect } from 'react-redux';
import axios from '../../Axios';

const INGREDIENT_PRICE = {
    salad: 1,
    cheese: 2,
    bacon: 3,
    meat: 4
};

class BurgerBuilder extends Component {
    state = {
        orderNowClicked: false
    }

    componentDidMount() {
        this.props.onIngredientInit();
    }

    updatePurchaseState = () => {
        const ingredientCountArray = Object.values(this.props.ings);
        let totalIngredientsAdded = 0;
        for (let i in ingredientCountArray) {
            totalIngredientsAdded = totalIngredientsAdded + Number(ingredientCountArray[i]);
        }
        const purchaseState = totalIngredientsAdded > 0;
        return purchaseState;
    }

    orderNowClickHandler = () => {
        this.setState({ orderNowClicked: true });
    }

    modalClosedClosedHandler = () => {
        this.setState({ orderNowClicked: false });
    }

    continueShoppingHandler = () => {
        this.props.history.push('/checkout');
        //this.props.history.push({
        //    pathname: '/checkout',
        //    search: '?' + searchQuery
        //});
    }

    render() {
        const disabledInfo = {
            ...this.props.ings
        };
        for (let key in disabledInfo) {
            disabledInfo[key] = disabledInfo[key] <= 0;
        }
        let orderSummary = null;
        let burger = this.props.error ? <p>Sorry. Couldn't fetch ingredients. </p> : < Loader />;

        if (this.props.ings) {
            burger = (
                <Auxillary>
                    <Burger ingredients={this.props.ings} />
                    <BuildControls ordered={this.orderNowClickHandler} purchasable={this.updatePurchaseState()} price={this.props.amount} disabled={disabledInfo} ingredientAdded={this.props.onAddIngredient} ingredientsDeducted={this.props.onRemoveIngredient} />
                </Auxillary>
            );
            orderSummary = <OrderSummary priceList={INGREDIENT_PRICE} price={this.props.amount} continueShopping={this.continueShoppingHandler} modalClosed={this.modalClosedClosedHandler} ingredients={this.props.ings}></OrderSummary>;
        }

        //if (this.state.loading) {
        //    orderSummary = <Loader />;
        //}

        return (
            <Auxillary>
                <Modal modalClosed={this.modalClosedClosedHandler} showModal={this.state.orderNowClicked}>
                    {orderSummary}
                </Modal>
                {burger}
            </Auxillary>
        );
    }
}

const mapStateToProps = state => {
    return {
        ings: state.burgerReducer.ingredients,
        amount: state.burgerReducer.totalPrice,
        error: state.burgerReducer.error
    };
}

const mapDispatchToProps = dispatch => {
    return {
        onAddIngredient: (newIngredient) => { dispatch(buregrBuilderActionCreators.ingredientAdded(newIngredient)) },
        onRemoveIngredient: (newIngredient) => { dispatch(buregrBuilderActionCreators.ingredientRemoved(newIngredient)) },
        onIngredientInit: () => { dispatch(buregrBuilderActionCreators.initIngredients())}
    };
}


export default connect(mapStateToProps, mapDispatchToProps)(ErrorHandler(BurgerBuilder, axios));