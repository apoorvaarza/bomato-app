import React from 'react';
import Layout from '../src/containers/Layout/Layout'
import BurgerBuilder from '../src/containers/BurgerBuilder/BurgerBuilder';
import Checkout from '../src/containers/Checkout/Checkout';
import { Route, Switch } from 'react-router-dom';
import MyOrders from '../src/containers/MyOrders/MyOrders';

function App() {
    return (
        <div>
            <Layout>
                <Switch>
                    <Route path="/" exact component={BurgerBuilder}></Route>
                    <Route path="/checkout" component={Checkout}></Route>
                    <Route path="/orders" component={MyOrders}></Route>
                </Switch>
            </Layout>
        </div>
    );
}

export default App;
