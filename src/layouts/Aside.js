import React from 'react';
import { NavLink, Switch, Route, Link } from 'react-router-dom';
import '../styles/Aside.css'

const list = [
    { name: 'start', patch: '/', exact: true },
    { name: 'fetch docker images', patch: '/products' },
    { name: 'contact', patch: '/contact' },
    { name: 'fetch sections', patch: '/admin' },
]

const menu = list.map(item => (
    <li key={item.name}>
        <NavLink to={item.patch} exact={item.exact}>{item.name}</NavLink>
    </li>
))

const Aside = () => {
    return (
        <nav>
            <ul>
                <Switch>
                    <Route exact path="/" render={() => menu} />
                    <Route path="/contact" render={() => menu} />
                    <Route path="/products" render={() => menu} />
                    <Route path="/admin" render={() => menu} />
                    <Route path="/login" render={() => menu} />
                    <Route path="/" render={() => <Link to='/products'>Go back to products</Link>} />

                </Switch>
            </ul>
        </nav>
    );
}

export default Aside;
