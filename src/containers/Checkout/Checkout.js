import React, { Component } from 'react';
import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary';
import { Route, Redirect } from 'react-router-dom';
import ContactData from './ContactData/ContactData';
import { connect } from 'react-redux';

class Checkout extends Component {

    // componentDidMount() {
        // extracting data from query params
        // const query = new URLSearchParams(this.props.location.search);
    // }

    checkoutCancelledHandler = () => {
        this.props.history.push('/');
    }

    checkoutContinuedHandler = () => {
        this.props.history.replace('/checkout/contact-details');
    }

    render() {
        let summary = <Redirect to="/" />;
        if (this.props.ings) {
            summary = (
                <div>
                <CheckoutSummary
                    checkoutCancelled={this.checkoutCancelledHandler}
                    checkoutContinued={this.checkoutContinuedHandler}
                    ingredients={this.props.ings} />
                    <Route path={this.props.match.path + '/contact-details'} component={ContactData} />
                </div>
                );
        }
        return (
            <div>
                {summary}
            </div>
            );
    }
}

const mapStateToProps = (state) => {
    return {
        ings: state.burgerReducer.ingredients
    };
}

export default connect(mapStateToProps)(Checkout);