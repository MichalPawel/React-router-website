import React from 'react';
import { Route, Switch } from 'react-router-dom'
import HomePage from '../pages/HomePage'
import ContactPage from '../pages/ContactPage'
import AdminPage from '../pages/AdminPage'
import ErrorPage from '../pages/ErrorPage'
import ProductPage from '../pages/ProductPage'
import ProductsListPage from '../pages/ProductsListPage'
import LoginPage from '../pages/LoginPage'
const Page = () => {
    return (
        <>
            <Switch>
                <Route exact path="/" component={HomePage} />
                <Route path="/contact" component={ContactPage} />
                <Route path="/products" component={ProductsListPage} />
                <Route path="/product/:id" component={ProductPage} />
                <Route path="/admin" component={AdminPage} />
                <Route path="/login" component={LoginPage} />
                <Route path="/" component={ErrorPage} />
            </Switch>
        </>
    );
}

export default Page;